<?php

namespace App\Http\Controllers;

use App\Models\Gallery;
use App\Models\Material;
use App\Models\Service;
use App\Models\ServiceTable;
use Illuminate\Http\Request;

class IndexController extends Controller
{
    public function home(Request $request)
    {
        $services = Service::with('tables.headings.values')->where('active', true)->get();
        $materials = Material::with('properties')->where('active', true)->get();
        $galleries = Gallery::with('category')->get();
        $tables = ServiceTable::with('headings.values')->whereIn('service_id', $services->pluck('id'))->get();

        $tables->map(function ($item, $index) {
            $item->active = false;
            return $item;
        });

        $services->map(function ($item) {
            $item->activeTab = false;
            return $item;
        });

        return inertia('Welcome', [
            'services' => $services,
            'materials' => $materials,
            'galleries' => $galleries,
            'tables' => $tables,
        ]);
    }
}

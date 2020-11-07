<?php

namespace App\Http\Controllers;

use App\Models\Advantage;
use App\Models\Contact;
use App\Models\Gallery;
use App\Models\GalleryCategory;
use App\Models\Material;
use App\Models\MaterialCategory;
use App\Models\Service;
use App\Models\ServiceTable;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Schema;

class IndexController extends Controller
{
    public function home(Request $request)
    {
        $advantages = Advantage::where('active', true)->get();
        $services = Service::with('tables.headings.values')->where('active', true)->get();
        $materialCategories = MaterialCategory::whereHas('materials', function(Builder $query) {
            $query->with('properties')->where('active', true);
        })->with('materials.properties')->get();
        $galleries = Gallery::with('category')->get();
        $galleryCategory = GalleryCategory::whereHas('galleries')->withCount('galleries')->get()->prepend(collect([
            'title' => 'Все',
            'id' => 0,
            'galleries_count' => Gallery::all()->count(),
            'active' => true,
        ]));
        $tables = ServiceTable::with('headings.values')->whereIn('service_id', $services->pluck('id'))->get();

        $tables->map(function ($item, $index) {
            $item->active = false;
            return $item;
        });

        $services->map(function ($item) {
            $item->activeTab = false;
            return $item;
        });
        $contact = Schema::hasTable('contacts') ? Contact::all()->first() : null;

        return inertia('Welcome', [
            'services' => $services,
            'materialCategories' => $materialCategories,
            'galleries' => $galleries,
            'galleryCategories' => $galleryCategory,
            'tables' => $tables,
            'contact' => $contact,
            'advantages' => $advantages,
        ]);
    }
}

<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreMaterialRequest;
use App\Http\Requests\UpdateMaterialRequest;
use App\Models\Material;
use App\Services\ImageUploader;
use Illuminate\Http\Request;

class MaterialController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response|\Inertia\ResponseFactory
     */
    public function index()
    {
        $materials = Material::all();

        return inertia('Admin/Materials/Index', [
            'materials' => $materials,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Inertia\Response|\Inertia\ResponseFactory
     */
    public function create()
    {
        return inertia('Admin/Materials/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(StoreMaterialRequest $request)
    {
        $material = Material::create($request->all());

        $request->session()->flash('form_post', [
            'status' => true,
            'title' => 'Успешно!',
            'text' => 'Материал добавлен!'
        ]);

        return redirect()->route('materials.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Material  $material
     * @return \Illuminate\Http\Response
     */
    public function show(Material $material)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Material  $material
     * @return \Inertia\Response|\Inertia\ResponseFactory
     */
    public function edit(Material $material)
    {
        return inertia('Admin/Materials/Edit', [
            'material' => $material,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Material  $material
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(UpdateMaterialRequest $request, Material $material)
    {
        if ($request->has('image')) {
            ImageUploader::delete($material->image);
        }

        $material->update($request->all());

        $request->session()->flash('form_post', [
            'status' => true,
            'title' => 'Успешно!',
            'text' => 'Материал обновлен!'
        ]);

        return redirect()->route('materials.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Material  $material
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(Request $request, Material $material)
    {
        $material->delete();

        $request->session()->flash('form_post', [
            'status' => true,
            'title' => 'Успешно!',
            'text' => 'Материал удален!'
        ]);

        return redirect()->route('materials.index');
    }

    public function status(Request $request, Material $material)
    {
        $material->update($request->all());

        $request->session()->flash('form_post', [
            'status' => true,
            'title' => 'Успешно!',
            'text' => 'Сервис обновлен!'
        ]);

        return redirect()->route('materials.index');
    }
}

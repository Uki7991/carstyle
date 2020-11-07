<?php

namespace App\Http\Controllers;

use App\Models\Gallery;
use App\Models\GalleryCategory;
use App\Services\ImageUploader;
use Illuminate\Http\Request;

class GalleryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $galleries = Gallery::with('category')->get();

        return inertia('Admin/Galleries/Index', [
            'galleries' => $galleries,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $categories = GalleryCategory::all();

        return inertia('Admin/Galleries/Create', [
            'categories' => $categories,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $category = GalleryCategory::where('title', $request->gallery_category['title'])->first();

        if (!$category) {
            $category = GalleryCategory::create(['title' => $request->gallery_category['title']]);
        }

        $category->galleries()->createMany($request->images);

        return redirect()->route('galleries.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Gallery  $gallery
     * @return \Illuminate\Http\Response
     */
    public function show(Gallery $gallery)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Gallery  $gallery
     * @return \Inertia\Response|\Inertia\ResponseFactory
     */
    public function edit(Gallery $gallery)
    {
        $categories = GalleryCategory::all();

        return inertia('Admin/Galleries/Edit', [
            'categories' => $categories,
            'gallery' => $gallery->load('category'),
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Gallery  $gallery
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(Request $request, Gallery $gallery)
    {
        $category = GalleryCategory::where('title', $request->gallery_category['title'])->first();

        if (!$category) {
            $category = GalleryCategory::create(['title' => $request->gallery_category['title']]);
        }

        $previousImage = $gallery->image;

        if ($request->has('image') && $gallery->wasChanged('image') && $previousImage) {
            ImageUploader::delete($previousImage);
        }
        $gallery->update($request->all());
        $category->galleries()->save($gallery);

        return redirect()->route('galleries.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Gallery  $gallery
     * @return \Illuminate\Http\Response
     */
    public function destroy(Gallery $gallery)
    {
        ImageUploader::delete($gallery->image);
        $gallery->delete();

        return redirect()->route('galleries.index');
    }
}

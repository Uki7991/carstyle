<?php

namespace App\Http\Controllers;

use App\Models\Advantage;
use App\Services\ImageUploader;
use Illuminate\Http\Request;

class AdvantageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $advantages = Advantage::all();

        return inertia('Admin/Advantages/Index', [
            'advantages' => $advantages,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return inertia('Admin/Advantages/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $advantage = Advantage::create($request->all());

        $request->session()->flash('form_post', [
            'status' => true,
            'title' => 'Успешно!',
            'text' => 'Преимущество создано!'
        ]);

        return redirect()->route('advantages.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Advantage  $advantage
     * @return \Illuminate\Http\Response
     */
    public function show(Advantage $advantage)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Advantage  $advantage
     * @return \Illuminate\Http\Response
     */
    public function edit(Advantage $advantage)
    {
        return inertia('Admin/Advantages/Edit', [
            'advantage' => $advantage,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Advantage  $advantage
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Advantage $advantage)
    {
        $previousImage = $advantage->image;
        $advantage->update($request->all());

        if ($request->has('image') && $previousImage && $advantage->wasChanged('image')) {
            ImageUploader::delete($previousImage);
        }

        $request->session()->flash('form_post', [
            'status' => true,
            'title' => 'Успешно!',
            'text' => 'Преимущество обновлено!'
        ]);

        return redirect()->route('advantages.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Advantage  $advantage
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, Advantage $advantage)
    {
        ImageUploader::delete($advantage->image);

        $advantage->delete();

        $request->session()->flash('form_post', [
            'status' => true,
            'title' => 'Успешно!',
            'text' => 'Удалено!'
        ]);

        return redirect()->route('advantages.index');
    }

    public function status(Request $request, Advantage $advantage)
    {
//        dd($request->all());
        $advantage->update($request->all());

        $request->session()->flash('form_post', [
            'status' => true,
            'title' => 'Успешно!',
            'text' => 'Преимущество обновлено!'
        ]);

        return redirect()->route('advantages.index');
    }
}

<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdateServiceRequest;
use App\Http\Requests\StoreServiceRequest;
use App\Models\Service;
use App\Services\ImageUploader;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\URL;

class ServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response|\Inertia\ResponseFactory
     */
    public function index()
    {
        $services = Service::all();

        return inertia('Admin/Services/Index', [
            'services' => $services,
            'create_url' => URL::route('services.create'),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Inertia\Response|\Inertia\ResponseFactory
     */
    public function create()
    {
        return inertia('Admin/Services/Create', [
            'back' => URL::route('services.index'),
            'store_url' => URL::route('services.store'),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(StoreServiceRequest $request)
    {
        $service = Service::create($request->validated());

        $request->session()->flash('form_post', [
            'status' => true,
            'title' => 'Сервис создан!',
            'text' => 'Сервис создан!'
        ]);

        return redirect()->route('services.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Service  $service
     * @return Response
     */
    public function show(Service $service)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Service  $service
     * @return \Inertia\Response|\Inertia\ResponseFactory
     */
    public function edit(Service $service)
    {
        return inertia('Admin/Services/Edit', [
            'service' => $service,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Service  $service
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(UpdateServiceRequest $request, Service $service)
    {
        $service->update($request->all());

        $request->session()->flash('form_post', [
            'status' => true,
            'title' => 'Успешно!',
            'text' => 'Сервис обновлен!'
        ]);

        return redirect()->route('services.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Service  $service
     * @return Response
     */
    public function destroy(Service $service)
    {
        $service->delete();

        return redirect()->route('services.index');
    }

    public function postImage(Request $request)
    {
        $filename = ImageUploader::upload($request->files->get('test'), 'services', 'service');

        return \response()->json([
            'filename' => $filename,
        ]);
    }

    public function status(Request $request, Service $service)
    {
        $service->update($request->all());

        $request->session()->flash('form_post', [
            'status' => true,
            'title' => 'Успешно!',
            'text' => 'Сервис обновлен!'
        ]);

        return redirect()->route('services.index');
    }
}

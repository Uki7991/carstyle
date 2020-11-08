<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdateServiceRequest;
use App\Http\Requests\StoreServiceRequest;
use App\Models\Service;
use App\Models\ServiceTable;
use App\Models\ServiceTableBody;
use App\Models\ServiceTableHeading;
use App\Services\ImageUploader;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
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
        DB::transaction(function () use ($request) {
            $service = Service::create($request->validated());

            foreach ($request->tables as $rTable) {
                $table = $service->tables()->create($rTable);
                foreach ($rTable['headings'] as $rHeading) {
                    $heading = $table->headings()->create($rHeading);
                    $heading->values()->createMany($rHeading['values']);
                }
            }
        });

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
            'service' => $service->load('tables.headings.values'),
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
        $previousImage = $service->image;

        DB::transaction(function () use ($request, $service) {

            if (count($request->deleted['tables'])) {
                foreach ($request->deleted['tables'] as $table) {
                    $table = ServiceTable::find($table['id']);
                    if ($table) {
                        $table->values()->delete();
                        $table->headings()->delete();
                        $table->delete();
                    }
                }
            }

            if (count($request->deleted['headings'])) {
                foreach ($request->deleted['headings'] as $heading) {
                    $heading = ServiceTableHeading::find($heading['id']);

                    if ($heading) {
                        $heading->values()->delete();
                        $heading->delete();
                    }
                }
            }

            if (count($request->deleted['values'])) {
                foreach ($request->deleted['values'] as $value) {
                    $value = ServiceTableBody::find($value['id']);

                    if ($value) {
                        $value->delete();
                    }
                }
            }

            $service->update($request->all());

            foreach ($request->tables as $rTable) {
                $table = $service->tables()->updateOrCreate([
                    'id' => array_key_exists('id', $rTable) ? $rTable['id'] : 0,
                ], $rTable);
                foreach ($rTable['headings'] as $rHeading) {
                    $heading = $table->headings()->updateOrCreate([
                        'id' => array_key_exists('id', $rHeading) ? $rHeading['id'] : 0,
                    ], $rHeading);

                    foreach ($rHeading['values'] as $value) {
                        $heading->values()->updateOrCreate([
                            'id' => array_key_exists('id', $value) ? $value['id'] : 0,
                        ], $value);
                    }
                }
            }
        });

        if ($request->has('image') && $service->wasChanged('image') && $previousImage) {
            ImageUploader::delete($previousImage);
        }

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
        ImageUploader::delete($service->image);
        $service->delete();

        return redirect()->route('services.index');
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

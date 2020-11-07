<?php

namespace App\Providers;

use App\Models\Contact;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\View;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        View::share('contact', Schema::hasTable('contacts') ? Contact::all()->first() : null);
        Inertia::share([
            'form_post' => function() {
                return session()->get('form_post');
            },
            'contact_id' => function() {
                return Schema::hasTable('contacts') ? Contact::all()->first()->id : null;
            }
        ]);
    }
}

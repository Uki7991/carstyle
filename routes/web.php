<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\MaterialController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/login', [LoginController::class, 'login'])->name('login');

Route::get('/', function () {
    return inertia('Welcome');
});

Route::group(['prefix' => 'admin', 'middleware' => ['auth:sanctum', 'verified']], function () {
    Route::get('/dashboard', function () {
        return Inertia\Inertia::render('Dashboard');
    })->name('dashboard');

    Route::post('/services/post-image', [ServiceController::class, 'postImage'])->name('services.post-image');
    Route::resource('services', ServiceController::class);
    Route::resource('materials', MaterialController::class);
});


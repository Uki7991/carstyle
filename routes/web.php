<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\ImageUploadController;
use App\Http\Controllers\MaterialController;
use App\Http\Controllers\GalleryController;
use App\Http\Controllers\IndexController;

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

Route::get('/', [IndexController::class, 'home']);

Route::post('/bids', [\App\Http\Controllers\BidController::class, 'store'])->name('bids.store');

Route::group(['prefix' => 'admin', 'middleware' => ['auth:sanctum', 'verified']], function () {
    Route::redirect('/', '/admin/dashboard')->name('admin');
    Route::get('/dashboard', function () {
        return Inertia\Inertia::render('Dashboard');
    })->name('dashboard');
    Route::post('/images/post-image', [ImageUploadController::class, 'postImage'])->name('images.post-image');

    Route::put('/services/{service}/status', [ServiceController::class, 'status'])->name('services.status');
    Route::resource('services', ServiceController::class);
    Route::put('/materials/{material}/status', [MaterialController::class, 'status'])->name('materials.status');
    Route::resource('materials', MaterialController::class);
    Route::put('/galleries/{gallery}/status', [GalleryController::class, 'status'])->name('galleries.status');
    Route::resource('galleries', GalleryController::class);

    Route::resource('contacts', \App\Http\Controllers\ContactController::class)->only(['edit', 'update']);
});


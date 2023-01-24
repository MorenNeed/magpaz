<?php

use App\Http\Controllers\Category\CreateController;
use App\Http\Controllers\Category\DeleteController;
use App\Http\Controllers\Category\EditController;
use App\Http\Controllers\Category\IndexController as CategoryIndexController;
use App\Http\Controllers\Category\ShowController;
use App\Http\Controllers\Category\StoreController;
use App\Http\Controllers\Category\UpdateController;
use App\Http\Controllers\Color\CreateController as ColorCreateController;
use App\Http\Controllers\Color\DeleteController as ColorDeleteController;
use App\Http\Controllers\Color\EditController as ColorEditController;
use App\Http\Controllers\Color\IndexController as ColorIndexController;
use App\Http\Controllers\Color\ShowController as ColorShowController;
use App\Http\Controllers\Color\StoreController as ColorStoreController;
use App\Http\Controllers\Color\UpdateController as ColorUpdateController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Main\IndexController;
use App\Http\Controllers\Product\CreateController as ProductCreateController;
use App\Http\Controllers\Product\DeleteController as ProductDeleteController;
use App\Http\Controllers\Product\EditController as ProductEditController;
use App\Http\Controllers\Product\IndexController as ProductIndexController;
use App\Http\Controllers\Product\ShowController as ProductShowController;
use App\Http\Controllers\Product\StoreController as ProductStoreController;
use App\Http\Controllers\Product\UpdateController as ProductUpdateController;
use App\Http\Controllers\Tag\CreateController as TagCreateController;
use App\Http\Controllers\Tag\DeleteController as TagDeleteController;
use App\Http\Controllers\Tag\EditController as TagEditController;
use App\Http\Controllers\Tag\IndexController as TagIndexController;
use App\Http\Controllers\Tag\ShowController as TagShowController;
use App\Http\Controllers\Tag\StoreController as TagStoreController;
use App\Http\Controllers\Tag\UpdateController as TagUpdateController;
use App\Http\Controllers\User\CreateController as UserCreateController;
use App\Http\Controllers\User\DeleteController as UserDeleteController;
use App\Http\Controllers\User\EditController as UserEditController;
use App\Http\Controllers\User\IndexController as UserIndexController;
use App\Http\Controllers\User\ShowController as UserShowController;
use App\Http\Controllers\User\StoreController as UserStoreController;
use App\Http\Controllers\User\UpdateController as UserUpdateController;

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

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/products', function() {
    return Inertia::render('Products', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('products');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/admin', IndexController::class)->name('main.index');

Route::group(['prefix' => 'admin/categories'], function() {
        Route::get('/', CategoryIndexController::class)->name('admin.category.index');
        Route::get('/create', CreateController::class)->name('admin.category.create');
        Route::post('/', StoreController::class)->name('admin.category.store');
        Route::get('/{category}/edit', EditController::class)->name('admin.category.edit');
        Route::get('/{category}', ShowController::class)->name('admin.category.show');
        Route::patch('/{category}', UpdateController::class)->name('admin.category.update');
        Route::delete('/{category}', DeleteController::class)->name('admin.category.delete');
    }); 
     
    Route::group(['prefix' => 'admin/tags'], function() { 
     Route::get('/', TagIndexController::class)->name('admin.tag.index'); 
     Route::get('/create', TagCreateController::class)->name('admin.tag.create'); 
     Route::post('/', TagStoreController::class)->name('admin.tag.store'); 
     Route::get('/{tag}/edit', TagEditController::class)->name('admin.tag.edit'); 
     Route::get('/{tag}', TagShowController::class)->name('admin.tag.show'); 
     Route::patch('/{tag}', TagUpdateController::class)->name('admin.tag.update'); 
     Route::delete('/{tag}', TagDeleteController::class)->name('admin.tag.delete'); 
    }); 
     
    Route::group(['prefix' => 'admin/colors'], function() { 
     Route::get('/', ColorIndexController::class)->name('admin.color.index'); 
     Route::get('/create', ColorCreateController::class)->name('admin.color.create'); 
     Route::post('/', ColorStoreController::class)->name('admin.color.store'); 
     Route::get('/{color}/edit', ColorEditController::class)->name('admin.color.edit'); 
     Route::get('/{color}', ColorShowController::class)->name('admin.color.show'); 
     Route::patch('/{color}', ColorUpdateController::class)->name('admin.color.update'); 
     Route::delete('/{color}', ColorDeleteController::class)->name('admin.color.delete'); 
    }); 
     
    Route::group(['prefix' => 'admin/users'], function() { 
     Route::get('/', UserIndexController::class)->name('admin.user.index'); 
     Route::get('/create', UserCreateController::class)->name('admin.user.create'); 
     Route::post('/', UserStoreController::class)->name('admin.user.store'); 
     Route::get('/{user}/edit', UserEditController::class)->name('admin.user.edit'); 
     Route::get('/{user}', UserShowController::class)->name('admin.user.show'); 
     Route::patch('/{user}', UserUpdateController::class)->name('admin.user.update'); 
     Route::delete('/{user}', UserDeleteController::class)->name('admin.user.delete'); 
    }); 
     
    Route::group(['prefix' => 'admin/products'], function() { 
     Route::get('/', ProductIndexController::class)->name('admin.product.index'); 
     Route::get('/create', ProductCreateController::class)->name('admin.product.create'); 
     Route::post('/', ProductStoreController::class)->name('admin.product.store'); 
     Route::get('/{product}/edit', ProductEditController::class)->name('admin.product.edit'); 
     Route::get('/{product}', ProductShowController::class)->name('admin.product.show'); 
     Route::patch('/{product}', ProductUpdateController::class)->name('admin.product.update'); 
     Route::delete('/{product}', ProductDeleteController::class)->name('admin.product.delete'); 
    });

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';

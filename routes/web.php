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

Route::get('/checkout', function() {
    return Inertia::render('Checkout');
})->middleware(['auth'])->name('checkout');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/admin', IndexController::class)->middleware(['auth', 'verified.admin'])->name('main.index');

Route::group(['prefix' => 'admin/categories'], function() {
        Route::get('/', CategoryIndexController::class)->middleware(['auth', 'verified.admin'])->name('admin.category.index');
        Route::get('/create', CreateController::class)->middleware(['auth', 'verified.admin'])->name('admin.category.create');
        Route::post('/', StoreController::class)->middleware(['auth', 'verified.admin'])->name('admin.category.store');
        Route::get('/{category}/edit', EditController::class)->middleware(['auth', 'verified.admin'])->name('admin.category.edit');
        Route::get('/{category}', ShowController::class)->middleware(['auth', 'verified.admin'])->name('admin.category.show');
        Route::patch('/{category}', UpdateController::class)->middleware(['auth', 'verified.admin'])->name('admin.category.update');
        Route::delete('/{category}', DeleteController::class)->middleware(['auth', 'verified.admin'])->name('admin.category.delete');
    }); 
     
    Route::group(['prefix' => 'admin/tags'], function() { 
     Route::get('/', TagIndexController::class)->middleware(['auth', 'verified.admin'])->name('admin.tag.index'); 
     Route::get('/create', TagCreateController::class)->middleware(['auth', 'verified.admin'])->name('admin.tag.create'); 
     Route::post('/', TagStoreController::class)->middleware(['auth', 'verified.admin'])->name('admin.tag.store'); 
     Route::get('/{tag}/edit', TagEditController::class)->middleware(['auth', 'verified.admin'])->name('admin.tag.edit'); 
     Route::get('/{tag}', TagShowController::class)->middleware(['auth', 'verified.admin'])->name('admin.tag.show'); 
     Route::patch('/{tag}', TagUpdateController::class)->middleware(['auth', 'verified.admin'])->name('admin.tag.update'); 
     Route::delete('/{tag}', TagDeleteController::class)->middleware(['auth', 'verified.admin'])->name('admin.tag.delete'); 
    }); 
     
    Route::group(['prefix' => 'admin/colors'], function() { 
     Route::get('/', ColorIndexController::class)->middleware(['auth', 'verified.admin'])->name('admin.color.index'); 
     Route::get('/create', ColorCreateController::class)->middleware(['auth', 'verified.admin'])->name('admin.color.create'); 
     Route::post('/', ColorStoreController::class)->middleware(['auth', 'verified.admin'])->name('admin.color.store'); 
     Route::get('/{color}/edit', ColorEditController::class)->middleware(['auth', 'verified.admin'])->name('admin.color.edit'); 
     Route::get('/{color}', ColorShowController::class)->middleware(['auth', 'verified.admin'])->name('admin.color.show'); 
     Route::patch('/{color}', ColorUpdateController::class)->middleware(['auth', 'verified.admin'])->name('admin.color.update'); 
     Route::delete('/{color}', ColorDeleteController::class)->middleware(['auth', 'verified.admin'])->name('admin.color.delete'); 
    }); 
     
    Route::group(['prefix' => 'admin/users'], function() { 
     Route::get('/', UserIndexController::class)->middleware(['auth', 'verified.admin'])->name('admin.user.index'); 
     Route::get('/create', UserCreateController::class)->middleware(['auth', 'verified.admin'])->name('admin.user.create'); 
     Route::post('/', UserStoreController::class)->middleware(['auth', 'verified.admin'])->name('admin.user.store'); 
     Route::get('/{user}/edit', UserEditController::class)->middleware(['auth', 'verified.admin'])->name('admin.user.edit'); 
     Route::get('/{user}', UserShowController::class)->middleware(['auth', 'verified.admin'])->name('admin.user.show'); 
     Route::patch('/{user}', UserUpdateController::class)->middleware(['auth', 'verified.admin'])->name('admin.user.update'); 
     Route::delete('/{user}', UserDeleteController::class)->middleware(['auth', 'verified.admin'])->name('admin.user.delete'); 
    }); 
     
    Route::group(['prefix' => 'admin/products'], function() { 
     Route::get('/', ProductIndexController::class)->middleware(['auth', 'verified.admin'])->name('admin.product.index'); 
     Route::get('/create', ProductCreateController::class)->middleware(['auth', 'verified.admin'])->name('admin.product.create'); 
     Route::post('/', ProductStoreController::class)->middleware(['auth', 'verified.admin'])->name('admin.product.store'); 
     Route::get('/{product}/edit', ProductEditController::class)->middleware(['auth', 'verified.admin'])->name('admin.product.edit'); 
     Route::get('/{product}', ProductShowController::class)->middleware(['auth', 'verified.admin'])->name('admin.product.show'); 
     Route::patch('/{product}', ProductUpdateController::class)->middleware(['auth', 'verified.admin'])->name('admin.product.update'); 
     Route::delete('/{product}', ProductDeleteController::class)->middleware(['auth', 'verified.admin'])->name('admin.product.delete'); 
    });

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';

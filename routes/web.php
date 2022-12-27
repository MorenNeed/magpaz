<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\Category\CreateController as CategoryCreateController;
use App\Http\Controllers\Category\DeleteController as CategoryDeleteController;
use App\Http\Controllers\Category\EditController as CategoryEditController;
use App\Http\Controllers\Category\IndexController as CategoryIndexController;
use App\Http\Controllers\Category\ShowController as CategoryShowController;
use App\Http\Controllers\Category\StoreController as CategoryStoreController;
use App\Http\Controllers\Category\UpdateController as CategoryUpdateController;

use App\Http\Controllers\Color\CreateController as ColorCreateController;
use App\Http\Controllers\Color\DeleteController as ColorDeleteController;
use App\Http\Controllers\Color\EditController as ColorEditController;
use App\Http\Controllers\Color\IndexController as ColorIndexController;
use App\Http\Controllers\Color\ShowController as ColorShowController;
use App\Http\Controllers\Color\StoreController as ColorStoreController;
use App\Http\Controllers\Color\UpdateController as ColorUpdateController;
use App\Http\Controllers\Main\IndexController;
use App\Http\Controllers\Product\CreateController as ProductCreateController;
use App\Http\Controllers\Product\DeleteController as ProductDeleteController;
use App\Http\Controllers\Product\EditController as ProductEditController;
use App\Http\Controllers\Product\IndexController as ProductIndexController;
use App\Http\Controllers\Product\ShowController as ProductShowController;
use App\Http\Controllers\Product\StoreController as ProductStoreController;
use App\Http\Controllers\Product\UpdateController as ProductUpdateController;
use App\Http\Controllers\ProfileController;
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
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use League\CommonMark\Extension\CommonMark\Node\Block\IndentedCode;

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

Route::get('/', IndexController::class)->name('main.index');

Route::group(['prefix' => 'categories'], function() {
    Route::get('/', CategoryIndexController::class)->name('category.index');
    Route::get('/create', CategoryCreateController::class)->name('category.create');
    Route::post('/', CategoryStoreController::class)->name('category.store');
    Route::patch('/{category}/edit', CategoryEditController::class)->name('category.edit');
    Route::get('/{category}', CategoryShowController::class)->name('category.show');
    Route::post('/{category}', CategoryUpdateController::class)->name('category.update');
    Route::delete('/{category}', CategoryDeleteController::class)->name('category.delete');
});

Route::group(['prefix' => 'tags'], function() {
    Route::get('/', TagIndexController::class)->name('tag.index');
    Route::get('/create', TagCreateController::class)->name('tag.create');
    Route::post('/', TagStoreController::class)->name('tag.store');
    Route::patch('/{tag}/edit', TagEditController::class)->name('tag.edit');
    Route::get('/{tag}', TagShowController::class)->name('tag.show');
    Route::post('/{tag}', TagUpdateController::class)->name('tag.update');
    Route::delete('/{tag}', TagDeleteController::class)->name('tag.delete');
});

Route::group(['prefix' => 'colors'], function() {
    Route::get('/', ColorIndexController::class)->name('color.index');
    Route::get('/create', ColorCreateController::class)->name('color.create');
    Route::post('/', ColorStoreController::class)->name('color.store');
    Route::patch('/{color}/edit', ColorEditController::class)->name('color.edit');
    Route::get('/{color}', ColorShowController::class)->name('color.show');
    Route::post('/{color}', ColorUpdateController::class)->name('color.update');
    Route::delete('/{color}', ColorDeleteController::class)->name('color.delete');
});

Route::group(['prefix' => 'users'], function() {
    Route::get('/', UserIndexController::class)->name('user.index');
    Route::get('/create', UserCreateController::class)->name('user.create');
    Route::post('/', UserStoreController::class)->name('user.store');
    Route::patch('/{user}/edit', UserEditController::class)->name('user.edit');
    Route::get('/{user}', UserShowController::class)->name('user.show');
    Route::post('/{user}', UserUpdateController::class)->name('user.update');
    Route::delete('/{user}', UserDeleteController::class)->name('user.delete');
});

Route::group(['prefix' => 'products'], function() {
    Route::get('/', ProductIndexController::class)->name('product.index');
    Route::get('/create', ProductCreateController::class)->name('product.create');
    Route::post('/', ProductStoreController::class)->name('product.store');
    Route::patch('/{product}/edit', ProductEditController::class)->name('product.edit');
    Route::get('/{product}', ProductShowController::class)->name('product.show');
    Route::post('/{product}', ProductUpdateController::class)->name('product.update');
    Route::delete('/{product}', ProductDeleteController::class)->name('product.delete');
});

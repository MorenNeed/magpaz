<?php

use App\Http\Controllers\API\Category\IndexController as CategoryIndexController;
use App\Http\Controllers\API\Color\IndexController as ColorIndexController;
use App\Http\Controllers\Api\OrderProduct\IndexController as OrderProductIndexController;
use App\Http\Controllers\API\Product\IndexController;
use App\Http\Controllers\API\Tag\IndexController as TagIndexController;
use App\Http\Controllers\API\User\IndexController as UserIndexController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/currentuser', [UserIndexController::class, 'getCurrentUser']);

Route::get('orderproducts/show/{userId}', [OrderProductIndexController::class, 'show']);

Route::get('/products', IndexController::class);

Route::get('/categories', CategoryIndexController::class);

Route::get('/tags', TagIndexController::class);

Route::get('/colors', ColorIndexController::class);
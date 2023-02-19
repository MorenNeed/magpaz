<?php

namespace App\Http\Controllers\Api\OrderProduct;

use App\Http\Controllers\Controller;
use App\Models\OrderProduct;
use Illuminate\Http\Request;

class IndexController extends Controller
{
    public function index()
    {
        $OrderProducts = OrderProduct::all();

        return response()->json($OrderProducts);
    }

    public function store(Request $request)
    {
        $OrderProduct = OrderProduct::create($request->all());

        return response()->json($OrderProduct, 201);
    }

    public function show($userId, OrderProduct $OrderProduct)
    {
        $OrderProduct = $OrderProduct::where('user_id', $userId);
        return response()->json($OrderProduct);
    }

    public function update(Request $request, OrderProduct $OrderProduct)
    {
        $OrderProduct->update($request->all());

        return response()->json($OrderProduct);
    }

    public function destroy(OrderProduct $OrderProduct)
    {
        $OrderProduct->delete();

        return response()->json(null, 204);
    }
}

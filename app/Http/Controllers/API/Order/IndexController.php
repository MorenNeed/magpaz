<?php

namespace App\Http\Controllers\Api\Order;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Order;

class IndexController extends Controller
{
    public function store(Request $request)
    {
        // валідація вхідних даних

        // створення нового замовлення
        $order = new Order;
        $order->user_id = $request->user_id;
        $order->billing_email = $request->billing_email;
        $order->billing_name =  $request->billing_name;

        // збереження замовлення в базу даних
        $order->save();

        // повернення відповіді з створеним замовленням
        return response()->json([
            'order' => $order,
            'message' => 'Order created successfully'
        ], 201);
    }
}

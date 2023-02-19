<?php

namespace App\Http\Controllers\OrderProduct;

use App\Http\Controllers\Controller;
use App\Models\OrderProduct;
use Illuminate\Http\Request;

class ShowController extends Controller
{
    public function __invoke(OrderProduct $orderproduct)
    {
        return view('admin.OrderProduct.show', compact('orderproduct'));
    }
}

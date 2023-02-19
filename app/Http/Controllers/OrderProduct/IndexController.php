<?php

namespace App\Http\Controllers\OrderProduct;

use App\Http\Controllers\Controller;
use App\Models\OrderProduct;
use Illuminate\Http\Request;

class IndexController extends Controller
{
    public function __invoke()
    {
        $orderproducts = OrderProduct::all();
        return view('admin.OrderProduct.index', compact('orderproducts'));
    }
}

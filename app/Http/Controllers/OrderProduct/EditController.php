<?php

namespace App\Http\Controllers\OrderProduct;

use App\Http\Controllers\Controller;
use App\Models\OrderProduct;
use Illuminate\Http\Request;

class EditController extends Controller
{
    public function __invoke(OrderProduct $orderproduct)
    {
        return view('admin.OrderProduct.edit',compact('orderproduct'));
    }
}

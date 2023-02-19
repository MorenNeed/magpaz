<?php

namespace App\Http\Controllers\OrderProduct;

use App\Http\Controllers\Controller;
use App\Http\Requests\OrderProduct\UpdateRequest;
use App\Models\OrderProduct;
use Illuminate\Http\Request;

class UpdateController extends Controller
{
    public function __invoke(UpdateRequest $updateRequest, OrderProduct $OrderProduct)
    {
        $data = $updateRequest->validated();
        $OrderProduct->update($data);

        return view('admin.OrderProduct.show', compact('OrderProduct'));
    }
}

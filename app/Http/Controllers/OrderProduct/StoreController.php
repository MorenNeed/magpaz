<?php

namespace App\Http\Controllers\OrderProduct;

use App\Http\Controllers\Controller;
use App\Http\Requests\OrderProduct\StoreRequest;
use App\Models\OrderProduct;
use Illuminate\Http\Request;

class StoreController extends Controller
{
    public function __invoke(StoreRequest $storeRequest)
    {
        $orderproduct = $storeRequest->validated();
        OrderProduct::firstOrCreate($orderproduct);

        return redirect()->route('admin.orderproduct.index');
    }
}

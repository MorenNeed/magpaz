<?php

namespace App\Http\Controllers\Product;

use App\Http\Controllers\Controller;
use App\Models\ColorProduct;
use App\Models\Product;
use App\Models\ProductTag;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class DeleteController extends Controller
{
    public function __invoke(Product $product)
    {
        ColorProduct::where("product_id", $product->id)->delete();
        ProductTag::where('product_id', $product->id)->delete();
        Storage::disk('public')->delete($product->preview_image);
        $product->delete();

        return redirect()->route('product.index');
    }
}

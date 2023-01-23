<?php

namespace App\Http\Controllers\Product;

use App\Http\Controllers\Controller;
use App\Http\Requests\Product\UpdateRequest;
use App\Models\ColorProduct;
use App\Models\Product;
use App\Models\ProductTag;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class UpdateController extends Controller
{
    public function __invoke(UpdateRequest $updateRequest, Product $product)
    {
        $data = $updateRequest->validated();

        if($data['old_preview_image'] != $data['preview_image'])
        {
            Storage::disk('public')->delete($data['old_preview_image']);
            $data['preview_image'] = Storage::disk('public')->put('/images', $data['preview_image']);

        }

        unset($data['old_preview_image']);

        $tagsIds = $data['tags'];
        $colorsIds = $data['colors'];

        unset($data['tags'], $data['colors']);

        $product->update($data);

        ProductTag::where('product_id', $product->id)->delete();
        foreach($tagsIds as $tagId)
        {
            ProductTag::firstOrCreate([
                'product_id' => $product->id,
                'tag_id' => $tagId
            ]);
        }
        ColorProduct::where('product_id', $product->id)->delete();
        foreach($colorsIds as $colorId)
        {
            ColorProduct::firstOrCreate([
                'product_id' => $product->id,
                'color_id' => $colorId
            ]);
        }

        return view('product.show', compact('product'));
    }
}

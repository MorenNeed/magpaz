<?php

namespace App\Http\Controllers\Color;

use App\Http\Controllers\Controller;
use App\Models\Color;
use App\Models\ColorProduct;
use Illuminate\Http\Request;

class DeleteController extends Controller
{
    public function __invoke(Color $color)
    {
        ColorProduct::where("color_id", $color->id)->delete();
        $color->delete();

        return redirect()->route('color.index');
    }
}

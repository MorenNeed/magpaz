<?php

namespace App\Http\Controllers\API\Color;

use App\Http\Controllers\Controller;
use App\Http\Resources\Color\ColorResource;
use App\Models\Color;


class IndexController extends Controller
{
    public function __invoke()
    {
        $colors = Color::all();
        return ColorResource::collection($colors);
    }
}

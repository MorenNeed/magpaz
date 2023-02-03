<?php

namespace App\Http\Controllers\API\Tag;

use App\Http\Controllers\Controller;
use App\Http\Resources\Tag\TagResource;
use App\Models\Tag;


class IndexController extends Controller
{
    public function __invoke()
    {
        $tags = Tag::all();
        return TagResource::collection($tags);
    }
}

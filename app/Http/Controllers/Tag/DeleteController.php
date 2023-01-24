<?php

namespace App\Http\Controllers\Tag;

use App\Http\Controllers\Controller;
use App\Models\ProductTag;
use App\Models\Tag;
use Illuminate\Http\Request;

class DeleteController extends Controller
{
    public function __invoke(Tag $tag)
    {
        ProductTag::where('tag_id', $tag->id)->delete();
        $tag->delete();

        return redirect()->route('admin.tag.index');
    }
}

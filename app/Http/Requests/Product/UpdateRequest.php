<?php

namespace App\Http\Requests\Product;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'title' => 'required|string',
            'description' => 'required',
            'content' => 'required',
            'preview_image' => 'required',
            'old_preview_image' => 'required',
            'price' => 'required',
            'count' => 'required',
            'is_published' => 'nullable',
            'category_id' => 'nullable',
            'tags' => 'required|array',
            'colors' => 'required|array',
        ];
    }
}

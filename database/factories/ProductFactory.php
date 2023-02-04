<?php

namespace Database\Factories;

use App\Http\Resources\Category\CategoryResource;
use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;


/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'title' => fake()->name(),
            'description' => fake()->name(),
            'content' => Str::random(50),
            'preview_image' => fake()->imageUrl(),
            'price' => fake()->numberBetween(100, 800),
            'count' => fake()->numberBetween(4, 30),
            'category_id' => fake()->numberBetween(1, 10),
        ];
    }
}

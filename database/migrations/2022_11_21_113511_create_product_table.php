<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
            Schema::create('products', function (Blueprint $table) {
                $table->id();
                $table->string(column:'title');
                $table->text(column:'description');
                $table->text(column:'content');
                $table->string(column:'preview_image')->nullable();
                $table->unsignedDecimal(column:'price');
                $table->unsignedInteger(column:'count');
                $table->boolean(column:"is_published")->default(value: true);

                $table->foreignId('category_id')->nullable()->index()->constrained('categories');

                $table->timestamps();
            });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('product');
    }
};

<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{

    const GENDER_MALE = 1;
    const GENDER_FEMALE = 2;

    protected $table = "users";
    protected $guarded = false;
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    static function getGenders()
    {
        return [
            self::GENDER_MALE => 'Male',
            self::GENDER_FEMALE => 'Female',
        ];
    }

    public function getGenderTitleAttribute()
    {
        return self::getGenders()[$this->gender];
    }
}

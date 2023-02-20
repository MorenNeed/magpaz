<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as AuthUser;
use Illuminate\Notifications\Notifiable;

class User extends AuthUser
{
    use HasFactory, Notifiable;

    const GENDER_MALE = 1;
    const GENDER_FEMALE = 2;

    protected $fillable = [
        'name',
        'email',
        'password'
    ];

    protected $hidden = [
        'password',
        'remember_token'
    ];

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
    public function orders()
    {
        return $this->hasMany(Order::class);
    }
}

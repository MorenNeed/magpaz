<?php

namespace App\Http\Controllers\API\User;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class IndexController extends Controller
{
    public function getCurrentUser()
    {
        $user = auth()->user();
        return response()->json(['user' => $user]);
    }
}

<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\{
    HomeController,
    HelpController
};

Route::get('/', [HomeController::class, "index"]);
Route::get('/help', [HelpController::class, "index"]);

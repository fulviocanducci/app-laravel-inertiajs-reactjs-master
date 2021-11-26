<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\{
    HomeController,
    HelpController,
    TodoController
};

Route::get('/', [HomeController::class, "index"]);
Route::get('/help', [HelpController::class, "index"]);
Route::get('/todo', [TodoController::class, "index"])->name('todo.index');
Route::get('/todo/create', [TodoController::class, "create"])->name('todo.create');
Route::get('/todo/edit/{id}', [TodoController::class, "edit"])->name('todo.edit');
Route::post('/todo/store', [TodoController::class, "store"])->name('todo.store');

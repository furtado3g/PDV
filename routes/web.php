<?php

use App\Http\Controllers\ClientsController as Clients;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


Route::middleware('auth')->group(function () {
    Route::get('/clients', [Clients::class, 'index'])->name('clients');

    Route::get('/clients/create', [Clients::class,'create'])->name('clients.create');
    Route::post('/clients/create', [Clients::class, 'store'])->name('clients.store');

    Route::get('/clients/{client}/edit', [Clients::class, 'edit'])->name('clients.edit');
    Route::patch('/clients/{client}', [Clients::class, 'update'])->name('clients.update');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';

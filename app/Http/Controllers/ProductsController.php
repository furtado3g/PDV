<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Product as ProductModel;

class ProductsController extends Controller
{
    public function index()
    {
        return Inertia::render('Products', [
            'products' => ProductModel::all()
        ]);
    }
}

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

    public function create(){
        return Inertia::render('ProductsForm',[
            'product' => null,
            'productGroups' => \App\Models\ProductGroup::all()
        ]);
    }

    public function store(Request $request){
        $product = ProductModel::create($request->all());
        return redirect()->route('products.index');
    }
}

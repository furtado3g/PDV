<?php

namespace App\Http\Controllers;

use App\Models\productGroup;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductGroupController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('ProductsGroup', [
            'productGroups' => productGroup::all()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
       return Inertia::render('ProductsGroupForm',[
        'productGroup' => null
       ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $productGroup = productGroup::create($request->all());
        return redirect()->route('products.groups');
    }

    /**
     * Display the specified resource.
     */
    public function show(productGroup $productGroup)
    {
        $data = productGroup::find($productGroup->id);
        return Inertia::render('ProductsGroupForm',[
            'productGroup' => $data
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request,productGroup $productGroup)
    {
        $productGroup->update($request->all());
        return redirect()->route('products.groups');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(productGroup $productGroup)
    {
        $productGroup->delete();
        return redirect()->route('products.groups');
    }
}

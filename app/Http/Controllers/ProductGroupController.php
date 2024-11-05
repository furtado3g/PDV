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
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(productGroup $productGroup)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(productGroup $productGroup)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, productGroup $productGroup)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(productGroup $productGroup)
    {
        //
    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Clients as ClientsModel;
use Inertia\Inertia;

class ClientsController extends Controller
{

    public function index(): \Inertia\Response
    {
        return Inertia::render('Clients', [
            'clients' => ClientsModel::all(),
        ]);
    }

    static public function store(Request $request): \Illuminate\Foundation\Application|\Illuminate\Routing\Redirector|\Illuminate\Contracts\Foundation\Application|\Illuminate\Http\RedirectResponse
    {
        $request->validate([
            'name' => 'required',
            'cgc' => 'required',
            'address' => 'required',
            'phone' => 'required',
        ]);
        $client = new ClientsModel();
        $client->name = $request->name;
        $client->email = $request->email;
        $client->cgc = $request->cgc;
        $client->address = $request->address;
        $client->phone = $request->phone;
        $client->active = true;
        $client->save();
        return redirect('/clients');
    }

    public function update(Request $request)
    {

    }
}

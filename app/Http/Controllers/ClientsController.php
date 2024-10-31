<?php

namespace App\Http\Controllers;

use http\Client;
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

    static public function store(Request $request): \Illuminate\Http\RedirectResponse
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

    public function create(): \Inertia\Response
    {
        return Inertia::render('ClientForm', [
            'formUrl' => '/clients/create',
            'csrfToken' => csrf_token(),
        ]);
    }

    public function edit(int $id): \Inertia\Response
    {
        $client = ClientsModel::query()->findOrFail($id);
        return Inertia::render('ClientForm', [
            'client' => $client,
            'formUrl' => '/clients/' . $id . '/update',
            'csrfToken' => csrf_token(),
        ]);
    }

    public function update(Request $request, int $id): \Illuminate\Http\RedirectResponse
    {
        $request->validate([
            'name' => 'required',
            'cgc' => 'required',
            'address' => 'required',
            'phone' => 'required'
        ]);

        $client = ClientsModel::query()->findOrFail($id);
        $client->name = $request->name;
        $client->email = $request->email;
        $client->address = $request->address;
        $client->phone = $request->phone;
        $client->save();
        return redirect('/clients');
    }

    public function destroy(int $id): \Illuminate\Http\Response
    {
        $client = ClientsModel::query()->findOrFail($id);
        $nome = $client->nome;
        $client->delete();
        return response('{"message": "' . $nome . ' excluido com sucesso"}')->header('Content-Type', 'application/json');
    }
}

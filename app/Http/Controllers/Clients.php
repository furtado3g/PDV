<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Clients;
class ClientsContoller extends Controller
{

    public function index()
    {
        return view('clients');
    }

    public function store(Request $request){
        $request->validate([
            'name' => 'required',
            'cgc' => 'required',
            'address' => 'required',
            'phone' => 'required',
        ]);
        $client = new Clients();
        $client->name = $request->name;
        $client->email = $request->email;
        $client->cgc = $request->cgc;
        $client->address = $request->address;
        $client->phone = $request->phone;
        $client->active = true;
        $client->save();
        return redirect('/clients');
    }

    public function update(Request $request){

    }
}

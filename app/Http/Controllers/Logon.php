<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Logon extends Controller
{
    private string $login;
    private string $password;

    public function __construct(Request $request)
    {
        $this->login = $request->input('login');
        $this->password = $request->input('password');
    }

    public function index()
    {
        return view('logon');
    }

    public function logon(){
        
    }

}

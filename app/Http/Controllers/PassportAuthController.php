<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\Login;
use App\Http\Requests\Register;
use App\Models\User;

class PassportAuthController extends Controller
{
    public function register(Register $request)
    {
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password)
        ]);
 
        $token = $user->createToken('APIAccess')->accessToken;
 
        return response()->json(['token' => $token]);
    }

    public function login(Login $request)
    {
        $data = [
            'email' => $request->email,
            'password' => $request->password
        ];
 
        if (auth()->attempt($data)) {
            $token = auth()->user()->createToken('APIAccess')->accessToken;
            return response()->json([
                'token' => $token,
                'user' => auth()->user()
            ]);
        } else {
            return response()->json([
                'errors' => [
                    'email' => ['Tus credenciales son incorrectas. Por favor intenta de nuevo.']    
                ]
            ], 401);
        }
    }

    public function logout()
    {
        auth()->user()->tokens->each(function ($token, $key) {
            $token->delete();
        });
        
        return response()->json('Cerro Sesión exitosamente!');
    }

    public function getUser(Request $request)
    {
        return $request->user();
    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Favorite;

class FavoritesController extends Controller
{
    private $exist_error = ['message' => 'El show ya esta agregado a tus favoritos!'];

    public function saveFavorite(Request $request)
    {
        $id_show = $request->id_show;
        $id_user = auth()->user()->id;

        // Search if it exist already
        if (Favorite::where([
            'id_show' => $id_show,
            'id_user' => $id_user
        ])->exists()) {
            return response()->json($this->exist_error, 422);
        }

        $favorite = Favorite::create([
            'name'     => $request->name, 
            'status'   => $request->status, 
            'runtime'  => $request->runtime, 
            'language' => $request->language, 
            'image'    => $request->image,  
            'id_show'  => $id_show,
            'id_user'  => $id_user
        ]);

        return response()->json($favorite);
    }

    public function getFavorites()
    {
        $favorites = Favorite::where('id_user', auth()->user()->id)->get();
        return response()->json($favorites);
    }

    public function deleteFavorite($id)
    {
        $favorite = Favorite::findOrFail($id);
        $favorite->delete();
        return response()->json($favorite);
    }
}

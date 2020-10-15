<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;

class TestController extends Controller
{
    public function test(Request $request)
    {
        $client = new Client();
        $request = $client->get('http://api.tvmaze.com/search/shows', [
            'query' => ['q' => 'hero']
        ]);
        
        return response()->json(json_decode($request->getBody()));
    }
}

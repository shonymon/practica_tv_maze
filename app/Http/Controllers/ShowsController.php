<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;

class ShowsController extends Controller
{
    public function getShows(Request $request)
    {
        $client = new Client();
        $res = $client->request('GET', 'http://api.tvmaze.com/search/shows', [
            'query' => ['q' => $request->q]
        ]);
        return response()->json(json_decode($res->getBody()));
    }

    public function getShow(Request $request)
    {
        $client = new Client();
        $res = $client->request('GET', 'http://api.tvmaze.com/shows/'.$request->id_show);
        return response()->json(json_decode($res->getBody()));
    }
}

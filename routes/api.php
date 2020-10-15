<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Post Register
Route::post('register', 'PassportAuthController@register')->name('register');

// Post Login
Route::post('login', 'PassportAuthController@login')->name('login');

// Post Logout
Route::middleware('auth:api')->post('/logout', 'PassportAuthController@logout')->name('logout');

// Get User Data
Route::middleware('auth:api')->get('/user', 'PassportAuthController@getUser');

// Get Shows
Route::middleware('auth:api')->get('/shows', 'ShowsController@getShows');

// Get Show
Route::middleware('auth:api')->get('/show', 'ShowsController@getShow');

// Get Favorites
Route::middleware('auth:api')->get('/favorites', 'FavoritesController@getFavorites');

// Post Favorite
Route::middleware('auth:api')->post('/favorite', 'FavoritesController@saveFavorite');

// Delete Favorite
Route::middleware('auth:api')->delete('/favorite/{id}', 'FavoritesController@deleteFavorite');
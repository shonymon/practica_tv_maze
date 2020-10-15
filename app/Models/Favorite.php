<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Favorite extends Model
{
    use HasFactory;
    protected $table = 'favorites';
    protected $fillable = ['name', 'status', 'runtime', 'language', 'image', 'id_show', 'id_user'];

    public function user()
    {
        return $this->belongsTo('App\Models\User', 'id_user');
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Advantage extends Model
{
    use HasFactory;

    protected $fillable = [
        'title', 'description', 'image', 'active',
    ];

    public function getActiveAttribute($value) {
        return (bool)$value;
    }
}

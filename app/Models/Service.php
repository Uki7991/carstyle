<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use phpDocumentor\Reflection\Types\Boolean;

class Service extends Model
{
    use HasFactory;

    protected $fillable = [
        'title', 'description', 'image', 'active',
    ];

    public function getActiveAttribute($value) {
        return (bool)$value;
    }

    public function tables()
    {
        return $this->hasMany(ServiceTable::class, 'service_id', 'id');
    }
}

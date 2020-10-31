<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MaterialProperty extends Model
{
    use HasFactory;

    protected $fillable = [
        'title', 'value',
    ];

    public function material()
    {
        return $this->belongsTo(Material::class);
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Material extends Model
{
    use HasFactory;

    protected $fillable = [
        'title', 'image', 'active',
    ];

    public function properties()
    {
        return $this->hasMany(MaterialProperty::class);
    }

    public function category()
    {
        return $this->belongsTo(MaterialCategory::class, 'category_id', 'id');
    }

    public function getActiveAttribute($value)
    {
        return (boolean)$value;
    }
}

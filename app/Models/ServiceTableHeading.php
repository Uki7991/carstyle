<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ServiceTableHeading extends Model
{
    use HasFactory;

    protected $fillable = [
        'title', 'service_table_id',
    ];

    public function table()
    {
        return $this->belongsTo(ServiceTable::class, 'service_table_id', 'id');
    }

    public function values()
    {
        return $this->hasMany(ServiceTableBody::class, 'service_table_heading_id', 'id');
    }
}

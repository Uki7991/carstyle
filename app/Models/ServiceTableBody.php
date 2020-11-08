<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ServiceTableBody extends Model
{
    use HasFactory;

    protected $fillable = [
        'value', 'service_table_heading_id', 'description',
    ];

    public function heading()
    {
        return $this->belongsTo(ServiceTableHeading::class, 'service_table_heading_id', 'id');
    }
}

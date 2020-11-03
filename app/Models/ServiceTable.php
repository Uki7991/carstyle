<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ServiceTable extends Model
{
    use HasFactory;

    protected $fillable = [
        'title', 'service_id',
    ];

    public function service()
    {
        return $this->belongsTo(Service::class);
    }

    public function headings()
    {
        return $this->hasMany(ServiceTableHeading::class, 'service_table_id', 'id');
    }
}
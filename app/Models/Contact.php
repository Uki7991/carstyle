<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    use HasFactory;

    protected $fillable = [
        'title', 'description', 'keywords',
        'phone', 'email', 'address', 'instagram', 'whatsapp', 'yandex',
        'google_script', 'yandex_script', 'other_script',
        'mail_to',
    ];

    protected $appends = [
        'address_front',
    ];

    public function getAddressFrontAttribute()
    {
        return explode("\n", $this->address);
    }
}

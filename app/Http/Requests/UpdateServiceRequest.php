<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateServiceRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title' => 'required|string',
            'description' => 'required|string',
            'full_description' => 'nullable',
            'tables' => 'array|min:1',
            'tables.*.title' => 'required|string',
            'tables.*.headings' => 'array|min:1',
            'tables.*.headings.*.title' => 'required|string',
            'tables.*.headings.*.values' => 'array|min:1',
            'tables.*.headings.*.values.*.value' => 'required|string',
        ];
    }
}

<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class Login extends FormRequest
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
            'email'    => 'required|email|max:255',
            'password' => 'required'
        ];
    }

    public function messages()
    {
        return [
            'email.required' => 'El correo es requerido',
            'email.email' => 'El email no tiene el formato correcto',
            'email.max' => 'La cantidad de caracteres del email es incorrecta',
            'password.required' => 'La contraseña es requerida'
        ];
    }
}

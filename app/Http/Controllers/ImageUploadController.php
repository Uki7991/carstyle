<?php

namespace App\Http\Controllers;

use App\Services\ImageUploader;
use Illuminate\Http\Request;

class ImageUploadController extends Controller
{
    public function postImage(Request $request)
    {
        $filename = ImageUploader::upload($request->files->get('test'), $request->dir, $request->prefix);

        return \response()->json([
            'filename' => $filename,
        ]);
    }
}

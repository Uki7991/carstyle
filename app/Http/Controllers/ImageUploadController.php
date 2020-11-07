<?php

namespace App\Http\Controllers;

use App\Services\FileUploader;
use App\Services\ImageUploader;
use Illuminate\Http\Request;

class ImageUploadController extends Controller
{
    public function postImage(Request $request)
    {
        if ($request->files->get('test')->getClientOriginalExtension() === 'svg') {
            $filename = FileUploader::upload($request->files->get('test'), 'svg', 'advantage');
        } else {
            $filename = ImageUploader::upload($request->files->get('test'), $request->dir, $request->prefix);
        }

        return \response()->json([
            'filename' => $filename,
        ]);
    }
}

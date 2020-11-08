<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>{{ $contact->title ?? config('app.name', 'Laravel') }}</title>
        <meta name="description" content="{{ $contact->description ?? '' }}">
        <meta name="keywords" content="{{ $contact->keywords ?? '' }}">
        <meta property="og:title" content="{{ $contact->title ?? '' }}">
        <meta property="og:description" content="{{ $contact->description ?? '' }}">
        <meta property="og:url" content="{{ \Illuminate\Support\Facades\URL::current() }}">
        <meta property="og:type" content="site">

        <!-- Styles -->
        <link rel="stylesheet" href="{{ mix('css/app.css') }}">

        <!-- Scripts -->
        @routes
{{--        <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.26.0/moment.min.js"></script>--}}
    </head>
    <body class="font-sans antialiased">

    @inertia

    <script src="{{ mix('js/app.js') }}" defer></script>

    {!! $contact->google_script !!}
    {!! $contact->yandex_script !!}
    {!! $contact->other_script !!}
    </body>
</html>

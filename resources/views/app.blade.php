<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
<head>
    <meta charset="utf-8">
    <title>{{ env('APP_NAME') }}</title>
    <meta id="token" name="csrf-token" content="{{ csrf_token() }}">
    <meta content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' name='viewport'>
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="public_url" content="{{ url('/') }}/" />
    <meta name="app_url" content="{{ env('APP_VUE_URL') }}" />
    <meta name="app_name" content="{{ env('APP_NAME') }}" />

    <!-- Favicon -->
    <link rel="shortcut icon" type="image/x-icon" href="{{ url('/') }}/favicon/favicon.ico">
    
    <!-- Google Font: Source Sans Pro -->
    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">

</head>
<body>

    {{-- Vue App --}}
    <section id="app" v-cloak>
        <baseapp></baseapp>
    </section>

    {{-- Footer JS Scripts --}}
    <script src="{{ asset('js/manifest.js') }}" defer></script>
    <script src="{{ asset('js/vendor.js') }}" defer></script>
    <script src="{{ asset('js/app.js') }}" defer></script>

</body>
</html>

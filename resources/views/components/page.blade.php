<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{ $title }}</title>
    @vite('resources/css/app.css')
</head>
<body class="antialiased">
    <div class=" dark:bg-slate-800 bg-slate-50 dark:text-slate-50 text-slate-800 w-screen h-screen">
        {{ $slot }}
    </div>
</body>
</html>

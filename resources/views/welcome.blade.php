<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Laravel + React server side rendering example</title>
        <link rel="stylesheet" href="{{ mix('css/app.css') }}">
        <script defer src="{{ mix('js/react/entry-client.js') }}"></script>
    </head>
    <body class="bg-paper font-sans leading-normal text-grey-darkest border-t-4 border-orange-light">
        {!! ssr('js/react/entry-server.js')
            ->fallback('<div id="app"></div>')
            ->render() !!}

       <script src="https://gist.github.com/lalitmee/a562d812e50672761217ace0242ea98b.js"></script>
    </body>
</html>

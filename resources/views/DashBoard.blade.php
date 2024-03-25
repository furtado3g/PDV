<x-page :title="'Home'">
    <x-navbar/>
    <x-side-bar/>
    <x-content>
        @yield('content')
        Localhost
    </x-content>
</x-page>

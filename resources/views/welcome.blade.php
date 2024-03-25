<x-page :title="'Login'">
    <div class="flex items-center justify-center w-full h-full">
        <div class="md:w-[600px] w-full h-screen md:h-auto rounded-lg bg-slate-200 dark:bg-slate-900 text-green-900 dark:text-green-500 p-10">
            <div class="w-full">
                <img src="{{ asset('storage/logo.png') }}" alt="logo" class="mx-auto rounded-full w-2/3">
            </div>
            <form action="" method="post" class="w-full">
                <div class="w-full  mt-2">
                    <label for="email" class="mb-2">E-mail</label>
                    <input type="email" name="email" id="" placeholder="Email" class="w-full p-2 rounded-md">
                </div>
                <div class="w-full  mt-2">
                    <label for="password" class="mb-2">Senha</label>
                    <input type="password" name="password" id="" placeholder="password" class="w-full p-2 rounded-md">
                </div>
                <div class="w-full mt-5">
                    <button type="submit" class="w-full p-2 rounded-md bg-green-500 text-slate-100">Entrar</button>
                </div>
            </form>
        </div>
    </div>
</x-page>

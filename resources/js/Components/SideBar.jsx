export default function SideBar() {
    function getPath() {
        return window.location.pathname;
    }

    return (
        <div className="w-0 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6  dark:bg-slate-700 bg-slate-200 dark:text-green-500 text-green-600 left-0 top-20 h-full fixed">
            <a href="/dashboard">
                <div
                    className={`w-full m-1 px-4 py-3 font-bold ${
                        window.location.pathname === "/dashboard"
                            ? "bg-slate-800 rounded-l-full"
                            : "hover:bg-slate-800 hover:rounded-l-full"
                    }`}
                >
                    Home
                </div>
            </a>
            <a href="/clients">
                <div
                    className={`w-full m-1 px-4 py-3 font-bold ${
                        window.location.pathname === "/clients"
                            ? "bg-slate-800 rounded-l-full"
                            : "hover:bg-slate-800 hover:rounded-l-full"
                    }`}
                >
                    Clientes
                </div>
            </a>
            <div
                className={`w-full m-1 px-4 py-3 font-bold ${
                    window.location.pathname === "/products"
                        ? "bg-slate-800 rounded-l-full"
                        : "hover:bg-slate-800 hover:rounded-l-full"
                }`}
            >
                <a href={route("products.index")}>Produtos</a>
            </div>
            <div
                className={`w-full m-1 px-4 py-3 font-bold ${
                    window.location.pathname === "/sales"
                        ? "bg-slate-800 rounded-l-full"
                        : "hover:bg-slate-800 hover:rounded-l-full"
                }`}
            >
                Vendas
            </div>
            <div
                className={`w-full m-1 px-4 py-3 font-bold ${
                    window.location.pathname === "/reports"
                        ? "bg-slate-800 rounded-l-full"
                        : "hover:bg-slate-800 hover:rounded-l-full"
                }`}
            >
                Relatórios
            </div>
            <div
                className={`w-full m-1 px-4 py-3 font-bold ${
                    window.location.pathname === "/settings"
                        ? "bg-slate-800 rounded-l-full"
                        : "hover:bg-slate-800 hover:rounded-l-full"
                }`}
            >
                Configurações
            </div>
        </div>
    );
}

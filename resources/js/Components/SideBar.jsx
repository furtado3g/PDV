export default function SideBar() {
    return (
        <div className="w-0 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6  dark:bg-slate-700 bg-slate-200 dark:text-green-500 text-green-600 left-0 top-20 h-full fixed">
            <div className="w-full m-1 px-4 py-3 font-bold hover:bg-slate-700 bg-slate-800 rounded-l-full ">
                Home
            </div>
            <div className="w-full m-1 px-4 py-3 font-bold hover:bg-slate-800 hover:rounded-l-full">
                Clientes
            </div>
            <div className="w-full m-1 px-4 py-3 font-bold hover:bg-slate-800 hover:rounded-l-full">
                Produtos 
            </div>
            <div className="w-full m-1 px-4 py-3 font-bold hover:bg-slate-800 hover:rounded-l-full">
                Vendas
            </div>
            <div className="w-full m-1 px-4 py-3 font-bold hover:bg-slate-800 hover:rounded-l-full">
                Relatórios
            </div>
            <div className="w-full m-1 px-4 py-3 font-bold hover:bg-slate-800 hover:rounded-l-full">
                Configurações
            </div>
            <div className="w-full m-1 px-4 py-3 font-bold hover:bg-slate-800 hover:rounded-l-full mt-auto">
                Sair
            </div>
        </div>
    );
}

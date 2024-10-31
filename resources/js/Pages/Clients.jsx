import PrimaryButton from "@/Components/PrimaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {Head} from "@inertiajs/react";
import {useState} from "react";
import DangerButton from "@/Components/DangerButton.jsx";

export default function Clients({auth, clients,...props}) {
    const [filteredClients, setFilteredClients] = useState(clients);
    const [page, setPage] = useState(0);
    const perPageList = [5, 10, 15, 20, 25];
    const [perPage, setPerPage] = useState(perPageList[0]);
    const [search, setSearch] = useState("");
    const { csrfToken } = props;
    const handleTableSearch = (event) => {
        setPage(0);
        setFilteredClients(
            clients
                .filter((client) =>
                    client.name.toLowerCase().includes(search.toLowerCase())
                )
                .slice(0, perPage)
        );
    };

    const handleTablePerPage = (event) => {
        handleTableSearch(event);
    };

    const handleTablePage = (event) => {
        if (event === "prev") {
            if (page > 0) {
                setPage(page - 1);
                setFilteredClients(
                    clients
                        .filter((client) =>
                            client.name
                                .toLowerCase()
                                .includes(search.toLowerCase())
                        )
                        .slice(page * perPage - perPage, page * perPage)
                );
            }
        } else if (event === "next") {
            if (page < Math.ceil(clients.length / perPage) - 1) {
                setPage(page + 1);
                setFilteredClients(
                    clients
                        .filter((client) =>
                            client.name
                                .toLowerCase()
                                .includes(search.toLowerCase())
                        )
                        .slice(page * perPage, page * perPage + perPage)
                );
            }
        }
    };

    const handleWithDeleteButtonCLicked = async (id) =>{
        const data = {
            url: `/clients/${id}`,
            options: {
                method: 'DELETE',
                headers: {
                    'X-CSRF-TOKEN': csrfToken
                }
            }
        }

        const req = await (await fetch(data.url,data.options)).json()

        location.reload()
    }

    return (
        <AuthenticatedLayout user={auth.user} header={<></>}>
            <Head title="Clients"/>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div
                        className="dark:bg-slate-700 bg-slate-200 dark:text-green-500 text-green-600 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="w-full grid grid-cols-3">
                            <div className="p-6 text-2xl font-extrabold col-span-2">
                                Clientes
                            </div>
                            <div className="w-full p-6 col-span-1 flex justify-end">
                                <PrimaryButton
                                    onClick={(e) =>
                                        (location.href =
                                            route("clients.create"))
                                    }
                                >
                                    Cadastrar
                                </PrimaryButton>
                            </div>
                        </div>
                        <div className="w-11/12 mx-auto">
                            <div className="w-full flex">
                                <div className="w-full md:w-1/4 p-2">
                                    <select
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                                        name="perPage"
                                        value={perPage}
                                        onChange={handleTablePerPage}
                                    >
                                        {perPageList.map((item, index) => (
                                            <option key={index} value={item}>
                                                {item}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="w-full md:w-1/4 p-2 ml-auto">
                                    <input
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                                        type="text"
                                        name="search"
                                        value={search}
                                        onChange={handleTableSearch}
                                        placeholder="Pesquisar"
                                    />
                                </div>
                            </div>
                            <table
                                className="w-full  dark:bg-slate-700 bg-slate-300 rounded-2xl text-lg font-bold mx-auto  mb-6">
                                <thead>
                                <tr>
                                    <th className="p-2 text-center">#</th>
                                    <th className="p-2 text-left">Nome</th>
                                    <th className="p-2 text-left">Email</th>
                                    <th className="p-2 text-center">
                                        Ações
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                {filteredClients.map((client, index) => (
                                    <tr key={index}>
                                        <td className="p-2 text-center">
                                            {client.id}
                                        </td>
                                        <td className="p-2 text-left">
                                            {client.name}
                                        </td>
                                        <td className="p-2 text-left">
                                            {client.email}
                                        </td>
                                        <td className="p-2 text-center">
                                            <PrimaryButton
                                                onClick={() =>
                                                    location.href = `/clients/${client.id}/edit`
                                                }
                                            >
                                                Editar
                                            </PrimaryButton>
                                            <DangerButton
                                                onClick={async ()=> await handleWithDeleteButtonCLicked(client.id)}
                                            >
                                                Excluir
                                            </DangerButton>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                            <div className="w-full flex justify-end pb-4">
                                <div className="inline-flex justify-center gap-1 ">
                                    <a
                                        onClick={() => handleTablePage("prev")}
                                        className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180 dark:border-gray-800 dark:bg-gray-900 dark:text-white"
                                    >
                                        <span className="sr-only">Anterior</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-3" viewBox="0 0 20 20" fill="currentColor">
                                            <path
                                                fillRule="evenodd"
                                                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </a>

                                    <div>
                                        <label htmlFor="PaginationPage" className="sr-only">Page</label>

                                        <input
                                            type="number"
                                            className="h-8 w-12 rounded border border-gray-100 bg-white p-0 text-center text-xs font-medium text-gray-900 [-moz-appearance:_textfield] dark:border-gray-800 dark:bg-gray-900 dark:text-white [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                                            min="1"
                                            value={page + 1}
                                            id="PaginationPage"
                                        />
                                    </div>

                                    <a
                                        onClick={() => handleTablePage("next")}
                                        className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180 dark:border-gray-800 dark:bg-gray-900 dark:text-white"
                                    >
                                        <span className="sr-only">Proxima</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-3" viewBox="0 0 20 20" fill="currentColor">
                                            <path
                                                fillRule="evenodd"
                                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

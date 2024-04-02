import PrimaryButton from "@/Components/PrimaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useState } from "react";
export default function Clients({ auth, clients }) {
    const [filteredClients, setFilteredClients] = useState(clients);
    const [page, setPage] = useState(0);
    const perPageList = [5, 10, 15, 20, 25];
    const [perPage, setPerPage] = useState(perPageList[0]);
    const [search, setSearch] = useState("");

    const handleTableSearch = (event) => {
        setSearch(event.target.value);
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

    return (
        <AuthenticatedLayout user={auth.user} header={<></>}>
            <Head title="Clients" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="dark:bg-slate-700 bg-slate-200 dark:text-green-500 text-green-600 overflow-hidden shadow-sm sm:rounded-lg">
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
                            <table className="w-full  dark:bg-slate-700 bg-slate-300 rounded-2xl text-lg font-bold mx-auto  mb-6">
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
                                                        alert("Edit")
                                                    }
                                                >
                                                    Editar
                                                </PrimaryButton>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="w-full flex">
                                <div className="w-1/3 md:w-1/6 p-2 ml-auto text-center flex items-center justify-center">
                                    <button
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                                        onClick={() => handleTablePage("prev")}
                                    >
                                        Anterior
                                    </button>
                                </div>
                                <div className="w-1/3 md:w-1/6 p-2 text-center flex items-center justify-center">
                                    <span className="text-xl w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 cursor-not-allowed">
                                        {page + 1} de{" "}
                                        {Math.ceil(clients.length / perPage) ===
                                        0
                                            ? 1
                                            : Math.ceil(
                                                  clients.length / perPage
                                              )}
                                    </span>
                                </div>
                                <div className="w-1/3 md:w-1/6 p-2 text-center flex items-center justify-center">
                                    <button
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                                        onClick={() => handleTablePage("next")}
                                    >
                                        Proximo
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

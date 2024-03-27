import PrimaryButton from "@/Components/PrimaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
export default function Clients({ auth }) {

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Clients" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="dark:bg-slate-700 bg-slate-200 dark:text-green-500 text-green-600 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-2xl font-extrabold">
                            Clients
                        </div>
                        <table className="w-11/12 bg-slate-600 rounded-2xl text-lg font-bold mx-auto  mb-6">
                            <thead>
                                <tr>
                                    <th className="p-2 text-center">#</th>
                                    <th className="p-2 text-left">Nome</th>
                                    <th className="p-2 text-left">Email</th>
                                    <th className="p-2 text-center">Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="p-2 text-center">1</td>
                                    <td className="p-2 text-left">Carlos</td>
                                    <td className="p-2 text-left">3nW8A@example.com</td>
                                    <td className="p-2 text-center">
                                        <PrimaryButton>Editar</PrimaryButton>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

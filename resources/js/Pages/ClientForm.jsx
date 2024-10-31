import PrimaryButton from "@/Components/PrimaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
export default function ClientForm({ auth, client = {}, formUrl = null, ...props }) {
    const { csrfToken } = props;
    return (
        <AuthenticatedLayout user={auth.user} header={<></>}>
            <Head title="Formulário Clientes" />
            <div className="py-12">
                <form action={formUrl} method="post">
                    <input type="hidden" name="_token" value={csrfToken} />
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="dark:bg-slate-700 bg-slate-200 dark:text-green-500 text-green-600 overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 text-2xl font-extrabold">
                                Gerenciar Cliente
                            </div>
                            <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                                <div className="w-full mx-auto pb-2">
                                    <label htmlFor="name">Nome</label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                                        defaultValue={client.name}
                                    />
                                </div>
                                <div className="w-full mx-auto pb-2">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                                        defaultValue={client.email}
                                    />
                                </div>
                                <div className="w-full mx-auto pb-2">
                                    <label htmlFor="phone">Telefone</label>
                                    <input
                                        type="text"
                                        name="phone"
                                        id="phone"
                                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                                        defaultValue={client.phone}
                                    />
                                </div>
                                <div className="w-full mx-auto pb-2">
                                    <label htmlFor="cgc">CPF</label>
                                    <input
                                        type="text"
                                        name="cgc"
                                        id="cgc"
                                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                                        defaultValue={client.cgc}
                                    />
                                </div>
                                <div className="w-full mx-auto pb-2 md:col-span-2">
                                    <label htmlFor="cgc">Endereço</label>
                                    <input
                                        type="text"
                                        name="address"
                                        id="address"
                                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                                        defaultValue={client.address}
                                    />
                                </div>
                            </div>
                            <div className="w-full px-6 pb-6 text-right">
                                <PrimaryButton type="submit">
                                    Cadastrar
                                </PrimaryButton>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}

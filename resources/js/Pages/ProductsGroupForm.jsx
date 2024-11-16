
import { useForm } from '@inertiajs/react';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function ProductsGroupForm({ auth, productGroup }) {
    const { data, setData, post, processing, errors } = useForm({
        name: productGroup.name ?? '',
        description: productGroup.description ?? '',
        active: productGroup.active ?? true
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (productGroup.id) {
            post(route('products.groups.update', productGroup.id));
        } else {
            post(route('products.groups.store'));
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-slate-800 leading-tight">
                    Grupos de Produtos
                </h2>
            }
        >
            <Head title="Grupos de Produtos" />

            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-4">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Nome do Grupo
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={data.name}
                        onChange={e => setData('name', e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                    {errors.name && <div className="text-red-500 text-sm mt-1">{errors.name}</div>}
                </div>

                <div className="mb-4">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                        Descrição
                    </label>
                    <textarea
                        id="description"
                        value={data.description}
                        onChange={e => setData('description', e.target.value)}
                        rows="3"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                    {errors.description && <div className="text-red-500 text-sm mt-1">{errors.description}</div>}
                </div>

                <div className="mb-4">
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            checked={data.active}
                            onChange={e => setData('active', e.target.checked)}
                            className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        />
                        <span className="ml-2 text-sm text-gray-600">Ativo</span>
                    </label>
                    {errors.active && <div className="text-red-500 text-sm mt-1">{errors.active}</div>}
                </div>

                <div className="flex justify-end">
                    <button
                        type="submit"
                        disabled={processing}
                        className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50"
                    >
                        {processing ? 'Salvando...' : 'Salvar'}
                    </button>
                </div>
            </form>
        </AuthenticatedLayout>  
    );
}

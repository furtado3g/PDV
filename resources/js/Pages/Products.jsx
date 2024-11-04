import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';
import DangerButton from '@/Components/DangerButton';
import { router } from '@inertiajs/react';

export default function Products({ auth, products }) {
    const [search, setSearch] = useState('');

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase())
    );

    const handleDelete = (id) => {
        if (confirm('Tem certeza que deseja excluir este produto?')) {
            // router.delete(route('products.destroy', id));
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-slate-800 leading-tight">Produtos</h2>}
        >
            <Head title="Produtos" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-slate-900 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-slate-900">
                            <div className="flex justify-between items-center mb-6">
                                <div className="flex items-center">
                                    <input
                                        type="text"
                                        placeholder="Pesquisar produtos..."
                                        className="text-green-400 placeholder:text-green-400 border-green-400 bg-slate-800 focus:border-green-500 focus:ring-green-500 rounded-md shadow-sm"
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                    />
                                </div>
                                <Link
                                    href={route('products.create')}
                                    className="px-4 py-2 bg-slate-800 text-green-400 rounded-md hover:bg-slate-700"
                                >
                                    Adicionar Produto
                                </Link>
                            </div>

                            <table className="min-w-full divide-y divide-slate-200">
                                <thead className="bg-slate-800">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-green-400 uppercase tracking-wider">
                                            Nome
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-green-400 uppercase tracking-wider">
                                            Descrição
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-green-400 uppercase tracking-wider">
                                            Preço
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-green-400 uppercase tracking-wider">
                                            Ações
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-slate-600 divide-y divide-slate-200">
                                    {filteredProducts.map((product) => (
                                        <tr key={product.id}>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {product.name}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {product.description}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                R${product.price}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                <Link
                                                    // href={route('products.edit', product.id)}
                                                    className="text-indigo-600 hover:text-indigo-900 mr-4"
                                                >
                                                    Editar
                                                </Link>
                                                <DangerButton
                                                // onClick={() => handleDelete(product.id)}
                                                >
                                                    Excluir
                                                </DangerButton>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

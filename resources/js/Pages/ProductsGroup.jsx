
import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Table } from 'flowbite-react';

export default function ProductsGroup({ auth, productGroups }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-slate-800 leading-tight">Grupos de Produtos</h2>}
        >
            <Head title="Grupos de Produtos" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-slate-900">
                            <Table hoverable>
                                <Table.Head className="bg-slate-100">
                                    <Table.HeadCell>Nome do Grupo</Table.HeadCell>
                                    <Table.HeadCell>Descrição</Table.HeadCell>
                                    <Table.HeadCell>Status</Table.HeadCell>
                                    <Table.HeadCell>Ações</Table.HeadCell>
                                </Table.Head>
                                <Table.Body className="divide-y">
                                    {productGroups?.map((group) => (
                                        <Table.Row key={group.id} className="bg-white hover:bg-slate-50">
                                            <Table.Cell className="font-medium text-slate-900">
                                                {group.name}
                                            </Table.Cell>
                                            <Table.Cell>{group.description}</Table.Cell>
                                            <Table.Cell>
                                                <span className={`px-2 py-1 rounded-full text-xs ${
                                                    group.active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                                }`}>
                                                    {group.active ? 'Ativo' : 'Inativo'}
                                                </span>
                                            </Table.Cell>
                                            <Table.Cell>
                                                <div className="flex gap-2">
                                                    <button className="text-blue-600 hover:text-blue-900">
                                                        Editar
                                                    </button>
                                                    <button className="text-red-600 hover:text-red-900">
                                                        Excluir
                                                    </button>
                                                </div>
                                            </Table.Cell>
                                        </Table.Row>
                                    ))}
                                </Table.Body>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

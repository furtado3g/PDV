import { useForm } from '@inertiajs/react'
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function ProductsForm({
    auth,
    productGroups,
    product,
}) {
    const { data, setData, post, processing, errors } = useForm(
        product ?? {
            name: '',
            description: '',
            price: '',
            stock: '',
            product_group_id: '',
            user_id: auth.user.id,
        })

    const handleSubmit = (e) => {
        e.preventDefault()
        post(route('products.store'))
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-slate-800 leading-tight">
                    Produtos
                </h2>
            }
        >
            <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
                 
                <input type="hidden" name="user_id" value={auth.user.id} />

                <div className="mb-4">
                    <label htmlFor="barcode" className="block text-gray-700 font-bold mb-2">
                        Cod. Barras
                    </label>
                    <input
                        type="number"
                        id="barcode"
                        value={data.barcode}
                        onChange={e => setData('barcode', e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg"
                    />
                    {errors.barcode && <div className="text-red-500">{errors.barcode}</div>}
                </div>

                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                        Nome do Produto
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={data.name}
                        onChange={e => setData('name', e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg"
                    />
                    {errors.name && <div className="text-red-500">{errors.name}</div>}
                </div>

                <div className="mb-4">
                    <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
                        Descrição
                    </label>
                    <textarea
                        id="description"
                        value={data.description}
                        onChange={e => setData('description', e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg"
                    />
                    {errors.description && <div className="text-red-500">{errors.description}</div>}
                </div>

                <div className="mb-4">
                    <label htmlFor="price" className="block text-gray-700 font-bold mb-2">
                        Preço
                    </label>
                    <input
                        type="number"
                        step="0.01"
                        id="price"
                        value={data.price}
                        onChange={e => setData('price', e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg"
                    />
                    {errors.price && <div className="text-red-500">{errors.price}</div>}
                </div>

                <div className="mb-4">
                    <label htmlFor="stock" className="block text-gray-700 font-bold mb-2">
                        Estoque
                    </label>
                    <input
                        type="number"
                        id="stock"
                        value={data.stock}
                        onChange={e => setData('stock', e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg"
                    />
                    {errors.stock && <div className="text-red-500">{errors.stock}</div>}
                </div>

                <div className="mb-4">
                    <label htmlFor="product_group_id" className="block text-gray-700 font-bold mb-2">
                        Grupo de Produto
                        <select
                            id="product_group_id"
                            value={data.product_group_id}
                            onChange={e => setData('product_group_id', e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg"
                        >
                            <option value="">Selecione um grupo de produto</option>
                            {productGroups.
                                map(group => (
                                    <option key={group.id} value={group.id}>
                                        {group.name}
                                    </option>
                                ))}
                        </select>
                    </label>
                    {errors.product_group_id && <div className="text-red-500">{errors.product_group_id}</div>}
                </div>

                <button
                    type="submit"
                    disabled={processing}
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                >
                    Salvar Produto
                </button>
            </form>
        </AuthenticatedLayout>
    )
}

import { useForm } from '@inertiajs/react'
import { useState } from 'react'

export default function ProductsForm() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        description: '',
        price: '',
        stock: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        post(route('products.store'))
    }

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
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

            <button
                type="submit"
                disabled={processing}
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
            >
                Salvar Produto
            </button>
        </form>
    )
}

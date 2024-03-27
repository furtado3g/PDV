import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
export default function Clients({ auth }) {
    console.log(auth);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Clients" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="dark:bg-slate-700 bg-slate-200 dark:text-green-500 text-green-600 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6">Clients</div>
                        
                    </div>

                </div>
            </div>
        </AuthenticatedLayout>
    );
}

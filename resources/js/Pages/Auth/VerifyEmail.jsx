import PrimaryButton from '@/Components/PrimaryButton';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function VerifyEmail({ status }) {
    const { post, processing } = useForm({});

    const submit = (e) => {
        e.preventDefault();

        post(route('verification.send'));
    };

    return (
        <GuestLayout>
            <Head title="Email Verification" />

            <div className="mb-4 text-sm  dark:text-green-500 text-green-600 dark:hover:text-green-400 hover:text-green-800 ">
                Obrigado por inscrever-se! Antes de começar, você poderia
                verificar seu endereço de e-mail clicando no botão link que
                acabamos de enviar por e-mail para você? Se você não recebeu o
                e-mail, teremos prazer em lhe enviar outro.
            </div>

            {status === "verification-link-sent" && (
                <div className="mb-4 font-medium text-sm  dark:text-green-500 text-green-600 dark:hover:text-green-400 hover:text-green-800 ">
                    Um novo link de verificação foi enviado para o endereço de
                    e-mail que você forneceu durante o registro.
                </div>
            )}

            <form onSubmit={submit}>
                <div className="mt-4 flex items-center justify-between">
                    <PrimaryButton disabled={processing}>
                        Resend Verification Email
                    </PrimaryButton>

                    <Link
                        href={route("logout")}
                        method="post"
                        as="button"
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Sair
                    </Link>
                </div>
            </form>
        </GuestLayout>
    );
}

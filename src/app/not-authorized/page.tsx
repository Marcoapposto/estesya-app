import Link from 'next/link';

export default function NotAuthorizedPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white text-gray-800 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-5xl font-extrabold text-red-600 mb-4">Accesso Negato</h1>
        <p className="text-lg mb-6">
          Non hai i permessi necessari per visualizzare questa pagina. Se pensi che ci sia un errore, contatta l’amministratore.
        </p>
        <Link
          href="/"
          className="inline-block rounded bg-blue-600 px-6 py-2 text-white font-semibold hover:bg-blue-700 transition"
        >
          Torna alla Home
        </Link>
      </div>
    </main>
  );
}
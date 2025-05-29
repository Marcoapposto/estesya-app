import { requireAuth } from '@/lib/auth';

export default async function DocentiPage() {
  const { supabase, user, role, full_name } = await requireAuth(['docente']);

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-600">Pagina Docenti</h1>
        <p className="mt-4 text-lg text-gray-700">Qui gestirai l’elenco e le informazioni dei docenti.</p>
        <p className="mt-2 text-gray-600">Benvenuto, {full_name || user.email}</p>
      </div>
    </main>
  );
}
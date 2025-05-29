import { requireAuth } from '@/lib/auth';

export default async function RegistroPage() {
  const { supabase, user, role, full_name } = await requireAuth(['docente', 'segreteria']);

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-indigo-600">Registro</h1>
        <p className="mt-2 text-gray-600">Benvenuto, {full_name || user.email}</p>
      </div>
    </main>
  );
}
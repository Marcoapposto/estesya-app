import { requireAuth } from '@/lib/auth';

export default async function SegreteriaPage() {
  const { supabase, user, role, full_name } = await requireAuth(['segreteria']);

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-600">Area Segreteria</h1>
        <p className="mt-2 text-gray-600">Benvenuto, {full_name || user.email}</p>
      </div>
    </main>
  );
}
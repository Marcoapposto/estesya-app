import { requireAuth } from '@/lib/auth';

export default async function CalendarioPage() {
  const { supabase, user, role } = await requireAuth();

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-600">Calendario</h1>
        <p className="mt-4 text-lg text-gray-700">
          Qui potrai visualizzare e gestire gli eventi accademici.
        </p>
      </div>
    </main>
  );
}
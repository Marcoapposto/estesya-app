

import { requireAuth } from '@/lib/auth';

export default async function ComunicazioniPage() {
  const { supabase, user, role } = await requireAuth();

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-cyan-600">Comunicazioni</h1>
    </main>
  );
}
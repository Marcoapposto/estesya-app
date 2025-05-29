import { requireAuth } from '@/lib/auth';

export default async function AdminPage() {
  const { supabase, user, role } = await requireAuth(['admin']);

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-red-600">Area Admin</h1>
    </main>
  );
}

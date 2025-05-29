import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard | Estesya',
  description: 'Area riservata dell\'utente',
};

export default function DashboardPage() {
  console.log("✅ DashboardPage loaded");
  return (
    <main className="min-h-screen px-6 py-10 bg-white text-gray-900">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        <p className="text-lg">Benvenuto nella tua area riservata. Tutto è pronto per iniziare!</p>
      </section>
    </main>
  );
}
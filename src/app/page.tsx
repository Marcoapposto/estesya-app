'use client';

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-center p-6">
      <h1 className="text-4xl font-bold mb-4">Benvenuto su Estesya App ✨</h1>
      <p className="text-gray-600 mb-8">La tua piattaforma di formazione professionale</p>
      <div className="flex space-x-4">
        <button
          onClick={() => router.push('/auth/login')}
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Accedi
        </button>
        <button
          onClick={() => router.push('/auth/register')}
          className="px-6 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition"
        >
          Registrati
        </button>
      </div>
    </main>
  );
}
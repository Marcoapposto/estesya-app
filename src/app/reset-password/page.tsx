

'use client';

import { useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';

export default function ResetPasswordPage() {
  const supabase = createClientComponentClient();
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setMessage('');

    if (password !== confirmPassword) {
      setError('Le password non coincidono.');
      return;
    }

    const { error } = await supabase.auth.updateUser({
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      setMessage('Password aggiornata con successo! Ora puoi accedere.');
      setTimeout(() => {
        router.push('/login');
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form onSubmit={handleReset} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-lg font-bold mb-4">Reimposta Password</h2>
        {message && <p className="text-green-600 text-sm mb-2">{message}</p>}
        {error && <p className="text-red-600 text-sm mb-2">{error}</p>}
        <input
          type="password"
          placeholder="Nuova password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-3 border rounded"
          required
        />
        <input
          type="password"
          placeholder="Conferma nuova password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full p-2 mb-3 border rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Aggiorna Password
        </button>
      </form>
    </div>
  );
}
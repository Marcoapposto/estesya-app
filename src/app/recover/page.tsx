'use client';

import { useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function RecoverPage() {
  const supabase = createClientComponentClient();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleRecover = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    setError('');

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });

    if (error) {
      setError(error.message);
    } else {
      setMessage('Email inviata! Controlla la tua casella di posta.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form onSubmit={handleRecover} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-lg font-bold mb-4">Recupero Password</h2>
        {message && <p className="text-green-600 text-sm mb-2">{message}</p>}
        {error && <p className="text-red-600 text-sm mb-2">{error}</p>}
        <input
          type="email"
          placeholder="Inserisci la tua email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-3 border rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Invia Email di Recupero
        </button>
      </form>
    </div>
  );
}
'use client';

import type { FC } from 'react';
import React, { useState, useEffect } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';

const LoginPage: FC = () => {
  const supabase = createClientComponentClient();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session && typeof window !== 'undefined') {
        router.push('/(protected)/dashboard');
      }
    };
    checkSession();
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoggingIn(true);

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    setIsLoggingIn(false);

    if (error) {
      setError(error.message);
    } else {
      setSuccess('Login effettuato!');
      router.push('/(protected)/dashboard');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-lg font-bold mb-4">Login</h2>
        {error && <div className="text-red-600 text-sm mb-2">{error}</div>}
        {success && <div className="text-green-600 text-sm mb-2">{success}</div>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-3 border rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-3 border rounded"
          required
        />
        <button
          type="submit"
          disabled={isLoggingIn}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoggingIn ? 'Accesso in corso...' : 'Accedi'}
        </button>
        <div className="mt-4 text-sm text-center space-y-2">
          <a href="/recover" className="text-blue-600 hover:underline block">Password dimenticata?</a>
          <a href="/register" className="text-blue-600 hover:underline block">Crea un nuovo account</a>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
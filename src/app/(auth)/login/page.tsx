'use client';
import { FC, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';

const LoginPage: FC = () => {
  const router = useRouter();

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google', // o github, facebook, ecc.
    });

    if (error) {
      console.error('Login error:', error.message);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2 rounded">
        Login con Google
      </button>
    </div>
  );
};

export default LoginPage;
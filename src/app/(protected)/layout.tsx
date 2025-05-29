import '@styles/globals.css';
import { ReactNode } from 'react';
import { requireAuth } from '@/lib/auth';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Area Riservata | Estesya App',
  description: 'Sezione protetta dell’Accademia Estesya',
};

export default async function ProtectedLayout({ children }: { children: ReactNode }) {
  const { user } = await requireAuth();

  return (
    <html lang="it">
      <body className="bg-gray-50 text-gray-800">
        {children}
      </body>
    </html>
  );
}

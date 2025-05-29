import '@styles/globals.css';
import { ReactNode } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Estesya App',
  description: "Gestionale per l'Accademia Estesya",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="it">
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
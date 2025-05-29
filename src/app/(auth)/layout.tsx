// React non è più necessario da importare esplicitamente in Next.js con JSX moderno
import '@styles/globals.css'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-800">
      <div className="w-full max-w-md p-6 bg-white rounded shadow">
        {children}
      </div>
    </div>
  );
}
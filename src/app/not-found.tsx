// /src/app/not-found.tsx
export default function NotFound() {
  return (
    <div className="flex h-screen items-center justify-center text-center">
      <div>
        <h1 className="text-3xl font-bold mb-4">Pagina non trovata</h1>
        <p className="text-gray-600">La pagina che stai cercando non esiste.</p>
      </div>
    </div>
  );
}
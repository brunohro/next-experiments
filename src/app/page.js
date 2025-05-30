import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>página home</h1>
      <Link href="/sobre">Página sobre</Link>
      <h1>Acessar Posts</h1>
      <Link href="/posts">Posts</Link>
      <Link href="/exemplo?parametro=abc">Exemplo</Link>
      {/* Nasted routes - rotas aninhadas */}
      <Link href="/produtos/categorias/roupas">
        Ir para a Categoria de Roupas
      </Link>
      <Link href="/dashboard"> Ir para dashboard</Link>
    </div>
  );
}

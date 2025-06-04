import BotaoRedirect from "@/components/BotaoRedirect";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-zinc-200 min-h-screen px-20">
      <h1 className="text-2xl font-extrabold  text-black">PÁGINA HOME</h1>
      {/* <Link href="/sobre">Página sobre</Link> */}
      <div className="max-w-md bg-red-600 flex flex-col m-auto px-4 justify-center h-full rounded-2xl">
        <h1 className="text-3xl font-bold my-2">ACESSAR POST</h1>
        <div className="text-xl font-semibold">
          <nav className="flex flex-col gap-4">
            <ul>
              <li>
                <Link href="/posts">Posts</Link>
              </li>
              <li>
                <Link href="/exemplo?parametro=abc">Exemplo</Link>
              </li>
              <li>
                <Link href="/produtos/categorias/roupas">
                  Ir para a Categoria de Roupas
                </Link>
              </li>
              <li>
                <Link href="/dashboard"> Ir para dashboard</Link>
              </li>
              <li>
                <Link href="/profile">Ir para perfil</Link>
              </li>
              <BotaoRedirect />
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

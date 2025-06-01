"use client"; // na utilização de hooks a página deve ser carregada pelo lado do cliente
import Link from "next/link";
import { usePathname } from "next/navigation";
const Nav = () => {
  const pathname = usePathname();
  return (
    <nav>
      <ul>
        <li>
          <Link className={`link ${pathname === "/" ? "active" : ""}`} href="/">
            Ir para home
          </Link>
        </li>
        <li>
          <Link
            className={`link ${pathname === "/sobre" ? "active" : ""}`}
            href="/sobre"
          >
            Sobre
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

"use client";

import { useSearchParams } from "next/navigation";

// Os hooks só funcionam quando a página é carregada pelo lado do cliente (CSR)
const ExemploPage = () => {
  const searchParams = useSearchParams();
  const valorParams = searchParams.get("parametro");

  const presencaParams = searchParams.has("parametro");
  return (
    <div>
      <h1>Exibindo valor: {valorParams}</h1>
      {presencaParams ? "Tem parametro" : "Não tem parametro"}
    </div>
  );
};

export default ExemploPage;

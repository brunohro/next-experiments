import React from "react";

const ProdutoPage = ({ params }) => {
  // aqui eu iria realizar uma pesquisa no banco para achar gola v
  const produto = params.produto;
  return (
    <div>
      <h1>Produto {produto}</h1>
    </div>
  );
};

export default ProdutoPage;

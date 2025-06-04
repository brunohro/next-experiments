import { redirect } from "next/navigation";
import React from "react";

const ProfilePage = () => {
  // true = logado - false = deslogado
  // chamada para o banco, tentando encontrar o user pelo id ou pelo emaili

  const user = false;
  if (!user) {
    redirect("/"); //server component
  }
  return <h1>Bem vindo ao seu perfil</h1>;
};

export default ProfilePage;

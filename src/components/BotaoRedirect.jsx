"use client";
import React from "react";
import { useRouter } from "next/navigation";
const BotaoRedirect = () => {
  const router = useRouter();
  return (
    <button onClick={() => router.push("/dashboard")}>Finalizar envio</button>
  );
};

export default BotaoRedirect;

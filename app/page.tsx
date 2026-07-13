// Cada seção é um componente próprio, importado da pasta components.
import Hero from "@/components/Hero";
import Sobre from "@/components/Sobre";
import Servicos from "@/components/Servicos";
import ComoFunciona from "@/components/ComoFunciona";
import Beneficios from "@/components/Beneficios";
import Cobertura from "@/components/Cobertura";
import Contato from "@/components/Contato";

export default function Home() {
  return (
    <>
      <Hero />
      <Sobre />
      <Servicos />
      <ComoFunciona />
      <Beneficios />
      <Cobertura />
      <Contato />
    </>
  );
}


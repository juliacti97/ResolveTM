// Página de erro 404 personalizada: aparece quando a rota não existe.
// Mantém a identidade do ResolveTM e oferece um caminho de volta à Home.
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-navy-claro px-6 py-20">
      <div className="max-w-md text-center">
        <p className="font-montserrat text-6xl font-bold text-navy">404</p>
        <h1 className="mt-4 font-montserrat text-2xl font-bold text-cinza">
          Esse serviço saiu para uma visita e não voltou.
        </h1>
        <p className="mt-3 text-base leading-relaxed text-cinza/70">
          O endereço que você procurou não existe ou foi movido. Que tal voltar
          para a página inicial e encontrar o profissional que você precisa?
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-full bg-navy px-8 py-4 font-semibold text-branco transition-colors hover:bg-navy/90"
        >
          Voltar para a Home
        </Link>
      </div>
    </section>
  );
}

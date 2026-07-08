// Seção "Como funciona": explica o processo em três passos simples,
// cada um num card com número, ícone, título e descrição.

// Importa ícones da biblioteca lucide-react para representar visualmente cada passo
import { Search, ClipboardList, ThumbsUp } from "lucide-react";

// Array com os dados dos três passos do fluxo do serviço.
// Cada objeto contém: número do passo, componente de ícone, título e texto descritivo.
const passos = [
  {
    numero: "1",
    Icone: Search, // Ícone de lupa — representa a busca pelo profissional
    titulo: "Busque o serviço",
    texto: "Escolha a categoria e veja os profissionais disponíveis na sua região.",
  },
  {
    numero: "2",
    Icone: ClipboardList, // Ícone de lista — representa a solicitação do serviço
    titulo: "Solicite o orçamento",
    texto: "Entre em contato com o prestador e combine os detalhes pelo app.",
  },
  {
    numero: "3",
    Icone: ThumbsUp, // Ícone de joinha — representa a conclusão e avaliação
    titulo: "Avalie e indique",
    texto: "Depois do serviço, avalie o profissional e ajude a comunidade.",
  },
];

// Componente principal da seção "Como Funciona"
export default function ComoFunciona() {
  return (
    // Seção com id para âncora de navegação; fundo branco e padding vertical generoso
    <section id="como-funciona" className="bg-branco py-20">

      {/* Container centralizado com largura máxima e padding horizontal */}
      <div className="mx-auto max-w-6xl px-6">

        {/* Título da seção: centralizado, fonte Montserrat bold, responsivo entre 3xl e 4xl */}
        <h2 className="mx-auto max-w-2xl text-center font-montserrat text-3xl font-bold leading-tight text-cinza sm:text-4xl">
          Em três passos, o serviço certo chega até você.
        </h2>

        {/* Grid responsivo: 1 coluna em mobile, 3 colunas a partir de md (768px) */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">

          {/* Itera sobre o array de passos e renderiza um card para cada um */}
          {passos.map((passo) => (
            <div
              key={passo.numero} // Chave única para o React rastrear cada item da lista
              // Card com bordas arredondadas, borda navy claro, padding interno e texto centralizado
              className="rounded-2xl border border-navy-claro p-8 text-center"
            >
              {/* Círculo navy claro que envolve o ícone do passo;
                  centralizado horizontalmente, tamanho fixo 56x56px */}
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-navy-claro text-navy">
                {/* Ícone do passo com tamanho 26px; aria-hidden oculta do leitor de tela (decorativo) */}
                <passo.Icone size={26} aria-hidden="true" />
              </div>

              {/* Label do número do passo: fonte mono, minúsculo, maiúsculas, espaçamento amplo, cor laranja */}
              <p className="mt-5 font-mono text-xs font-semibold uppercase tracking-wider text-laranja">
                Passo {passo.numero}
              </p>

              {/* Título do passo: fonte Montserrat semibold, tamanho lg, cor cinza */}
              <h3 className="mt-2 font-montserrat text-lg font-semibold text-cinza">
                {passo.titulo}
              </h3>

              {/* Descrição curta do passo: texto pequeno (sm), altura de linha relaxada, cinza com 60% de opacidade */}
              <p className="mt-2 text-sm leading-relaxed text-cinza/60">
                {passo.texto}
              </p>
            </div>
          ))}
        </div>

        {/* Área do botão CTA (call to action) centralizada abaixo dos cards */}
        <div className="mt-10 text-center">
          {/* Link âncora para a seção de contato; estilo de botão pill (rounded-full),
              fundo navy, texto branco, transição suave de cor no hover (90% de opacidade) */}
          <a
            href="#contato"
            className="inline-block rounded-full bg-navy px-8 py-4 font-semibold text-branco transition-colors hover:bg-navy/90"
          >
            Começar agora
          </a>
        </div>
      </div>
    </section>
  );
}

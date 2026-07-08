// Seção "Benefícios": quatro cards curtos explicando por que vale a pena
// usar o ResolveTM (Confiável, Econômico, Local, Rápido).

// Importa ícones da lucide-react para representar visualmente cada benefício
// ShieldCheck = escudo (confiável), BadgeDollarSign = crachá (econômico),
// MapPin = pino (local), Zap = raio (rápido)
import { ShieldCheck, BadgeDollarSign, MapPin, Zap } from "lucide-react";

// Array com os dados dos quatro benefícios renderizados com .map().
// Cada objeto tem: componente de ícone, título e texto descritivo.
const beneficios = [
  {
    Icone: ShieldCheck, // ícone de escudo — representa segurança e confiança
    titulo: "Confiável",
    texto: "Profissionais avaliados por clientes reais da região.",
  },
  {
    Icone: BadgeDollarSign, // ícone de crachá com cifrão — representa economia
    titulo: "Econômico",
    texto: "Compare orçamentos e contrate pelo melhor preço.",
  },
  {
    Icone: MapPin, // ícone de pino de mapa — representa proximidade local
    titulo: "Local",
    texto: "Fortaleça a economia de Três de Maio contratando quem é daqui.",
  },
  {
    Icone: Zap, // ícone de raio — representa agilidade e rapidez
    titulo: "Rápido",
    texto: "Do pedido ao atendimento, tudo resolvido com agilidade.",
  },
];

export default function Beneficios() {
  return (
    // id="beneficios": alvo do link de navegação no Header e Footer
    // bg-navy-claro py-20: fundo navy bem claro com padding vertical de 80px
    <section id="beneficios" className="bg-navy-claro py-20">

      {/* Container centralizado com largura máxima e padding lateral */}
      <div className="mx-auto max-w-6xl px-6">

        {/* Título da seção alinhado à esquerda */}
        {/* max-w-xl: limita a largura do título para melhor leitura */}
        {/* font-montserrat text-3xl font-bold leading-tight text-cinza: Montserrat negrita e compacta */}
        {/* sm:text-4xl: aumenta em telas maiores que 640px */}
        <h2 className="max-w-xl font-montserrat text-3xl font-bold leading-tight text-cinza sm:text-4xl">
          Por que usar o ResolveTM.
        </h2>

        {/* Grid de cards de benefícios */}
        {/* mt-10: espaço acima separando do título */}
        {/* grid grid-cols-1: 1 coluna em mobile */}
        {/* sm:grid-cols-2: 2 colunas em telas médias */}
        {/* lg:grid-cols-4: 4 colunas lado a lado em desktop (1024px+) */}
        {/* gap-5: espaçamento entre os cards */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {/* Itera sobre o array de benefícios e renderiza um card para cada um */}
          {beneficios.map((beneficio) => (
            <div
              key={beneficio.titulo}
              // rounded-2xl: bordas bem arredondadas
              // border border-navy-claro: borda navy claro fina
              // bg-branco p-7: fundo branco com padding interno de 28px
              className="rounded-2xl border border-navy-claro bg-branco p-7"
            >
              {/* Container do ícone: quadrado arredondado navy claro */}
              {/* flex h-12 w-12 items-center justify-center: centraliza o ícone dentro do quadrado */}
              {/* rounded-xl: bordas arredondadas (menos que o card — efeito quadrado suavizado) */}
              {/* bg-navy-claro text-navy: fundo navy claro e ícone navy mais escuro */}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-claro text-navy">
                {/* Ícone com 24px; aria-hidden oculta do leitor de tela (decorativo) */}
                <beneficio.Icone size={24} aria-hidden="true" />
              </div>

              {/* Título do benefício */}
              {/* mt-4: margem acima para separar do ícone */}
              {/* font-montserrat text-lg font-semibold text-cinza: Montserrat, tamanho lg, semi-negrito, cinza */}
              <h3 className="mt-4 font-montserrat text-lg font-semibold text-cinza">
                {beneficio.titulo}
              </h3>

              {/* Descrição do benefício */}
              {/* mt-2 text-sm leading-relaxed text-cinza/60: margem acima, texto pequeno, cinza 60% */}
              <p className="mt-2 text-sm leading-relaxed text-cinza/60">
                {beneficio.texto}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

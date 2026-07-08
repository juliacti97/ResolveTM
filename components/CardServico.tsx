// Card reutilizável de serviço: mostra a foto da categoria, o nome do serviço,
// o nome de um profissional de destaque e um selo de avaliação em laranja.
// É usado pela seção Serviços, que renderiza vários cards com .map()

// Image do Next.js para otimização automática das fotos
import Image from "next/image";

// Interface TypeScript que define o contrato de dados do componente.
// Qualquer componente que usar CardServico precisa passar essas props.
// O "?" em avaliacao significa que a prop é opcional — o card funciona sem ela.
export interface CardServicoProps {
  imagem: string;       // caminho da foto, ex.: "/imagens/eletrica.jpg"
  nome: string;         // nome da categoria de serviço
  profissional: string; // nome de um profissional de destaque
  avaliacao?: string;   // nota de avaliação, ex.: "★ 4.9" (opcional)
}

// Desestruturação das props: extrai cada valor diretamente no parâmetro da função
export default function CardServico({
  imagem,
  nome,
  profissional,
  avaliacao,
}: CardServicoProps) {
  return (
    // article: elemento semântico correto para um item de conteúdo independente
    // group: classe especial do Tailwind que permite estilizar filhos no hover do pai (group-hover)
    // overflow-hidden: garante que o zoom da foto no hover não vaze para fora do card
    // rounded-2xl border border-navy-claro: bordas arredondadas com borda navy claro
    // bg-branco shadow-sm: fundo branco com sombra sutil
    // transition-transform hover:-translate-y-1 hover:shadow-md: sobe 4px e aumenta a sombra no hover
    <article className="group overflow-hidden rounded-2xl border border-navy-claro bg-branco shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md">

      {/* Container da foto com altura fixa */}
      {/* relative h-44 w-full: necessário para o Image com fill funcionar (posição e tamanho definidos) */}
      {/* overflow-hidden: recorta o zoom da foto nas bordas do container */}
      <div className="relative h-44 w-full overflow-hidden">

        {/* Foto da categoria de serviço */}
        {/* fill: preenche todo o container pai (div acima) */}
        {/* object-cover: recorta para cobrir sem distorcer */}
        {/* transition-transform duration-300 group-hover:scale-105: ao passar o mouse no article (group),
            a foto escala para 105% com transição de 300ms — efeito de zoom suave */}
        <Image
          src={imagem}
          alt={nome}
          fill
          className="object-contain p-3 transition-transform duration-300 group-hover:scale-105"
        />

        {/* Selo de avaliação — só renderiza se a prop `avaliacao` foi informada */}
        {/* absolute right-3 top-3: posicionado no canto superior direito da foto */}
        {/* rounded-full bg-laranja: pílula laranja de destaque */}
        {/* px-3 py-1 text-xs font-bold text-branco: texto bem pequeno, negrito e branco */}
        {avaliacao && (
          <span className="absolute right-3 top-3 rounded-full bg-laranja px-3 py-1 text-xs font-bold text-branco">
            {avaliacao}
          </span>
        )}
      </div>

      {/* Área de texto abaixo da foto */}
      {/* p-5: padding interno uniforme de 20px */}
      <div className="p-5">
        {/* Nome da categoria: fonte Montserrat, tamanho lg (18px), semi-negrito, cinza */}
        <h3 className="font-montserrat text-lg font-semibold text-cinza">{nome}</h3>

        {/* Nome do profissional: texto pequeno (14px), cinza com 60% de opacidade */}
        {/* mt-1: espaço pequeno acima para separar do título */}
        <p className="mt-1 text-sm text-cinza/60">por {profissional}</p>
      </div>
    </article>
  );
}

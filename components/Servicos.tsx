// Seção "Serviços": mostra um grid de cards com as categorias de serviço.
// Os dados ficam num array e são renderizados com .map(),
// reaproveitando o componente CardServico para cada item.

// Importa o componente de card e sua interface de tipagem
import CardServico, { CardServicoProps } from "@/components/CardServico";

// Array com os dados de cada serviço exibido na seção.
// Tipado com CardServicoProps para garantir que todos os campos obrigatórios existam.
// Para adicionar um novo card, basta incluir mais um objeto aqui — o .map() abaixo cuida do resto.
const servicos: CardServicoProps[] = [
  {
    imagem: "/imagens/construção.png",
    nome: "Casa & Construção",
    profissional: "João Silva",
    avaliacao: "★ 4",
  },
  {
    imagem: "/imagens/beleza.png",
    nome: "Beleza & Estética",
    profissional: "Luísa Gomes",
    avaliacao: "★ 1",
  },
  {
    imagem: "/imagens/livro.png",
    nome: "Educação",
    profissional: "Marcos Santos",
    avaliacao: "★ 4",
  },
  {
    imagem: "/imagens/saude.png",
    nome: "Saúde",
    profissional: "Patrícia Oliveira",
    avaliacao: "★ 4.9",
  },
  {
    imagem: "/imagens/laptop.png",
    nome: "Tecnologia",
    profissional: "Maurício Pereira",
    avaliacao: "★ 3",
  },
  {
    imagem: "/imagens/carro.png",
    nome: "transporte",
    profissional: "Táxi do Perin",
    avaliacao: "★ 2",
  },
    {
    imagem: "/imagens/chefe.png",
    nome: "Alimentação",
    profissional: "Erick Jacquin",
    avaliacao: "★ 4.9",
  },
    {
    imagem: "/imagens/pet.png",
    nome: "Pets",
    profissional: "Andréia Bastos",
    avaliacao: "★ 4.5",
  },
      {
    imagem: "/imagens/confete.png",
    nome: "Eventos",
    profissional: "Verônica Fotos",
    avaliacao: "★ 3.8",
  },
      {
    imagem: "/imagens/balde.png",
    nome: "Limpeza",
    profissional: "Sônia Batista",
    avaliacao: "★ 3.5",
  },
      {
    imagem: "/imagens/escudo.png",
    nome: "Segurança",
    profissional: "Cristiano Donata",
    avaliacao: "★ 4.2",
  },      {
    imagem: "/imagens/jardim.png",
    nome: "Jardinagem",
    profissional: "Ana Flores",
    avaliacao: "★ 1",
  },
];

export default function Servicos() {
  return (
    // id="servicos": alvo dos links do Header, Hero e Sobre
    // bg-navy-claro py-20: fundo navy bem claro com padding vertical de 80px
    <section id="servicos" className="bg-navy-claro py-20">

      {/* Container centralizado com largura máxima e padding lateral */}
      <div className="mx-auto max-w-6xl px-6">

        {/* Cabeçalho da seção: título, subtítulo e botão CTA */}
        {/* max-w-2xl: limita a largura do bloco de texto para não esticar demais */}
        <div className="max-w-2xl">

          {/* Título da seção */}
          {/* font-montserrat text-3xl font-bold leading-tight text-cinza: Montserrat negrita e compacta */}
          {/* sm:text-4xl: cresce em telas maiores que 640px */}
          <h2 className="font-montserrat text-3xl font-bold leading-tight text-cinza sm:text-4xl">
            Eletricistas, encanadores, pintores e muito mais.
          </h2>

          {/* Subtítulo explicando o que o usuário vai encontrar */}
          {/* mt-4 text-base leading-relaxed text-cinza/70: margem acima, texto normal, cinza 70% */}
          <p className="mt-4 text-base leading-relaxed text-cinza/70">
            Navegue pelas categorias e encontre o profissional certo para o que
            você precisa. Todos os prestadores são da região e avaliados por
            clientes reais.
          </p>

          {/* Botão CTA laranja que leva para o formulário de contato */}
          {/* mt-6 inline-block rounded-full: margem, exibe como bloco inline, bordas pílula */}
          {/* bg-laranja px-7 py-3.5: fundo laranja com padding confortável */}
          {/* font-semibold text-branco: semi-negrito branco */}
          {/* transition-colors hover:bg-laranja/90: hover suavizado com leve transparência */}
          <a
            href="#contato"
            className="mt-6 inline-block rounded-full bg-laranja px-7 py-3.5 font-semibold text-branco transition-colors hover:bg-laranja/90"
          >
            Quero um profissional
          </a>
        </div>

        {/* Grid de cards de serviço */}
        {/* mt-10: espaço acima separando do cabeçalho */}
        {/* grid grid-cols-1: 1 coluna em mobile */}
        {/* sm:grid-cols-2: 2 colunas em telas médias (640px+) */}
        {/* lg:grid-cols-3: 3 colunas em telas grandes (1024px+) */}
        {/* gap-6: espaçamento entre os cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {/* Itera sobre o array de serviços e renderiza um CardServico para cada um */}
          {servicos.map((servico) => (
            <CardServico
              key={servico.nome}                  // chave única para o React identificar cada card
              imagem={servico.imagem}             // caminho da foto
              nome={servico.nome}                 // nome da categoria
              profissional={servico.profissional} // nome do profissional de destaque
              avaliacao={servico.avaliacao}       // selo de avaliação (opcional)
            />
          ))}
        </div>
      </div>
    </section>
  );
}

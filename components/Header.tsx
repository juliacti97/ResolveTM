// Cabeçalho fixo no topo: mostra a logo "ResolveTM" e o menu de navegação
// por âncoras, que rola suavemente até cada seção da página.

// Lista dos itens do menu de navegação.
// Cada objeto tem href (id da seção alvo) e label (texto exibido no link).
const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#beneficios", label: "Benefícios" },
  { href: "#cobertura", label: "Cobertura" },
  { href: "#contato", label: "Contato" },
];

import Image from "next/image";
export default function Header() {
  return (
    // sticky: mantém o header visível ao rolar a página
    // top-0: cola no topo da viewport
    // z-50: fica acima de todos os outros elementos
    // w-full: ocupa 100% da largura
    // border-b border-navy-claro: linha fina navy na borda inferior
    // bg-branco/95: fundo branco com 95% de opacidade (deixa ver levemente o conteúdo atrás)
    // backdrop-blur: desfoca o conteúdo por trás do header (efeito vidro fosco)
    <header className="sticky top-0 z-50 w-full border-b border-navy-claro bg-branco/95 backdrop-blur">

      {/* Nav: container interno centralizado com largura máxima, itens alinhados em linha */}
      {/* mx-auto max-w-6xl: centraliza e limita a largura a 1152px */}
      {/* flex items-center gap-6: coloca logo, menu e botão na mesma linha com espaço entre eles */}
      {/* px-6 py-4: padding horizontal e vertical interno */}
      <nav className="mx-auto flex max-w-6xl items-center gap-6 px-6 py-4">

        {/* Logo da marca em texto. Clicando, volta para o topo (#inicio). */}
        {/* flex-shrink-0: impede que a logo encolha quando o espaço é pequeno */}
        <a href="#inicio" className="flex-shrink-0">
          <Image
            src="/imagens/recorte.png"
            alt="ResolveTM"
            width={100}
            height={60}
            priority
          />
        </a>

        {/* Lista de links de navegação */}
        {/* hidden: esconde em mobile (telas pequenas) para não quebrar o layout */}
        {/* md:flex: exibe como flexbox a partir de 768px (tablet/desktop) */}
        {/* ml-4: margem à esquerda para separar da logo */}
        {/* items-center gap-6: alinha verticalmente e espaça os itens */}
        <ul className="ml-4 hidden items-center gap-6 md:flex">
          {/* Itera sobre o array de links e renderiza um <li> para cada item */}
          {links.map((link) => (
            <li key={link.href}>
              {/* text-sm font-medium: texto pequeno e semi-negrito */}
              {/* text-cinza: cor padrão cinza escuro */}
              {/* transition-colors hover:text-navy: muda para navy suavemente ao passar o mouse */}
              <a
                href={link.href}
                className="text-sm font-medium text-cinza transition-colors hover:text-navy"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Botão CTA (call to action) que leva para a seção de contato */}
        {/* ml-auto: empurra o botão para a extremidade direita do nav */}
        {/* rounded-full: bordas totalmente arredondadas (formato pílula) */}
        {/* bg-laranja px-5 py-2.5: fundo laranja com padding interno confortável */}
        {/* text-sm font-semibold text-branco: texto pequeno, semi-negrito, cor branca */}
        {/* transition-colors hover:bg-laranja/90: fundo fica levemente mais transparente no hover */}
        <a
          href="#contato"
          className="ml-auto rounded-full bg-laranja px-5 py-2.5 text-sm font-semibold text-branco transition-colors hover:bg-laranja/90"
        >
          Encontrar profissional
        </a>
      </nav>
    </header>
  );
}

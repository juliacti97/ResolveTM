// Rodapé do site: nome da marca, uma frase curta, navegação,
// e-mail de contato e ícones de redes sociais (placeholders).

import Image from "next/image";
export default function Footer() {
  return (
    // border-t border-navy-claro: linha navy fina separando o footer do conteúdo acima
    // bg-branco: fundo branco
    <footer className="border-t border-navy-claro bg-branco">
      {/* Container do grid com 4 colunas em desktop */}
      {/* mx-auto max-w-6xl: centraliza com largura máxima de 1152px */}
      {/* gap-8 px-6 py-12: espaçamento interno generoso entre colunas e bordas */}
      {/* sm:grid-cols-2: 2 colunas em telas médias */}
      {/* md:grid-cols-4: 4 colunas em desktop */}
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 sm:grid-cols-2 md:grid-cols-4">
        {/* Coluna 1: logo + descrição da marca */}
        {/* sm:col-span-2 md:col-span-1: ocupa 2 colunas em sm para dar mais espaço ao texto,
            volta a 1 coluna em md quando há 4 colunas disponíveis */}
        <div className="sm:col-span-2 md:col-span-1">
          {/* Logotipo em texto: "Resolve" negrito navy + "TM" laranja */}
          <Image
            src="/imagens/recorte.png"
            alt="ResolveTM"
            width={100}
            height={60}
            priority
          />

          {/* Frase curta de posicionamento da marca */}
          {/* max-w-xs: limita a largura para não ficar muito largo */}
          {/* text-sm leading-relaxed text-cinza/70: texto pequeno, altura de linha confortável, cinza com 70% de opacidade */}
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-cinza/70">
            Marketplace digital de serviços que fortalece a economia local de
            Três de Maio e região, conectando clientes a profissionais de
            confiança.
          </p>
        </div>

        {/* Coluna 2: links de navegação do site */}
        <div>
          {/* Título da coluna: fonte Montserrat, pequeno, semi-negrito, cinza */}
          <h3 className="mb-3 font-montserrat text-sm font-semibold text-cinza">
            Navegue
          </h3>
          {/* Lista vertical de links: flex-col gap-2 espaça cada item */}
          {/* text-sm text-cinza/70: texto pequeno e cinza semitransparente */}
          {/* hover:text-navy: muda a cor para navy ao passar o mouse */}
          <ul className="flex flex-col gap-2 text-sm text-cinza/70">
            <li>
              <a href="#sobre" className="hover:text-navy">
                Sobre
              </a>
            </li>
            <li>
              <a href="#servicos" className="hover:text-navy">
                Serviços
              </a>
            </li>
            <li>
              <a href="#como-funciona" className="hover:text-navy">
                Como funciona
              </a>
            </li>
            <li>
              <a href="#beneficios" className="hover:text-navy">
                Benefícios
              </a>
            </li>
          </ul>
        </div>

        {/* Coluna 3: links de atendimento */}
        <div>
          <h3 className="mb-3 font-montserrat text-sm font-semibold text-cinza">
            Atendimento
          </h3>
          <ul className="flex flex-col gap-2 text-sm text-cinza/70">
            <li>
              <a href="#cobertura" className="hover:text-navy">
                Área de cobertura
              </a>
            </li>
            <li>
              <a href="#contato" className="hover:text-navy">
                Contato
              </a>
            </li>
            <li>
              <a href="#contato" className="hover:text-navy">
                Seja um prestador
              </a>
            </li>
          </ul>
        </div>

        {/* Coluna 4: e-mail de contato + ícones de redes sociais (placeholders) */}
        <div>
          <h3 className="mb-3 font-montserrat text-sm font-semibold text-cinza">
            Fale com a gente
          </h3>
          {/* Link de e-mail fictício */}
          <a
            href="mailto:contato@resolvetm.com.br"
            className="text-sm text-cinza/70 hover:text-navy"
          >
            contato@resolvetm.com.br
          </a>

          {/* Ícones de redes sociais (placeholders visuais) */}
          {/* mt-4 flex gap-3: margem acima e espaçamento entre os botões */}
          <div className="mt-4 flex gap-3">
            {/* Placeholder Instagram */}
            <a href="https://www.instagram.com/"
            aria-label="Instagram"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-navy-claro hover:border-navy"
          >
            <Image
              src="/imagens/Insta-icon.png"
              alt="Instagram"
              width={20}
              height={20}
            />
          </a>
            {/* Placeholder Facebook */}
            <a href="https://www.facebook.com/?locale=pt_BR"
            aria-label="Facebook"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-navy-claro hover:border-navy"
          >
            <Image
              src="/imagens/Face-icon.png"
              alt="Facebook"
              width={20}
              height={20}
            />
          </a>
          </div>
        </div>
      </div>

      {/* Barra inferior com copyright */}
      {/* border-t border-navy-claro: separa o copyright do grid acima */}
      <div className="border-t border-navy-claro">
        {/* Texto centralizado, pequeno e cinza semitransparente */}
        <div className="mx-auto max-w-6xl px-6 py-5 text-center text-sm text-cinza/60">
          © 2026 ResolveTM — Projeto educacional Setrem
        </div>
      </div>
    </footer>
  );
}

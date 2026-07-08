// Seção "Sobre": conta a missão do ResolveTM em duas colunas —
// texto de um lado e a foto do profissional do outro.

// Image do Next.js com otimização automática de tamanho e formato
import Image from "next/image";

export default function Sobre() {
  return (
    // id="sobre": alvo do link de navegação no Header e no Footer
    // bg-branco py-20: fundo branco com padding vertical de 80px
    <section id="sobre" className="bg-branco py-20">

      {/* Container em grid de 2 colunas a partir de md (768px) */}
      {/* mx-auto max-w-6xl px-6: centralizado com largura máxima e padding lateral */}
      {/* items-center: alinha verticalmente texto e imagem pelo centro */}
      {/* gap-12: espaço grande entre as duas colunas */}
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">

        {/* Coluna esquerda: textos da missão */}
        <div>
          {/* Título da seção */}
          {/* font-montserrat text-3xl font-bold leading-tight text-cinza: fonte Montserrat negrita, compacta e cinza */}
          {/* sm:text-4xl: aumenta o tamanho em telas maiores */}
          <h2 className="font-montserrat text-3xl font-bold leading-tight text-cinza sm:text-4xl">
            Nascemos para dar visibilidade a quem faz acontecer na nossa região.
          </h2>

          {/* Parágrafo explicando o problema que o ResolveTM resolve */}
          {/* mt-5 max-w-md: margem acima e largura máxima para facilitar a leitura */}
          {/* text-base leading-relaxed text-cinza/70: texto normal com boa altura de linha e cinza semitransparente */}
          <p className="mt-5 max-w-md text-base leading-relaxed text-cinza/70">
            Em Três de Maio e na região, muitos profissionais autônomos e pequenos
            negócios de serviço têm dificuldade de se divulgar. E muita gente não
            sabe a quem recorrer quando precisa de um eletricista, encanador ou
            pintor de confiança. O ResolveTM resolve os dois lados: dá vitrine ao
            profissional e conecta o cliente a quem pode ajudar.
          </p>

          {/* Botão CTA que leva para a seção de serviços */}
          {/* mt-7: margem acima para separar do texto */}
          {/* inline-block rounded-full bg-navy: botão pílula navy */}
          {/* px-7 py-3.5: padding confortável */}
          {/* font-semibold text-branco: texto semi-negrito branco */}
          {/* transition-colors hover:bg-navy/90: suaviza o hover com leve transparência */}
          <a
            href="#servicos"
            className="mt-7 inline-block rounded-full bg-navy px-7 py-3.5 font-semibold text-branco transition-colors hover:bg-navy/90"
          >
            Conhecer os profissionais
          </a>
        </div>

        {/* Coluna direita: foto do profissional */}
        {/* relative: necessário para o Image com fill funcionar corretamente */}
        {/* h-[440px]: altura fixa de 440px para a imagem */}
        {/* overflow-hidden rounded-3xl: recorta nas bordas muito arredondadas */}
        <div className="relative h-[440px] overflow-hidden rounded-3xl">
          {/* fill: a imagem preenche todo o container pai (div acima) */}
          {/* object-cover: recorta para cobrir o espaço sem distorcer a proporção */}
          <Image
            src="/imagens/selo.png"  //verificar com a camila para criar um carrossel de imagens de prestadores de serviços.
            alt="Profissional autônomo da região atendendo um cliente"
            fill
            className="rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}

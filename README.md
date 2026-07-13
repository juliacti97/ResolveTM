# ResolveTM

Marketplace digital de serviços que conecta clientes a prestadores de serviço autônomos de Três de Maio e região — RS.  
Projeto educacional desenvolvido para a disciplina de Front-end da Setrem.

## Tecnologias

- **Next.js 16** (App Router)
- **React 19** com componentes funcionais e TypeScript
- **Tailwind CSS v4** para toda a estilização
- **Lucide React** para ícones

## Identidade visual

| Token        | Cor       | Uso                  |
|-------------|-----------|----------------------|
| `navy`       | `#1B2B5E` | Cor principal        |
| `navy-claro` | `#EBF0FF` | Fundos suaves        |
| `laranja`    | `#F97316` | Destaques e CTAs     |
| `cinza`      | `#1F2937` | Texto                |
| `branco`     | `#FFFFFF` | Fundo                |

Fonte dos títulos: **Montserrat** | Fonte do texto: **Inter**

## Estrutura de pastas

```
app/
  layout.tsx          ← metadados de SEO, fontes, <Header> e <Footer>
  page.tsx            ← landing page montada com todas as seções
  not-found.tsx       ← página 404 personalizada
  globals.css         ← tema de cores e diretivas do Tailwind
  api/
    contato/
      route.ts        ← endpoint POST para receber mensagens do formulário
components/
  Header.tsx          ← cabeçalho fixo com logo e navegação por âncoras
  Footer.tsx          ← rodapé com links e copyright
  Hero.tsx            ← seção inicial com chamada principal
  Sobre.tsx           ← missão da plataforma com foto do profissional
  Servicos.tsx        ← grid de categorias de serviço
  CardServico.tsx     ← card reutilizável de categoria (usado pelo Servicos.tsx)
  ComoFunciona.tsx    ← três passos do fluxo do serviço
  Beneficios.tsx      ← quatro diferenciais da plataforma
  Cobertura.tsx       ← campo de CEP com consulta à API ViaCEP
  Contato.tsx         ← formulário de contato com envio para a API
public/
  imagens/            ← fotos das categorias de serviço e do hero
```

## Seções da landing page

| Seção        | ID âncora       | Descrição                                   |
|-------------|-----------------|---------------------------------------------|
| Hero         | `#inicio`        | Chamada principal e botão para serviços     |
| Sobre        | `#sobre`         | Missão e história da plataforma             |
| Serviços     | `#servicos`      | Grid de cards por categoria                 |
| Como funciona| `#como-funciona` | Fluxo em 3 passos                           |
| Benefícios   | `#beneficios`    | 4 diferenciais da plataforma                |
| Cobertura    | `#cobertura`     | Verificação de CEP via ViaCEP               |
| Contato      | `#contato`       | Formulário de mensagem                      |

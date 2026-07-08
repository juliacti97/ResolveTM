// Layout raiz: carrega as fontes, define a metadata de SEO/Open Graph
// e envolve todas as páginas com o cabeçalho (Header) e o rodapé (Footer).
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Metadata da página, usada pelo Next para montar as tags <title>, <meta> e Open Graph.
export const metadata: Metadata = {
  title: "ResolveTM — conectando clientes a prestadores de serviço em Três de Maio",
  description:
    "Plataforma digital que conecta moradores de Três de Maio e região aos melhores prestadores de serviço autônomos. Rápido, local e com quem você pode confiar.",
  openGraph: {
    title: "ResolveTM — conectando clientes a prestadores de serviço em Três de Maio",
    description:
      "Encontre eletricistas, encanadores, pintores e muito mais. Apoie a economia local e contrate quem é da sua região.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // lang pt-BR para acessibilidade e SEO.
    <html lang="pt-BR">
      <body className="bg-branco font-inter text-cinza antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Galli Topografia" },
      { name: "description", content: "Dúvidas frequentes sobre georreferenciamento, regularização de imóveis e nossos serviços." },
      { property: "og:title", content: "FAQ — Galli Topografia" },
      { property: "og:description", content: "Dúvidas frequentes sobre nossos serviços." },
    ],
  }),
  component: FAQPage,
});

function FAQPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold text-foreground">Perguntas Frequentes</h1>
      <p className="mt-4 text-lg text-muted-foreground">Em breve mais detalhes.</p>
    </div>
  );
}

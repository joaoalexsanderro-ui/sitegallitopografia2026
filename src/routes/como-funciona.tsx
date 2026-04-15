import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/como-funciona")({
  head: () => ({
    meta: [
      { title: "Como Funciona — Galli Topografia" },
      { name: "description", content: "Entenda como funciona nossa consultoria gratuita e o processo de regularização do seu imóvel." },
      { property: "og:title", content: "Como Funciona — Galli Topografia" },
      { property: "og:description", content: "Entenda como funciona nossa consultoria gratuita." },
    ],
  }),
  component: ComoFuncionaPage,
});

function ComoFuncionaPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold text-foreground">Como Funciona</h1>
      <p className="mt-4 text-lg text-muted-foreground">Em breve mais detalhes sobre nosso processo.</p>
    </div>
  );
}

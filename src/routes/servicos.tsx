import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços — Galli Topografia" },
      { name: "description", content: "Georreferenciamento, regularização de imóveis e levantamento topográfico com precisão e agilidade." },
      { property: "og:title", content: "Serviços — Galli Topografia" },
      { property: "og:description", content: "Georreferenciamento, regularização de imóveis e levantamento topográfico." },
    ],
  }),
  component: ServicosPage,
});

function ServicosPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold text-foreground">Nossos Serviços</h1>
      <p className="mt-4 text-lg text-muted-foreground">Em breve mais detalhes sobre nossos serviços.</p>
    </div>
  );
}

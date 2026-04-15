import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, Instagram } from "lucide-react";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Galli Topografia" },
      { name: "description", content: "Entre em contato com a Galli Topografia. WhatsApp, Instagram e endereço em Tapejara/RS." },
      { property: "og:title", content: "Contato — Galli Topografia" },
      { property: "og:description", content: "Entre em contato com a Galli Topografia." },
    ],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold text-foreground">Contato</h1>
      <div className="mt-8 space-y-4">
        <a href="https://wa.me/5554984007983" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-lg text-muted-foreground hover:text-foreground">
          <Phone className="h-5 w-5 text-primary" /> (54) 98400-7983
        </a>
        <a href="https://www.instagram.com/gallitopografia/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-lg text-muted-foreground hover:text-foreground">
          <Instagram className="h-5 w-5 text-primary" /> @gallitopografia
        </a>
        <div className="flex items-center gap-3 text-lg text-muted-foreground">
          <MapPin className="h-5 w-5 text-primary" /> Av. 7 de Setembro, 1952, sala 2 — Tapejara/RS
        </div>
      </div>
    </div>
  );
}

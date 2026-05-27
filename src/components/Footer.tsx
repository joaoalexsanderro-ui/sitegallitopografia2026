import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Instagram, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t bg-slate-50 text-foreground">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,var(--color-primary)/0.03,transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center">
              <img
                src="https://lh3.googleusercontent.com/d/1PLRpXkOrJaEZ1A169DIxa8Ni0TNuxjg3"
                alt="Galli Topografia e Georreferenciamento"
                className="h-16 w-auto md:h-20 object-contain"
              />
            </div>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Especialistas em regularização de imóveis e georreferenciamento junto ao INCRA no norte do RS.
            </p>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-bold uppercase tracking-widest text-primary">Navegação</h4>
            <nav className="flex flex-col gap-3">
              {[
                { to: "/#home", label: "Home" },
                { to: "/#servicos", label: "Serviços" },
                { to: "/#como-funciona", label: "Como Funciona" },
                { to: "/#faq", label: "FAQ" },
                { to: "/#contato", label: "Contato" },
              ].map((l) => (
                <Link key={l.to} to={l.to as any} className="text-sm text-muted-foreground transition-colors hover:text-primary">{l.label}</Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-bold uppercase tracking-widest text-primary">Contato</h4>
            <div className="flex flex-col gap-4">
              <a href="https://wa.me/5554984007983?text=Vim%20pelo%20site%20da%20Galli%20Topografia" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-primary">
                <Phone className="h-4 w-4 shrink-0 text-primary" /> (54) 98400-7983
              </a>
              <a href="https://www.instagram.com/gallitopografia/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-primary">
                <Instagram className="h-4 w-4 shrink-0 text-primary" /> @gallitopografia
              </a>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Galli+Topografia+e+Georreferenciamento,+Av.+Sete+de+Setembro,+1952+-+Centro,+Tapejara+-+RS,+99950-000" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-start gap-2.5 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary group-hover:animate-bounce" />
                <span>
                  Av. 7 de Setembro, 1952, sala 2<br />
                  Tapejara/RS
                </span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-bold uppercase tracking-widest text-primary">Consultoria Gratuita</h4>
            <p className="mb-5 text-sm text-muted-foreground">
              Agende sem custo e resolva as questões do seu imóvel com um especialista.
            </p>
            <a
              href="https://wa.me/5554984007983?text=Vim%20pelo%20site%20da%20Galli%20Topografia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-galli-green px-5 py-3 text-sm font-bold text-primary-foreground shadow-lg shadow-galli-green/20 transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              <Phone className="h-4 w-4" />
              Agendar agora
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

      </div>
      <div className="bg-[#2d67a8] py-6 text-center text-xs font-medium text-white/90">
        © {new Date().getFullYear()} Galli Topografia e Georreferenciamento. Todos os direitos reservados.
      </div>
    </footer>
  );
}

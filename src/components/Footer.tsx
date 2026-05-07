import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Instagram, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t bg-foreground text-background">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,var(--color-primary)/0.15,transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center">
              <img
                src="https://rmetppilvfrxosvxzhgj.supabase.co/storage/v1/object/public/message-attachments/df909724-d1f2-4377-897e-dfbbd9509455/1778159686833_r0yhpr_LOGO_2_HORIZONTAL_GALLI_topografia_e_georreferenciamento.png"
                alt="Galli Topografia e Georreferenciamento"
                className="h-20 w-auto md:h-24"
                loading="lazy"
              />
            </div>
            <p className="mt-5 text-sm leading-relaxed opacity-60">
              Especialistas em regularização de imóveis e georreferenciamento junto ao INCRA no norte do RS.
            </p>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-bold uppercase tracking-widest opacity-40">Navegação</h4>
            <nav className="flex flex-col gap-3">
              {[
                { to: "/", label: "Home" },
                { to: "/servicos", label: "Serviços" },
                { to: "/como-funciona", label: "Como Funciona" },
                { to: "/faq", label: "FAQ" },
                { to: "/contato", label: "Contato" },
              ].map((l) => (
                <Link key={l.to} to={l.to as any} className="text-sm opacity-60 transition-opacity hover:opacity-100">{l.label}</Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-bold uppercase tracking-widest opacity-40">Contato</h4>
            <div className="flex flex-col gap-4">
              <a href="https://wa.me/5554984007983" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-sm opacity-60 transition-opacity hover:opacity-100">
                <Phone className="h-4 w-4 shrink-0" /> (54) 98400-7983
              </a>
              <a href="https://www.instagram.com/gallitopografia/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-sm opacity-60 transition-opacity hover:opacity-100">
                <Instagram className="h-4 w-4 shrink-0" /> @gallitopografia
              </a>
              <div className="flex items-start gap-2.5 text-sm opacity-60">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>Av. 7 de Setembro, 1952, sala 2<br />Tapejara/RS</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-bold uppercase tracking-widest opacity-40">Consultoria Gratuita</h4>
            <p className="mb-5 text-sm opacity-60">
              Agende sem custo e resolva as questões do seu imóvel com um especialista.
            </p>
            <a
              href="https://wa.me/5554984007983?text=Gostaria%20de%20agendar%20uma%20consultoria"
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

        <div className="mt-14 border-t border-background/10 pt-6 text-center text-xs opacity-40">
          © {new Date().getFullYear()} Galli Topografia e Georreferenciamento. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}

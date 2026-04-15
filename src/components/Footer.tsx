import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground">
                <span className="text-lg font-bold text-primary">G</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-tight">GALLI</span>
                <span className="text-[10px] font-medium uppercase tracking-wider opacity-80">
                  Topografia &amp; Georreferenciamento
                </span>
              </div>
            </div>
            <p className="mt-4 text-sm opacity-80">
              Especialistas em regularização de imóveis e georreferenciamento junto ao INCRA.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Navegação</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm opacity-80 transition-opacity hover:opacity-100">Home</Link>
              <Link to="/servicos" className="text-sm opacity-80 transition-opacity hover:opacity-100">Serviços</Link>
              <Link to="/como-funciona" className="text-sm opacity-80 transition-opacity hover:opacity-100">Como Funciona</Link>
              <Link to="/faq" className="text-sm opacity-80 transition-opacity hover:opacity-100">FAQ</Link>
              <Link to="/contato" className="text-sm opacity-80 transition-opacity hover:opacity-100">Contato</Link>
            </nav>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Contato</h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/5554984007983"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm opacity-80 transition-opacity hover:opacity-100"
              >
                <Phone className="h-4 w-4" />
                (54) 98400-7983
              </a>
              <a
                href="https://www.instagram.com/gallitopografia/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm opacity-80 transition-opacity hover:opacity-100"
              >
                <Instagram className="h-4 w-4" />
                @gallitopografia
              </a>
              <div className="flex items-start gap-2 text-sm opacity-80">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>Av. 7 de Setembro, 1952, sala 2 — Tapejara/RS</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Consultoria Gratuita</h4>
            <p className="mb-4 text-sm opacity-80">
              Agende uma consultoria gratuita com nossos especialistas e resolva as questões do seu imóvel.
            </p>
            <a
              href="https://wa.me/5554984007983?text=Gostaria%20de%20agendar%20uma%20consultoria"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-galli-green px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-galli-green/90"
            >
              <Phone className="h-4 w-4" />
              Agendar Consultoria
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-primary-foreground/20 pt-6 text-center text-sm opacity-60">
          © {new Date().getFullYear()} Galli Topografia. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}

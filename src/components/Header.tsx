import { Link } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/servicos", label: "Serviços" },
    { to: "/como-funciona", label: "Como Funciona" },
    { to: "/faq", label: "FAQ" },
    { to: "/contato", label: "Contato" },
  ] as const;

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-card/80 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="group flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/80 shadow-lg shadow-primary/20 transition-shadow group-hover:shadow-primary/30">
            <span className="text-lg font-black text-primary-foreground">G</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black leading-tight tracking-tight text-primary">GALLI</span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
              Topografia &amp; Geo
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="rounded-lg px-3.5 py-2 text-sm font-medium text-muted-foreground transition-all hover:bg-accent hover:text-foreground"
              activeProps={{ className: "bg-primary/10 text-primary font-semibold" }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/5554984007983?text=Gostaria%20de%20agendar%20uma%20consultoria"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 inline-flex items-center gap-2 rounded-xl bg-galli-green px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-md shadow-galli-green/20 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-galli-green/25"
          >
            <Phone className="h-4 w-4" />
            Fale Conosco
          </a>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg p-2.5 text-muted-foreground transition-colors hover:bg-accent md:hidden"
          aria-label="Menu"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="animate-in slide-in-from-top-2 border-t bg-card px-4 pb-6 pt-3 md:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                activeProps={{ className: "bg-primary/10 text-primary font-semibold" }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/5554984007983?text=Gostaria%20de%20agendar%20uma%20consultoria"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-xl bg-galli-green px-5 py-3 text-sm font-bold text-primary-foreground shadow-md transition-all"
            >
              <Phone className="h-4 w-4" />
              Fale Conosco
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

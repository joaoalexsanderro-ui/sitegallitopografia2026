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
    <header className="sticky top-0 z-50 border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <span className="text-lg font-bold text-primary-foreground">G</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold leading-tight text-primary">GALLI</span>
            <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
              Topografia &amp; Georreferenciamento
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              activeProps={{ className: "bg-accent text-foreground" }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/5554984007983?text=Gostaria%20de%20agendar%20uma%20consultoria"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center gap-2 rounded-md bg-galli-green px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-galli-green/90"
          >
            <Phone className="h-4 w-4" />
            Fale Conosco
          </a>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-md p-2 text-muted-foreground md:hidden"
          aria-label="Menu"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t bg-card px-4 pb-4 pt-2 md:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                activeProps={{ className: "bg-accent text-foreground" }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/5554984007983?text=Gostaria%20de%20agendar%20uma%20consultoria"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-galli-green px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-galli-green/90"
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

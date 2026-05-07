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
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#2c67a4]! backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="group flex items-center -my-4">
          <img
            src="https://gallitopografia.com.br/wp-content/uploads/2025/09/LOGO-GALLI-7.webp"
            alt="Galli Topografia e Georreferenciamento"
            className="h-28 w-auto md:h-32"
            loading="eager"
          />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="rounded-lg px-3.5 py-2 text-sm font-medium text-white/90 transition-all hover:bg-white/10 hover:text-white"
              activeProps={{ className: "bg-white/20 text-white font-semibold" }}
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
          className="rounded-lg p-2.5 text-white/90 transition-colors hover:bg-white/10 md:hidden"
          aria-label="Menu"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="animate-in slide-in-from-top-2 border-t border-white/10 bg-[#2c67a4] px-4 pb-6 pt-3 md:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="rounded-lg px-4 py-3 text-sm font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-white"
                activeProps={{ className: "bg-white/20 text-white font-semibold" }}
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

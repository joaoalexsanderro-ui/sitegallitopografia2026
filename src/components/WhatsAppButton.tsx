import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5554984007983?text=Gostaria%20de%20agendar%20uma%20consultoria"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-galli-green shadow-xl shadow-galli-green/30 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-galli-green/40"
      aria-label="Fale pelo WhatsApp"
    >
      <MessageCircle className="h-7 w-7 text-primary-foreground" />
      <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-galli-yellow text-[10px] font-bold text-foreground">
        1
      </span>
    </a>
  );
}

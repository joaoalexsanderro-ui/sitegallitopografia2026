import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5554984007983?text=Gostaria%20de%20agendar%20uma%20consultoria"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-galli-green shadow-lg transition-transform hover:scale-110"
      aria-label="Fale pelo WhatsApp"
    >
      <MessageCircle className="h-7 w-7 text-primary-foreground" />
    </a>
  );
}

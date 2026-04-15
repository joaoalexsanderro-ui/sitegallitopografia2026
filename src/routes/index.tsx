import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, MapPin, FileCheck, Ruler, Shield, Clock, Users, CheckCircle, ChevronDown, Phone } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <ForWhoSection />
      <ServicesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-primary">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.15),transparent_60%)]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center rounded-full bg-galli-green/20 px-4 py-1.5 text-sm font-medium text-galli-green">
              Parceira do produtor Rural
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
              Tenha uma consultoria{" "}
              <span className="text-galli-yellow">gratuita</span> com um especialista
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80 sm:text-xl">
              Se você tem um imóvel e ainda não realizou o Georreferenciamento, precisa regularizar a
              documentação ou precisa de um levantamento topográfico, podemos te ajudar.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://wa.me/5554984007983?text=Gostaria%20de%20agendar%20uma%20consultoria"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-galli-green px-6 py-3.5 text-base font-semibold text-primary-foreground shadow-lg transition-all hover:bg-galli-green/90 hover:shadow-xl"
              >
                <Phone className="h-5 w-5" />
                Quero consultoria com especialista
              </a>
            </div>
          </div>
          <div className="hidden lg:flex lg:justify-center">
            <div className="relative">
              <div className="h-96 w-80 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm" />
              <div className="absolute -bottom-6 -right-6 rounded-xl bg-galli-yellow p-6 shadow-xl">
                <p className="text-3xl font-extrabold text-foreground">+4 Anos</p>
                <p className="mt-1 text-sm text-foreground/80">
                  de experiência em topografia
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const stats = [
    { value: "+4", label: "Anos de experiência" },
    { value: "100%", label: "Garantia de serviço" },
    { value: "Centenas", label: "Clientes atendidos" },
    { value: "INCRA", label: "Certificação oficial" },
  ];

  return (
    <section className="border-b bg-card py-12">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-3xl font-extrabold text-primary sm:text-4xl">{stat.value}</p>
            <p className="mt-1 text-sm font-medium text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ForWhoSection() {
  const items = [
    {
      icon: Shield,
      title: "Segurança nas divisas",
      description: "Quer dormir tranquilo sabendo que as divisas estão corretas e alinhadas, colocando um ponto final nas brigas com vizinhos ou familiares.",
    },
    {
      icon: FileCheck,
      title: "Georreferenciamento",
      description: "Georreferenciamento do seu imóvel com agilidade, compromisso e cuidado total com a documentação.",
    },
    {
      icon: Clock,
      title: "Crédito e documentação",
      description: "Quer evitar o estresse de ter crédito negado por conta de documentação irregular do imóvel.",
    },
    {
      icon: Ruler,
      title: "Alta tecnologia",
      description: "Busca uma empresa séria, que utiliza equipamentos de alta tecnologia, garantindo máxima precisão e agilidade.",
    },
  ];

  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Para quem é a <span className="text-primary">Galli Topografia</span>?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            A Galli Topografia é para você que possui um imóvel rural ou urbano e busca segurança,
            precisão e tranquilidade na regularização e medição de sua propriedade.
          </p>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="group rounded-xl border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const services = [
    {
      icon: MapPin,
      title: "Georreferenciamento",
      description: "Georreferenciamento de imóveis rurais junto ao INCRA com certificação oficial.",
    },
    {
      icon: FileCheck,
      title: "Regularização de Imóveis",
      description: "Da medição ao registro em cartório, cuidamos de todo o processo documental.",
    },
    {
      icon: Ruler,
      title: "Levantamento Topográfico",
      description: "Levantamentos topográficos com equipamentos de alta tecnologia e precisão.",
    },
  ];

  return (
    <section className="bg-muted py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            As soluções que <span className="text-primary">entregamos</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Somos especialistas em regularização de imóveis e georreferenciamento junto ao INCRA.
          </p>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-xl bg-card p-8 shadow-sm transition-all hover:shadow-xl"
            >
              <div className="absolute right-0 top-0 h-24 w-24 -translate-y-8 translate-x-8 rounded-full bg-primary/5 transition-transform group-hover:scale-150" />
              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <service.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-foreground">{service.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const steps = [
    { number: "01", title: "Agendamento", description: "Entre em contato pelo WhatsApp e agende sua consultoria gratuita." },
    { number: "02", title: "Análise", description: "Visitamos seu imóvel se necessário e analisamos toda sua documentação." },
    { number: "03", title: "Solução", description: "Apresentamos as melhores soluções de forma econômica e prática." },
    { number: "04", title: "Execução", description: "Realizamos todo o trabalho — medição, projeto, processo e acompanhamento." },
  ];

  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Como funciona a <span className="text-galli-green">consultoria gratuita</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Como já atendemos centenas de clientes, temos maestria em analisar documentação e encontrar o melhor caminho para resolver seus problemas.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {i < steps.length - 1 && (
                <div className="absolute right-0 top-10 hidden h-0.5 w-full translate-x-1/2 bg-border lg:block" />
              )}
              <div className="relative rounded-xl border bg-card p-6">
                <span className="text-4xl font-extrabold text-primary/20">{step.number}</span>
                <h3 className="mt-2 text-lg font-bold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <p className="mb-6 text-lg font-medium text-foreground">
            Tudo isso, <span className="font-bold text-galli-green">sem nenhum custo para você!</span>
          </p>
          <a
            href="https://wa.me/5554984007983?text=Gostaria%20de%20agendar%20uma%20consultoria"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-galli-green px-6 py-3.5 text-base font-semibold text-primary-foreground shadow transition-all hover:bg-galli-green/90 hover:shadow-lg"
          >
            <Phone className="h-5 w-5" />
            Agendar minha consultoria gratuita
          </a>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const testimonials = [
    { name: "Cliente Satisfeito", text: "Serviço excelente! Resolveram a documentação do meu imóvel de forma rápida e profissional. Recomendo a todos." },
    { name: "Produtor Rural", text: "A Galli Topografia facilitou todo o processo de georreferenciamento da minha propriedade. Equipe muito competente." },
    { name: "Proprietário", text: "Finalmente consegui regularizar meu imóvel. A consultoria gratuita foi fundamental para eu entender o que precisava ser feito." },
  ];

  return (
    <section className="bg-muted py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            O que as pessoas <span className="text-galli-yellow">falam da gente</span>
          </h2>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {testimonials.map((t, i) => (
            <div key={i} className="rounded-xl border bg-card p-6 shadow-sm">
              <div className="flex gap-1">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="h-5 w-5 text-galli-yellow" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">"{t.text}"</p>
              <p className="mt-4 text-sm font-semibold text-foreground">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const faqs = [
    { q: "Vou precisar pagar alguma coisa na consultoria?", a: "Não! O atendimento executado pelos nossos especialistas é completamente gratuito. Visitamos seu imóvel, sanamos todas as suas dúvidas, analisamos suas documentações e propomos possíveis soluções, tudo sem custo." },
    { q: "É muito caro resolver a situação do meu imóvel?", a: "É muito comum conseguirmos resolver a situação do seu imóvel na própria consultoria. Em muitos casos, a situação é mais simples do que você imagina." },
    { q: "É muito burocrático resolver a situação do meu imóvel?", a: "Nós fazemos todo o trabalho duro para você: medição, projeto, processo, protocolos, correções e acompanhamento. Atualizamos nossos clientes a cada etapa cumprida." },
    { q: "Demora muito tempo pra resolver?", a: "O tempo depende da característica do serviço. No entanto, temos um time preparado para dar atenção ao seu processo desde o primeiro dia, garantindo a conclusão no tempo mais rápido possível." },
    { q: "É 100% seguro resolver com vocês?", a: "Oferecemos um serviço 100% garantido: executamos os serviços ou devolvemos seu dinheiro. Simples assim." },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Dúvidas <span className="text-primary">frequentes</span>
          </h2>
        </div>
        <div className="mt-12 space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="overflow-hidden rounded-xl border bg-card">
              <button
                className="flex w-full items-center justify-between px-6 py-4 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="pr-4 font-semibold text-foreground">{faq.q}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${openIndex === i ? "rotate-180" : ""}`}
                />
              </button>
              {openIndex === i && (
                <div className="border-t px-6 py-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="bg-primary py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-primary-foreground sm:text-4xl">
          Não deixe para depois.
        </h2>
        <p className="mt-4 text-lg text-primary-foreground/80">
          Nossas agendas para consultoria gratuita estão abertas por tempo limitado. Garanta seu atendimento agora.
        </p>
        <a
          href="https://wa.me/5554984007983?text=Gostaria%20de%20agendar%20uma%20consultoria"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-galli-yellow px-8 py-4 text-lg font-bold text-foreground shadow-lg transition-all hover:shadow-xl"
        >
          Quero consultoria com especialista
          <ArrowRight className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
}

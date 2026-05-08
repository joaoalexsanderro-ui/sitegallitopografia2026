import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight, MapPin, FileCheck, Ruler, Shield, Clock,
  CheckCircle, ChevronDown, Phone, Star, Target,
  Award, Handshake, AlertTriangle, ChevronRight
} from "lucide-react";
import { useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import geoImg from "@/assets/geo-section.jpg";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <div>
      <div id="home"><HeroSection /></div>
      <LogoBar />
      <StatsSection />
      <ForWhoSection />
      <DifferentialsSection />
      <GeoSection />
      <div id="servicos"><ServicesSection /></div>
      <div id="como-funciona"><HowItWorksSection /></div>
      <UrgencySection />
      <TeamSection />
      <TestimonialsSection />
      <div id="faq"><FAQSection /></div>
      <div id="contato"><CTASection /></div>
    </div>
  );
}

/* ─── HERO ─── */
function HeroSection() {
  return (
    <section className="relative min-h-[95vh] overflow-hidden flex items-center">
      {/* Background image */}
      <img
        src={heroBg}
        alt=""
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative mx-auto flex w-full max-w-7xl items-center px-4 py-32 sm:px-6 lg:px-8">
        <div className="max-w-2xl">

          <h1 className="mt-8 text-5xl font-black leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl">
            Agende uma{" "}
            <span className="text-[#fcb52f]">consultoria gratuita</span>{" "}
            com um especialista
          </h1>

          <p className="mt-8 text-lg leading-relaxed text-white/80 sm:text-xl">
            Cuidamos de <strong className="text-primary-foreground">todo o processo</strong> — da medição ao registro em cartório — para que você não se preocupe com burocracia.
          </p>

          <div className="mt-8 flex flex-col gap-3 text-sm text-white/70 sm:flex-row sm:gap-6">
            {["Análise gratuita de documentação", "Processo completo até o cartório", "Garantia 100%"].map((t) => (
              <span key={t} className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 shrink-0 text-galli-green" /> {t}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://wa.me/5554984007983?text=Vim%20pelo%20site%20da%20Galli%20Topografia"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-galli-green px-10 py-5 text-lg font-black text-white shadow-[0_20px_50px_rgba(41,172,84,0.3)] transition-all hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(41,172,84,0.4)] active:scale-95"
            >
              <Phone className="h-5 w-5" />
              Quero consultoria gratuita
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Social proof */}
          <div className="mt-12 flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/20 bg-white/10 text-xs font-bold text-white backdrop-blur-md">
                  {["JR", "MS", "AL", "PF"][i - 1]}
                </div>
              ))}
            </div>
            <div>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-[#fcb52f] text-[#fcb52f]" />
                ))}
              </div>
              <p className="text-sm font-medium text-white/80">Centenas de clientes satisfeitos</p>
            </div>
          </div>
        </div>

        {/* Right floating cards */}
        <div className="absolute bottom-12 right-8 hidden flex-col gap-4 lg:flex">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <p className="text-4xl font-black text-white">+5 Anos</p>
            <p className="mt-1 text-sm font-medium text-white/60">de experiência</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <p className="text-4xl font-black text-galli-green">100%</p>
            <p className="mt-1 text-sm font-medium text-white/60">Garantia total</p>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full">
          <path d="M0 60V30C360 0 720 0 1080 30C1260 45 1380 52 1440 55V60H0Z" className="fill-background" />
        </svg>
      </div>
    </section>
  );
}

/* ─── LOGO BAR ─── */
function LogoBar() {
  const cities = [
    "Ibiaçá", "Sananduva", "Getúlio Vargas", "Passo Fundo", "Mato Castelhano",
    "Ciríaco", "Capão Bonito do Sul", "Santo Expedito do Sul", "Tupanci do Sul",
    "Ibiraiaras", "Muitos Capões", "Vacaria", "Lagoa Vermelha", "Marau",
    "Casca", "Paraí", "Nova Araçá", "Serafina Corrêa", "São José do Ouro",
    "São João da Urtiga", "Paim Filho", "Maximiliano de Almeida", "Erechim",
    "Charrua", "Floriano Peixoto", "Vila Maria", "Tapejara", "Sertão",
    "Vila Lângaro", "Estação", "Água Santa", "Coxilha", "Esmeralda", "Pinhal da Serra"
  ];

  return (
    <section className="overflow-hidden border-b bg-background py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-6 text-center text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground/50">
          Atuação no Norte do Rio Grande do Sul
        </p>
        <div className="relative flex overflow-hidden">
          <div className="flex animate-infinite-scroll gap-12 whitespace-nowrap py-2">
            {[...cities, ...cities].map((c, i) => (
              <span key={`${c}-${i}`} className="flex items-center gap-2 text-sm font-semibold text-muted-foreground/80 transition-colors hover:text-primary">
                <MapPin className="h-4 w-4 text-primary/40" />
                {c}
              </span>
            ))}
          </div>
          {/* Gradients for smooth fade */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
        </div>
      </div>
    </section>
  );
}

/* ─── STATS ─── */
function StatsSection() {
  const stats = [
    { value: "+5", suffix: " Anos", label: "de experiência", color: "text-primary" },
    { value: "100", suffix: "%", label: "Garantia de serviço", color: "text-galli-green" },
    { value: "+5.000", suffix: " ha", label: "regularizados", color: "text-galli-yellow" },
    { value: "80", suffix: "%", label: "dos imóveis precisam de regularização", color: "text-primary" },
  ];

  return (
    <section className="bg-background py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="group relative rounded-2xl border bg-card p-6 text-center transition-all hover:border-primary/20 hover:shadow-lg">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <p className={`relative text-4xl font-black ${s.color} sm:text-5xl`}>
                {s.value}<span className="text-2xl sm:text-3xl">{s.suffix}</span>
              </p>
              <p className="relative mt-2 text-sm font-medium text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FOR WHO ─── */
function ForWhoSection() {
  const items = [
    { icon: Shield, title: "Segurança nas divisas", description: "Quer dormir tranquilo sabendo que as divisas estão corretas, colocando um ponto final nas brigas com vizinhos.", color: "from-primary to-primary/80" },
    { icon: FileCheck, title: "Regularização completa", description: "Precisa regularizar a documentação do imóvel para venda, inventário, financiamento ou sucessão familiar.", color: "from-galli-green to-galli-green/80" },
    { icon: AlertTriangle, title: "Crédito e documentação", description: "Quer evitar ter crédito negado por documentação irregular. Imóvel regularizado facilita negociações.", color: "from-galli-yellow to-galli-yellow/80" },
    { icon: Ruler, title: "Precisão tecnológica", description: "Busca uma empresa com equipamentos e softwares modernos, garantindo máxima precisão e agilidade.", color: "from-primary to-primary/80" },
  ];

  return (
    <section className="bg-muted/50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="mt-4 text-4xl font-black tracking-tight text-foreground sm:text-5xl">
            Para quem é a Galli?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Para proprietários de imóveis rurais e urbanos que buscam segurança e tranquilidade na regularização de suas propriedades.
          </p>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div key={item.title} className="group relative overflow-hidden rounded-2xl border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className={`absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br ${item.color} opacity-10 transition-all duration-300 group-hover:scale-[3]`} />
              <div className="relative">
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} text-primary-foreground shadow-lg`}>
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── DIFFERENTIALS ─── */
function DifferentialsSection() {
  const diffs = [
    { icon: Handshake, title: "Processo completo, do início ao fim", description: "Cuidamos de tudo: coleta de assinaturas dos vizinhos, protocolo em cartório, CAR, CCIR e todos os documentos necessários." },
    { icon: FileCheck, title: "Análise gratuita de documentação", description: "Antes de fechar qualquer serviço, oferecemos uma análise gratuita e sem compromisso para você entender a situação do seu imóvel." },
    { icon: Award, title: "Garantia total — ou dinheiro de volta", description: "Se houver erro por nossa parte, assumimos a responsabilidade e arcamos com os custos. Simples assim." },
    { icon: Target, title: "Equipamentos de alta tecnologia", description: "Softwares modernos e equipamentos precisos garantem exatidão nos levantamentos, com constante evolução." },
  ];

  return (
    <section className="relative overflow-hidden bg-background py-24">
      {/* Decorative bg */}
      <div className="absolute left-0 top-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 translate-x-1/2 translate-y-1/2 rounded-full bg-galli-green/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-foreground sm:text-5xl">
              Por que escolher a{" "}
              <span className="text-[#2c67a4]">Galli</span>?
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Diferente de outras empresas que entregam apenas o projeto básico, nós cuidamos de 
              <strong className="text-foreground"> todo o processo</strong> com segurança, transparência e compromisso total.
            </p>
            <a
              href="https://wa.me/5554984007983?text=Vim%20pelo%20site%20da%20Galli%20Topografia"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/25"
            >
              <Phone className="h-5 w-5" />
              Falar com especialista
            </a>
          </div>
          <div className="space-y-4">
            {diffs.map((d, i) => (
              <div key={d.title} className="group flex gap-5 rounded-2xl border bg-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-lg">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-galli-green/10 text-primary transition-colors group-hover:from-primary group-hover:to-primary group-hover:text-primary-foreground">
                  <d.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">{d.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{d.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── GEO SECTION ─── */
function GeoSection() {
  const benefits = [
    "Segurança jurídica do imóvel",
    "Definição precisa das divisas",
    "Marcos físicos instalados no terreno",
    "Impede sobreposições e conflitos futuros",
    "Imóvel apto para venda, inventário ou financiamento",
    "Maior valorização no mercado",
  ];

  const operations = ["Compra e venda", "Doação", "Inventários", "Desmembramentos", "Unificações", "Financiamentos"];

  return (
    <section className="relative overflow-hidden">
      <div className="grid lg:grid-cols-2">
        {/* Image side */}
        <div className="relative min-h-[400px] lg:min-h-[700px]">
          <img src={geoImg} alt="Vista aérea de propriedade rural georreferenciada" loading="lazy" width={1280} height={720} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-primary/20 lg:bg-gradient-to-l lg:from-primary/30 lg:to-transparent" />
          <div className="absolute bottom-6 left-6 rounded-xl bg-primary/90 p-5 backdrop-blur-sm">
            <p className="text-3xl font-black text-galli-yellow">80%</p>
            <p className="text-sm text-primary-foreground/80">dos imóveis precisam de regularização</p>
          </div>
        </div>

        {/* Content side */}
        <div className="bg-primary px-6 py-16 text-primary-foreground sm:px-12 lg:px-16 lg:py-24">
          <span className="inline-flex items-center rounded-full bg-galli-yellow/20 px-4 py-1.5 text-sm font-bold text-galli-yellow">
            ⭐ Serviço Principal
          </span>
          <h2 className="mt-6 text-4xl font-black leading-tight sm:text-5xl">
            Georreferenciamento de Imóveis Rurais
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-primary-foreground/75">
            <strong className="text-primary-foreground">Obrigatório para todos os imóveis rurais</strong> do Brasil, com prazo até{" "}
            <span className="rounded bg-galli-yellow/20 px-2 py-0.5 font-bold text-galli-yellow">2029</span>.
          </p>

          <p className="mt-4 text-sm text-primary-foreground/60">Necessário para:</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {operations.map((op) => (
              <span key={op} className="rounded-full border border-primary-foreground/15 bg-primary-foreground/5 px-3 py-1.5 text-sm font-medium backdrop-blur-sm">
                {op}
              </span>
            ))}
          </div>

          <div className="mt-8 space-y-3">
            {benefits.map((b) => (
              <div key={b} className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-galli-green" />
                <span className="text-primary-foreground/85">{b}</span>
              </div>
            ))}
          </div>

          <a
            href="https://wa.me/5554984007983?text=Vim%20pelo%20site%20da%20Galli%20Topografia"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2 rounded-xl bg-galli-green px-7 py-3.5 font-bold text-primary-foreground shadow-lg shadow-galli-green/25 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-galli-green/30"
          >
            <Phone className="h-5 w-5" />
            Saiba se seu imóvel precisa de GEO
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── SERVICES ─── */
function ServicesSection() {
  const services = [
    { icon: MapPin, title: "Georreferenciamento", description: "Georreferenciamento de imóveis rurais com certificação oficial junto ao INCRA. Do levantamento técnico até o acompanhamento no Registro de Imóveis.", badge: "Principal" },
    { icon: FileCheck, title: "Regularização de Imóveis", description: "Cuidamos de toda a documentação do imóvel rural ou urbano, incluindo CAR, CCIR, inventários, retificações e acompanhamento em cartório.", badge: null },
    { icon: Ruler, title: "Levantamento Topográfico", description: "Medições precisas para áreas rurais e urbanas com equipamentos de alta tecnologia, garantindo agilidade e confiabilidade nos projetos.", badge: null },
    { icon: Target, title: "Locação de Obras e Terraplenagem", description: "Locação de estacas, pilares e acompanhamento técnico para obras e movimentação de terra com máxima precisão.", badge: null },
    { icon: FileCheck, title: "Desmembramento e Loteamento", description: "Projetos completos para divisão de áreas rurais e urbanas, criação de loteamentos e aprovação junto aos órgãos responsáveis.", badge: null },
    { icon: MapPin, title: "Mapeamento Aéreo com Drone", description: "Captura aérea de alta precisão para acompanhamento de áreas rurais e urbanas, geração de mapas, ortofotos e análise detalhada do terreno.", badge: null },
  ];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="mt-4 text-4xl font-black tracking-tight text-foreground sm:text-5xl">
            Nossas soluções
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Especialistas em regularização de imóveis e georreferenciamento junto ao INCRA.
          </p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="group relative overflow-hidden rounded-3xl border bg-card p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              {s.badge && (
                <span className="absolute right-4 top-4 rounded-full bg-galli-yellow px-3 py-1 text-xs font-bold text-foreground">
                  {s.badge}
                </span>
              )}
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-primary/5 to-galli-green/5 transition-transform duration-500 group-hover:scale-[4]" />
              <div className="relative">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-lg shadow-primary/20">
                  <s.icon className="h-8 w-8" />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-foreground">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{s.description}</p>
                <a
                  href="https://wa.me/5554984007983"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-galli-green"
                >
                  Saiba mais <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── HOW IT WORKS ─── */
function HowItWorksSection() {
  const steps = [
    { number: "01", title: "Agendamento", description: "Entre em contato pelo WhatsApp e agende sua consultoria gratuita.", color: "bg-[#2c67a4]" },
    { number: "02", title: "Análise gratuita", description: "Visitamos seu imóvel, analisamos documentação e tiramos suas dúvidas — sem custo.", color: "bg-[#2c67a4]" },
    { number: "03", title: "Proposta", description: "Apresentamos as melhores soluções de forma econômica e prática.", color: "bg-[#2c67a4]" },
    { number: "04", title: "Execução completa", description: "Medição, projeto, assinaturas, protocolo em cartório e acompanhamento.", color: "bg-[#2c67a4]" },
  ];

  return (
    <section className="relative overflow-hidden bg-background py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,var(--color-primary)/0.03,transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="mt-4 text-4xl font-black tracking-tight text-foreground sm:text-5xl">
            Como funciona
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Tudo isso, <strong className="text-black">sem nenhum custo</strong> para você na consultoria!
          </p>
        </div>

        <div className="relative mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Connector line */}
          <div className="absolute left-0 right-0 top-16 hidden h-0.5 bg-gradient-to-r from-primary/20 via-galli-green/20 to-galli-yellow/20 lg:block" />

          {steps.map((step) => (
            <div key={step.number} className="group relative">
              <div className="rounded-2xl border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${step.color} text-lg font-black text-primary-foreground shadow-lg`}>
                  {step.number}
                </div>
                <h3 className="mt-5 text-xl font-bold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href="https://wa.me/5554984007983?text=Gostaria%20de%20agendar%20uma%20consultoria"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-xl bg-galli-green px-8 py-4 text-base font-bold text-primary-foreground shadow-lg shadow-galli-green/25 transition-all hover:-translate-y-0.5 hover:shadow-xl"
          >
            <Phone className="h-5 w-5" />
            Agendar minha consultoria gratuita
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── URGENCY ─── */
function UrgencySection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 border-y border-border/50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(0,0,0,0.02),transparent_60%)]" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-black/5">
          <Clock className="h-8 w-8 text-foreground" />
        </div>
        <h2 className="mt-6 text-4xl font-black text-foreground sm:text-5xl">
          Mas você precisa correr...
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-foreground/75">
          Nossas agendas ficam frequentemente <strong className="text-foreground">fechadas</strong> para esse atendimento especial. 
          A disponibilidade é limitada.
        </p>
        <p className="mt-4 text-2xl font-black text-foreground">
          Garanta seu atendimento agora.
        </p>
        <a
          href="https://wa.me/5554984007983?text=Gostaria%20de%20agendar%20uma%20consultoria"
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-[#29ac54] px-8 py-4 text-lg font-bold text-white shadow-xl shadow-[#29ac54]/20 transition-all hover:-translate-y-1 hover:shadow-2xl"
        >
          Quero consultoria com especialista
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  );
}

/* ─── EQUIPE ─── */
function TeamSection() {
  const team = [
    { name: "Fabiano Marcos Galli", role: "Fundador Resp. Técnico", photo: "https://rmetppilvfrxosvxzhgj.supabase.co/storage/v1/object/public/message-attachments/df909724-d1f2-4377-897e-dfbbd9509455/1778162397719_p4ptvs_equipe_Galli__1_.png" },
    { name: "Talita Nunes Galli", role: "Administrativo", photo: "https://rmetppilvfrxosvxzhgj.supabase.co/storage/v1/object/public/message-attachments/df909724-d1f2-4377-897e-dfbbd9509455/1778200540510_1f1fvp_4.png" },
    { name: "Eduardo Cichelero", role: "Setor de Projetos", photo: "https://rmetppilvfrxosvxzhgj.supabase.co/storage/v1/object/public/message-attachments/df909724-d1f2-4377-897e-dfbbd9509455/1778200599127_o9kuon_2.png" },
    { name: "Deivid Campos", role: "Técnico de Campo", photo: "https://rmetppilvfrxosvxzhgj.supabase.co/storage/v1/object/public/message-attachments/df909724-d1f2-4377-897e-dfbbd9509455/1778200655689_kgo5b9_1.png" },
  ];

  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="mt-4 text-4xl font-black tracking-tight text-foreground sm:text-5xl">
            Conheça quem cuida do seu imóvel
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Um time especializado, comprometido e pronto para garantir a regularização da sua propriedade com excelência.
          </p>
        </div>

        <div className="mt-16 space-y-12">
          {/* Foto da Equipe Completa */}
          <div className="relative overflow-hidden rounded-3xl border bg-card shadow-2xl transition-all duration-300 hover:shadow-primary/5">
            <div className="aspect-[21/9] w-full bg-muted animate-pulse">
              <img
                src="https://rmetppilvfrxosvxzhgj.supabase.co/storage/v1/object/public/message-attachments/df909724-d1f2-4377-897e-dfbbd9509455/1778162893488_gm62k9_ChatGPT_Image_7_05_2026__11_07_50.png"
                alt="Equipe Galli Topografia"
                className="h-full w-full object-cover transition-opacity duration-500"
                onLoad={(e) => (e.currentTarget.parentElement!.classList.remove('animate-pulse'))}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-xl font-bold text-white">Nosso Time Completo</p>
              <p className="text-sm text-white/80">Unidos para oferecer o melhor serviço de topografia e regularização.</p>
            </div>
          </div>

          {/* Grid de Membros */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div
                key={member.name}
                className="group relative overflow-hidden rounded-2xl border bg-card p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl"
              >
                <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-primary/5 to-transparent" />
                <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-full border-4 border-background bg-muted shadow-lg ring-2 ring-primary/10 transition-transform duration-300 group-hover:scale-105">
                  <img
                    src={member.photo}
                    alt={`Foto de ${member.name}`}
                    width={320}
                    height={320}
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = `https://avatar.vercel.sh/${member.name}?size=320&text=${member.name.charAt(0)}`;
                    }}
                  />
                </div>
                <h3 className="relative mt-6 text-lg font-bold text-foreground">{member.name}</h3>
                <p className="relative mt-1 text-sm font-medium text-primary">{member.role}</p>
                <div className="relative mt-4 flex justify-center">
                  <span className="h-1 w-12 rounded-full bg-gradient-to-r from-primary to-galli-green" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── TESTIMONIALS ─── */
function TestimonialsSection() {
  const testimonials = [
    { name: "Érica Lusa Favretto", text: "Ótimo trabalho, pessoal bem atencioso e dedicado!" },
    { name: "Fernando Bordignon", text: "Serviço de topografia excelente e super preciso! Atendimento ágil, profissionalismo do início ao fim!" },
    { name: "Fabio André Favreto", text: "Equipe de profissionais excelentes, trabalho ótimo." },
    { name: "Vanessa Bernieri", text: "O melhor atendimento, uma empresa que transmite credibilidade, seriedade e competência." },
    { name: "Jonas Anael Baptista Nunes", text: "Ótima empresa, profissionais de muita competência! Cumpriram tudo o que prometeram." },
    { name: "Cristiano Manfro", text: "Muito bom atendimento com agilidade, profissionais de ótima qualidade." },
    { name: "Guilherme Bernieri", text: "Excelente empresa, ótimo atendimento e muito prestativo, indicarei sempre que possível!" },
    { name: "Atenon Net", text: "Super indico, muito atencioso e comprometido com o que faz." },
    { name: "Jorge Cival Baptista Nunes", text: "Serviço de qualidade com profissional capacitado, cumprindo os prazos combinados." },
  ];

  return (
    <section className="bg-[#f8f9fa] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-black tracking-tight text-foreground sm:text-5xl">
            O que nossos clientes falam da Galli
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Mais segurança, agilidade e confiança para regularizar seu imóvel.
          </p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div key={i} className="group relative rounded-2xl border border-white/50 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-base leading-relaxed text-muted-foreground italic mb-6">"{t.text}"</p>
              <div className="mt-auto flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2d67a8] text-sm font-bold text-white uppercase">
                  {t.name.charAt(0)}
                </div>
                <p className="text-sm font-bold text-foreground">{t.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ ─── */
function FAQSection() {
  const faqs = [
    { q: "Vou precisar pagar alguma coisa na consultoria?", a: "Não! O atendimento é completamente gratuito. Visitamos seu imóvel, analisamos documentações e propomos soluções, tudo sem custo para você." },
    { q: "É muito caro resolver a situação do meu imóvel?", a: "É muito comum resolvermos na própria consultoria. Em muitos casos, a situação é mais simples do que você imagina. Os valores variam conforme tamanho da área." },
    { q: "É muito burocrático?", a: "Nós fazemos todo o trabalho duro: medição, projeto, coleta de assinaturas dos vizinhos, protocolo em cartório, correções e acompanhamento. Atualizamos você a cada etapa." },
    { q: "Demora muito tempo pra resolver?", a: "O tempo depende do serviço, mas temos um time que acompanha seu processo desde o primeiro dia, garantindo a conclusão no tempo mais rápido possível." },
    { q: "É 100% seguro resolver com vocês?", a: "Oferecemos garantia total: executamos os serviços ou devolvemos seu dinheiro. Caso haja erro, assumimos a responsabilidade." },
    { q: "O georreferenciamento é obrigatório?", a: "Sim! Obrigatório para todos os imóveis rurais do Brasil, com prazo até 2029. Necessário para compra, venda, inventários, financiamentos e outras transações." },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            FAQ
          </span>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-foreground sm:text-5xl">
            Dúvidas frequentes
          </h2>
        </div>
        <div className="mt-12 space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="group overflow-hidden rounded-2xl border bg-card transition-all hover:border-primary/20 hover:shadow-sm">
              <button
                className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-muted/30"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="pr-4 font-bold text-foreground">{faq.q}</span>
                <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all ${openIndex === i ? "rotate-180 border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground"}`}>
                  <ChevronDown className="h-4 w-4" />
                </div>
              </button>
              {openIndex === i && (
                <div className="border-t bg-muted/20 px-6 py-5">
                  <p className="leading-relaxed text-muted-foreground">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FINAL CTA ─── */
function CTASection() {
  return (
    <section className="relative overflow-hidden bg-primary py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.08),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,var(--color-galli-green)/0.1,transparent_50%)]" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-4xl font-black leading-tight text-primary-foreground sm:text-5xl">
          Regularize seu imóvel com quem cuida de{" "}
          <span className="text-galli-yellow">tudo</span> para você
        </h2>
        <p className="mt-6 text-lg text-primary-foreground/70">
          Atendemos produtores rurais e proprietários no norte do Rio Grande do Sul.
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-2 text-sm text-primary-foreground/40">
          {["Tapejara", "Sertão", "Vila Lângaro", "Estação", "Água Santa", "Coxilha", "e região"].map((c, i) => (
            <span key={c}>{i > 0 && "•"} {c}</span>
          ))}
        </div>
        <a
          href="https://wa.me/5554984007983?text=Vim%20pelo%20site%20da%20Galli%20Topografia"
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-10 inline-flex items-center gap-3 rounded-2xl bg-galli-yellow px-10 py-5 text-xl font-black text-foreground shadow-xl shadow-galli-yellow/20 transition-all hover:-translate-y-1 hover:shadow-2xl"
        >
          Quero consultoria gratuita
          <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight, MapPin, FileCheck, Ruler, Shield, Clock, Users,
  CheckCircle, ChevronDown, Phone, Star, Target, Landmark,
  TrendingUp, Award, Handshake, AlertTriangle
} from "lucide-react";
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
      <DifferentialsSection />
      <GeoSection />
      <ServicesSection />
      <HowItWorksSection />
      <UrgencySection />
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
              Parceira do Produtor Rural
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
              Consultoria{" "}
              <span className="text-galli-yellow">gratuita</span> para regularizar seu imóvel
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80 sm:text-xl">
              Somos especialistas em georreferenciamento, regularização de imóveis e levantamento topográfico. 
              Cuidamos de <strong className="text-primary-foreground">todo o processo</strong> — da medição ao registro em cartório — para que você não se preocupe com burocracia.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-primary-foreground/70">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-galli-green" /> Análise gratuita de documentação
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-galli-green" /> Processo completo até o cartório
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-galli-green" /> Garantia 100% ou dinheiro de volta
              </span>
            </div>
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
              <div className="flex h-96 w-80 items-center justify-center rounded-2xl bg-primary-foreground/10 backdrop-blur-sm">
                <div className="text-center text-primary-foreground/40">
                  <Ruler className="mx-auto h-16 w-16" />
                  <p className="mt-2 text-sm font-medium">Precisão e Tecnologia</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 rounded-xl bg-galli-yellow p-6 shadow-xl">
                <p className="text-3xl font-extrabold text-foreground">+4 Anos</p>
                <p className="mt-1 text-sm text-foreground/80">de experiência em topografia</p>
              </div>
              <div className="absolute -left-6 top-8 rounded-xl bg-galli-green p-4 shadow-xl">
                <p className="text-xl font-extrabold text-primary-foreground">100%</p>
                <p className="text-xs text-primary-foreground/80">Garantia</p>
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
    { value: "+4 Anos", label: "de experiência em topografia" },
    { value: "100%", label: "Garantia de serviço" },
    { value: "Centenas", label: "de clientes atendidos na região" },
    { value: "~85%", label: "dos imóveis rurais ainda precisam de GEO" },
  ];

  return (
    <section className="border-b bg-card py-12">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-2xl font-extrabold text-primary sm:text-3xl">{stat.value}</p>
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
      description: "Quer dormir tranquilo sabendo que as divisas estão corretas, colocando um ponto final nas brigas com vizinhos ou familiares.",
    },
    {
      icon: FileCheck,
      title: "Regularização completa",
      description: "Precisa regularizar toda a documentação do imóvel para venda, inventário, financiamento ou sucessão familiar.",
    },
    {
      icon: AlertTriangle,
      title: "Crédito e documentação",
      description: "Quer evitar ter crédito negado por documentação irregular. Imóvel regularizado facilita financiamentos e negociações.",
    },
    {
      icon: Ruler,
      title: "Precisão tecnológica",
      description: "Busca uma empresa que utiliza equipamentos e softwares modernos, garantindo máxima precisão e agilidade nas medições.",
    },
  ];

  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Para quem é a <span className="text-primary">Galli Topografia</span>?
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            Para produtores rurais, proprietários de imóveis, advogados, corretores e engenheiros que buscam 
            segurança, precisão e tranquilidade na regularização de propriedades.
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

function DifferentialsSection() {
  const diffs = [
    {
      icon: Handshake,
      title: "Processo completo, do início ao fim",
      description: "Diferente de outras empresas que entregam apenas o projeto básico, nós cuidamos de tudo: coleta de assinaturas dos vizinhos, protocolo em cartório, organização de CAR, CCIR e todos os documentos necessários.",
    },
    {
      icon: FileCheck,
      title: "Análise gratuita de documentação",
      description: "Antes de fechar qualquer serviço, oferecemos uma análise gratuita da documentação do seu imóvel, sem compromisso, para que você entenda a situação e o que será necessário.",
    },
    {
      icon: Award,
      title: "Garantia total",
      description: "Caso ocorra algum erro por nossa parte, assumimos a responsabilidade e arcamos com os custos. É simples: ou executamos o serviço, ou devolvemos seu dinheiro.",
    },
    {
      icon: Target,
      title: "Equipamentos de alta tecnologia",
      description: "Utilizamos equipamentos e softwares modernos e precisos, garantindo maior exatidão nos levantamentos e projetos, com constante evolução nos processos.",
    },
  ];

  return (
    <section className="bg-muted py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Por que escolher a{" "}
              <span className="text-primary">Galli Topografia</span>?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Muitas empresas de topografia realizam apenas o projeto básico e deixam que o cliente resolva 
              as etapas seguintes sozinho. Na Galli, trabalhamos de forma diferente — cuidamos de <strong>todo o processo</strong>, 
              com segurança, transparência e compromisso.
            </p>
          </div>
          <div className="space-y-6">
            {diffs.map((d) => (
              <div key={d.title} className="flex gap-4 rounded-xl border bg-card p-5 transition-shadow hover:shadow-md">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <d.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{d.title}</h3>
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

function GeoSection() {
  const benefits = [
    "Segurança jurídica do imóvel",
    "Definição precisa das divisas",
    "Instalação de marcos físicos no terreno",
    "Alinhamento correto com vizinhos",
    "Registro das coordenadas no sistema oficial",
    "Impede sobreposições e conflitos futuros",
    "Imóvel apto para venda, inventário ou financiamento",
    "Maior valorização do imóvel no mercado",
  ];

  const operations = [
    "Compra e venda",
    "Doação",
    "Inventários",
    "Desmembramentos",
    "Unificações de áreas",
    "Retificações de matrícula",
    "Financiamentos bancários",
  ];

  return (
    <section className="bg-primary py-20 text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center rounded-full bg-galli-yellow/20 px-4 py-1.5 text-sm font-semibold text-galli-yellow">
              Serviço Principal
            </span>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Georreferenciamento de Imóveis Rurais
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-primary-foreground/80">
              O georreferenciamento é <strong className="text-primary-foreground">obrigatório para todos os imóveis rurais do Brasil</strong>, 
              com prazo até <strong className="text-primary-foreground">2029</strong>. Na nossa região, estima-se que apenas 
              <strong className="text-galli-yellow"> cerca de 15% dos imóveis</strong> já realizaram o processo.
            </p>
            <p className="mt-4 text-primary-foreground/80">
              Esse cadastro é obrigatório para praticamente todas as transações imobiliárias rurais:
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {operations.map((op) => (
                <span key={op} className="rounded-full bg-primary-foreground/10 px-3 py-1 text-sm">
                  {op}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold">Benefícios do Georreferenciamento</h3>
            <div className="mt-6 space-y-3">
              {benefits.map((b) => (
                <div key={b} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-galli-green" />
                  <span className="text-primary-foreground/90">{b}</span>
                </div>
              ))}
            </div>
            <a
              href="https://wa.me/5554984007983?text=Gostaria%20de%20saber%20mais%20sobre%20georreferenciamento"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-galli-green px-6 py-3 font-semibold text-primary-foreground transition-all hover:bg-galli-green/90"
            >
              <Phone className="h-5 w-5" />
              Saiba se seu imóvel precisa de GEO
            </a>
          </div>
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
      description: "Georreferenciamento de imóveis rurais junto ao INCRA com certificação oficial. Cuidamos de todo o processo até o registro.",
    },
    {
      icon: FileCheck,
      title: "Regularização de Imóveis",
      description: "Da medição ao registro em cartório — organização documental, coleta de assinaturas, CAR, CCIR e acompanhamento completo.",
    },
    {
      icon: Ruler,
      title: "Levantamento Topográfico",
      description: "Levantamentos topográficos de áreas rurais e urbanas com equipamentos de alta precisão. Medição e curvas de nível.",
    },
  ];

  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            As soluções que <span className="text-primary">entregamos</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            Somos especialistas em regularização de imóveis e georreferenciamento junto ao INCRA. 
            Mesmo com menos de um ano em Tapejara, já atendemos centenas de clientes na região.
          </p>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-xl border bg-card p-8 shadow-sm transition-all hover:shadow-xl"
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
    { number: "01", title: "Agendamento", description: "Entre em contato pelo WhatsApp e agende sua consultoria gratuita com um especialista." },
    { number: "02", title: "Análise gratuita", description: "Visitamos seu imóvel se necessário, analisamos toda documentação e tiramos suas dúvidas — sem custo." },
    { number: "03", title: "Proposta de solução", description: "Apresentamos as melhores soluções de forma econômica e prática para a sua situação." },
    { number: "04", title: "Execução completa", description: "Medição, projeto, coleta de assinaturas, protocolo em cartório e acompanhamento até a conclusão." },
  ];

  return (
    <section className="bg-muted py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Como funciona a <span className="text-galli-green">consultoria gratuita</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            Temos maestria em analisar documentação e encontrar o melhor caminho para resolver problemas 
            de forma econômica e prática. Tudo isso, sem nenhum custo para você!
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
            Você terá a oportunidade de conversar com um especialista e ficar entendido do seu caso{" "}
            <span className="font-bold text-galli-green">sem pagar nada!</span>
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

function UrgencySection() {
  return (
    <section className="bg-galli-yellow py-16">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Clock className="mx-auto h-12 w-12 text-foreground/80" />
        <h2 className="mt-4 text-3xl font-extrabold text-foreground sm:text-4xl">
          Mas você precisa correr...
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-foreground/80">
          Nossas agendas ficam frequentemente <strong>fechadas</strong> para esse atendimento especial. 
          Conseguimos reabrir as consultorias por alguns dias, mas a procura costuma lotar rapidamente.
        </p>
        <p className="mt-4 text-xl font-bold text-foreground">
          Não deixe para depois. Garanta seu atendimento agora.
        </p>
        <a
          href="https://wa.me/5554984007983?text=Gostaria%20de%20agendar%20uma%20consultoria"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-lg font-bold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl"
        >
          Quero consultoria com especialista
          <ArrowRight className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const testimonials = [
    { name: "Produtor Rural — Sertão", text: "A Galli cuidou de tudo! Desde a medição até o registro no cartório. Não precisei me preocupar com nenhuma burocracia. Recomendo de olhos fechados." },
    { name: "Proprietário — Vila Lângaro", text: "Finalmente regularizei meu imóvel. A consultoria gratuita foi fundamental para entender o que precisava ser feito. Equipe muito competente e atenciosa." },
    { name: "Produtor Rural — Estação", text: "Serviço excelente! Resolveram a documentação de duas áreas minhas de forma rápida e profissional. Inclusive voltei para resolver mais uma propriedade." },
  ];

  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            O que as pessoas <span className="text-galli-yellow">falam da gente</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Clientes que voltam, indicam nosso trabalho e muitas vezes passam aqui só para tomar um chimarrão.
          </p>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {testimonials.map((t, i) => (
            <div key={i} className="rounded-xl border bg-card p-6 shadow-sm">
              <div className="flex gap-1">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-5 w-5 fill-galli-yellow text-galli-yellow" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground italic">"{t.text}"</p>
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
    { q: "Vou precisar pagar alguma coisa na consultoria?", a: "Não! O atendimento executado pelos nossos especialistas é completamente gratuito. Visitamos seu imóvel, sanamos todas as suas dúvidas, analisamos suas documentações e propomos possíveis soluções, tudo sem custo para você." },
    { q: "É muito caro resolver a situação do meu imóvel?", a: "É muito comum conseguirmos resolver a situação do seu imóvel na própria consultoria. Em muitos casos, a situação é mais simples do que você imagina. Os valores variam de acordo com o tamanho da área e a quantidade de imóveis." },
    { q: "É muito burocrático resolver a situação do meu imóvel?", a: "Todas já sabem das burocracias que envolvem esses processos, mas nós fazemos todo o trabalho duro para você: medição, projeto, processo, protocolos, coleta de assinaturas dos vizinhos, correções e acompanhamento. Atualizamos nossos clientes a cada etapa cumprida." },
    { q: "Demora muito tempo pra resolver?", a: "O tempo depende da característica do serviço. No entanto, temos um time preparado para dar atenção ao seu processo desde o primeiro dia, garantindo a conclusão no tempo mais rápido possível." },
    { q: "É 100% seguro resolver com vocês?", a: "Oferecemos um serviço 100% garantido: é simples, ou executamos os serviços, ou o seu dinheiro de volta. Caso ocorra algum erro por nossa parte, assumimos a responsabilidade e arcamos com os custos necessários." },
    { q: "O georreferenciamento é obrigatório?", a: "Sim! O georreferenciamento passou a ser obrigatório para todos os imóveis rurais do Brasil, com prazo até 2029. Ele é necessário para compra e venda, doação, inventários, desmembramentos, financiamentos e outras transações imobiliárias." },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-muted py-20">
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
          Regularize seu imóvel com quem cuida de tudo para você
        </h2>
        <p className="mt-4 text-lg text-primary-foreground/80">
          Atendemos produtores rurais e proprietários de imóveis no norte do Rio Grande do Sul. 
          Agende sua consultoria gratuita e entenda a situação do seu imóvel sem pagar nada.
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-2 text-sm text-primary-foreground/60">
          <span>Tapejara</span><span>•</span>
          <span>Sertão</span><span>•</span>
          <span>Vila Lângaro</span><span>•</span>
          <span>Estação</span><span>•</span>
          <span>Água Santa</span><span>•</span>
          <span>Coxilha</span><span>•</span>
          <span>e região</span>
        </div>
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

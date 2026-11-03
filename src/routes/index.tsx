import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Dribbble,
  Download,
  Instagram,
  Linkedin,
  AppWindow,
  MonitorSmartphone,
  Laptop,
} from "lucide-react";
import greetingBox from "@/assets/greeting-box.png";
import greenZigzag from "@/assets/green-zigzag.png";
import mWaveLogo from "@/assets/m-wave-logo.png.asset.json";
import logoMark from "@/assets/logo-mark.png";
import designIcon from "@/assets/design-creative-icon.png";
import standardReserveImg from "@/assets/project-standard-reserve.png";
import carelinkImg from "@/assets/project-carelink.png";
import escapeImg from "@/assets/project-escape.png";
import vibeImg from "@/assets/project-vibe.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Peter Tech | Software Developer" },
      {
        name: "description",
        content:
          "Portfolio of Peter Tech — a software developer building web and mobile apps, delivered on time and within scope.",
      },
      { property: "og:title", content: "Peter Tech | Software Developer" },
      {
        property: "og:description",
        content:
          "Software developer building web and mobile apps, delivered on time and within scope.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Peter Tech | Software Developer" },
      {
        name: "twitter:description",
        content:
          "Software developer building web and mobile apps, delivered on time and within scope.",
      },
    ],
  }),
  component: Index,
});

const scrollTo = (id: string) => (e: MouseEvent) => {
  e.preventDefault();
  if (id === "top") window.scrollTo({ top: 0, behavior: "smooth" });
  else document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

function Logo() {
  return (
    <a href="#" className="flex items-center gap-3">
      <img src={logoMark} alt="" aria-hidden="true" className="h-11 w-auto" />
      <span className="text-xl font-semibold tracking-tight text-ink">Peter Tech</span>
    </a>
  );
}

function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-5 lg:px-16">
      <Logo />
      <nav className="hidden items-center gap-9 text-sm font-medium text-ink/60 md:flex">
        <a
          href="#"
          onClick={scrollTo("top")}
          className="flex items-center gap-2 font-semibold text-ink"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-brand" />
          Home
        </a>
        <a href="#services" onClick={scrollTo("services")} className="transition-colors hover:text-ink">
          Services
        </a>
        <a href="#projects" onClick={scrollTo("projects")} className="transition-colors hover:text-ink">
          Projects
        </a>
        <a href="#contact" onClick={scrollTo("contact")} className="transition-colors hover:text-ink">
          Contact
        </a>
      </nav>
    </header>
  );
}


function ScrollBadge() {
  return (
    <div className="absolute -left-32 top-[240px] z-30 hidden h-28 w-28 lg:block">
      <svg
        viewBox="0 0 100 100"
        className="h-full w-full animate-spin-slow text-ink"
        aria-hidden="true"
      >
        <defs>
          <path
            id="scroll-circle-path"
            d="M50 50 m-36 0 a36 36 0 1 1 72 0 a36 36 0 1 1 -72 0"
          />
        </defs>
        <text className="fill-current text-[8px] font-medium tracking-[0.1em]">
          <textPath href="#scroll-circle-path">Scroll down - explore more about me •</textPath>
        </text>
      </svg>
      <ArrowDown className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 text-ink" />
    </div>
  );
}

function HeroCard() {
  const chips = [
    { label: "React", cls: "-right-6 top-6 rotate-[6deg]" },
    { label: "TypeScript", cls: "-right-8 top-[46%] -rotate-[5deg]" },
    { label: "Web3", cls: "-left-6 bottom-24 rotate-[-6deg]" },
  ];
  return (
    <div className="relative flex h-[440px] w-full flex-col bg-white ring-1 ring-ink">
      {/* window bar */}
      <div className="flex items-center gap-2 border-b border-ink/10 px-5 py-3.5">
        <span className="h-2.5 w-2.5 rounded-full bg-ink/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-brand" />
        <span className="ml-3 text-xs font-medium text-ink/40">peter.ts</span>
      </div>

      {/* code */}
      <pre className="flex-1 overflow-hidden px-6 py-6 font-mono text-[13px] leading-[1.9] text-ink/70">
        <code>
          <span className="text-ink/40">const</span> <span className="text-ink">peter</span> = {"{"}
          {"\n"}
          {"  "}role: <span className="text-brand">"Software Developer"</span>,
          {"\n"}
          {"  "}builds: [<span className="text-brand">"web"</span>,{" "}
          <span className="text-brand">"mobile"</span>],
          {"\n"}
          {"  "}delivery: <span className="text-brand">"on time"</span>,
          {"\n"}
          {"  "}scope: <span className="text-brand">"respected"</span>,
          {"\n"}
          {"  "}available: <span className="text-ink">true</span>,
          {"\n"}
          {"}"};
          {"\n\n"}
          <span className="text-ink/40">await</span> peter.<span className="text-ink">ship</span>(idea);
          <span className="ml-1 inline-block h-4 w-[7px] translate-y-[3px] animate-pulse bg-brand" />
        </code>
      </pre>

      {/* status footer */}
      <div className="flex items-center justify-between border-t border-ink/10 px-5 py-3.5 text-xs font-medium text-ink/50">
        <span className="flex items-center gap-2">
          <span className="h-2 w-2 animate-pulse rounded-full bg-brand" />
          Open to new projects
        </span>
        <span>4 projects shipped</span>
      </div>

      {/* floating chips */}
      {chips.map((c) => (
        <span
          key={c.label}
          className={`absolute z-20 hidden rounded-full bg-white px-5 py-2 text-xs font-medium text-ink shadow-[0_8px_24px_rgba(0,0,0,0.12)] sm:block ${c.cls}`}
        >
          {c.label}
        </span>
      ))}
    </div>
  );
}

function Hero() {
  return (
    <main className="relative overflow-hidden">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-16 px-6 pb-28 pt-12 lg:grid-cols-[1fr_460px] lg:px-16 lg:pt-12">
        {/* Left column */}
        <div>
          <img
            src={greetingBox}
            alt="Hi everyone 👋, I'am Peter Tech"
            className="w-[264px]"
          />

          <h1 className="mt-7 text-[44px] font-semibold leading-[1.3] tracking-tight text-ink sm:text-[56px]">
            I'm a
            <br />
            Software Developer
          </h1>

          <p className="mt-9 max-w-[440px] text-[15px] leading-[1.75] text-ink/60">
            I build web and mobile apps from idea to launch, no matter how complex the challenge.
            Clean code, reliable delivery, and every project completed within the agreed timeline.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-6">
            <div className="relative">
              <span
                className="absolute inset-0 translate-x-2 translate-y-2 rounded-[3px] border-2 border-ink"
                aria-hidden="true"
              />
              <a
                href="#"
                className="relative inline-flex items-center gap-2.5 rounded-[3px] bg-ink px-7 py-4 text-sm font-medium text-background shadow-[6px_6px_0_0_var(--brand)] transition-transform hover:-translate-y-0.5"
              >
                Get In Touch
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2.5 text-[15px] font-medium text-ink transition-colors hover:text-ink/70"
            >
              Download CV
              <Download className="h-[18px] w-[18px]" />
            </a>
          </div>

          <div className="mt-12 flex items-center gap-7">
            <p className="text-[15px] font-medium text-ink">Find me on:</p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="Dribbble"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ink text-ink transition-colors hover:bg-brand/20"
              >
                <Dribbble className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ink text-ink transition-colors hover:bg-brand/20"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-background transition-transform hover:scale-105"
              >
                <Linkedin className="h-4 w-4" fill="currentColor" strokeWidth={0} />
              </a>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="relative mx-auto w-full max-w-[460px]">
          {/* portrait with black offset frame */}
          <div className="relative z-10 ml-auto w-full max-w-[360px]">
            <img
              src={mWaveLogo.url}
              alt=""
              aria-hidden="true"
              className="absolute -left-10 top-10 z-20 w-[88px]"
            />
            <div className="absolute inset-0 translate-x-4 translate-y-4 bg-ink" aria-hidden="true" />
            <HeroCard />
            <img
              src={greenZigzag}
              alt=""
              aria-hidden="true"
              className="absolute -bottom-14 -left-12 z-[-1] w-[520px] max-w-none"
            />
          </div>

          <ScrollBadge />
        </div>
      </div>
    </main>
  );
}

const services = [
  {
    title: "UX & UI",
    text: "Designing interfaces that are intuitive, efficient, and enjoyable to use.",
    icon: <AppWindow className="h-12 w-12" strokeWidth={1.1} />,
  },
  {
    title: "Web & Mobile App",
    text: "Transforming ideas into exceptional web and mobile app experiences.",
    icon: <MonitorSmartphone className="h-12 w-12" strokeWidth={1.1} />,
  },
  {
    title: "Design & Creative",
    text: "Crafting visually stunning designs that connect with your audience.",
    icon: (
      <img
        src={designIcon}
        alt=""
        aria-hidden="true"
        className="h-14 w-14 object-contain mix-blend-multiply"
      />
    ),
  },
  {
    title: "Development",
    text: "Bringing your vision to life with the latest technology and design trends.",
    icon: <Laptop className="h-12 w-12" strokeWidth={1.1} />,
  },
];

function Services() {
  const ref = useRef<HTMLElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShow(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const revealCls = `transition-all duration-700 ease-out ${
    show ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
  }`;
  const delay = (i: number) => ({ transitionDelay: `${i * 120}ms` });

  return (
    <section ref={ref} id="services" className="px-6 pb-40 pt-28 lg:px-16">
      <h2
        style={delay(0)}
        className={`mx-auto max-w-[860px] text-center text-[34px] font-medium leading-[1.35] tracking-tight text-ink md:text-[56px] ${revealCls}`}
      >
        Collaborate with brands <span className="text-ink/40">and agencies</span>
        <br />
        to create impactful <span className="text-ink/40">results.</span>
      </h2>

      <div className="relative mx-auto mt-24 max-w-[1100px] border-t border-ink/10">
        <span className="absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-1/2 -rotate-[8deg] rounded-full bg-white px-9 py-3 text-xs font-medium tracking-wide text-ink shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-transform duration-500 hover:rotate-0 hover:scale-105">
          Services
        </span>

        <div className="grid grid-cols-1 gap-y-16 pt-24 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-12">
          {services.map((s, i) => (
            <div
              key={s.title}
              style={delay(i + 1)}
              className={`group relative text-ink ${revealCls}`}
            >
              <span className="absolute -top-24 left-0 h-px w-full origin-left scale-x-0 bg-brand transition-transform duration-500 ease-out group-hover:scale-x-100" />
              <div className="flex h-14 items-center transition-transform duration-500 ease-out group-hover:-translate-y-1.5">
                {s.icon}
              </div>
              <h3 className="mt-8 text-[22px] font-medium tracking-tight">{s.title}</h3>
              <p className="mt-4 max-w-[240px] text-[15px] leading-[1.7] text-ink/50 transition-colors duration-300 group-hover:text-ink/80">
                {s.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

type Project = {
  title: string;
  text: string;
  tags: string[];
  href: string;
  img: string;
};

const websites: Project[] = [
  {
    title: "Standard Reserve",
    text: "An informational site for a sovereign onchain central bank, explaining Charters, Branches and ETH-flow-based $STANDARD issuance.",
    tags: ["Web3", "Multilingual", "Landing page"],
    href: "https://standard-reserve-hazel.vercel.app/",
    img: standardReserveImg,
  },
  {
    title: "CareLink",
    text: "Connected healthcare for Africa: one secure platform linking patients, hospitals, labs, pharmacies and insurers.",
    tags: ["Healthcare", "Landing page"],
    href: "https://carelink-rosy.vercel.app/",
    img: carelinkImg,
  },
];

const games: Project[] = [
  {
    title: "Escape",
    text: "A sliding-car puzzle. Slide the cars, free the red one, and keep going through endless levels.",
    tags: ["Puzzle", "Game"],
    href: "https://escape-k.vercel.app/",
    img: escapeImg,
  },
  {
    title: "Vibe/vibe",
    text: "A 3D voxel crossing game. Pick your character, dodge traffic, ride logs across rivers and chase a new high score.",
    tags: ["3D", "Voxel", "Arcade"],
    href: "https://vibevibe-coral.vercel.app/",
    img: vibeImg,
  },
];

function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShow(true);
          io.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, show] as const;
}

function ProjectGroup({ no, label, items }: { no: string; label: string; items: Project[] }) {
  const [ref, show] = useInView<HTMLDivElement>();
  return (
    <div ref={ref} className="mt-28 first:mt-20">
      <div
        className={`flex items-center gap-5 transition-all duration-700 ease-out ${
          show ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        <span className="text-sm font-medium text-ink/40">{no}</span>
        <h3 className="text-[22px] font-medium tracking-tight text-ink">{label}</h3>
        <span className="h-px flex-1 bg-ink/10" />
      </div>

      <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2">
        {items.map((p, i) => (
          <a
            key={p.title}
            href={p.href}
            target="_blank"
            rel="noreferrer"
            style={{ transitionDelay: `${(i + 1) * 140}ms` }}
            className={`group block transition-all duration-700 ease-out ${
              show ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            } ${i % 2 === 1 ? "md:mt-20" : ""}`}
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-[20px] bg-ink/5 ring-1 ring-ink/10">
              <img
                src={p.img}
                alt={`${p.title} preview`}
                loading="lazy"
                className="h-full w-full object-cover object-top transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
              />
              <span className="absolute bottom-4 right-4 flex h-12 w-12 translate-y-2 items-center justify-center rounded-full bg-white text-ink opacity-0 shadow-[0_8px_24px_rgba(0,0,0,0.15)] transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <ArrowUpRight className="h-5 w-5" />
              </span>
            </div>

            <div className="mt-7 flex items-start justify-between gap-6">
              <h4 className="text-[26px] font-medium tracking-tight text-ink">{p.title}</h4>
              <ArrowUpRight className="mt-1.5 h-5 w-5 shrink-0 text-ink/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
            </div>
            <p className="mt-3 max-w-[480px] text-[15px] leading-[1.7] text-ink/50">{p.text}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-ink/10 px-3.5 py-1.5 text-xs font-medium text-ink/60"
                >
                  {t}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-[1100px] px-6 pb-40 pt-12 lg:px-0">
      <div className="text-center">
        <span className="inline-block rounded-full bg-white px-7 py-2.5 text-xs font-medium tracking-wide text-ink shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
          Projects
        </span>
        <h2 className="mx-auto mt-8 max-w-[760px] text-[34px] font-medium leading-[1.35] tracking-tight text-ink md:text-[52px]">
          Selected work, <span className="text-ink/40">built end to end.</span>
        </h2>
      </div>

      <ProjectGroup no="01" label="Websites" items={websites} />
      <ProjectGroup no="02" label="Games & Entertainment" items={games} />
    </section>
  );
}

const EMAIL = "techykoded9111@gmail.com";

function Contact() {
  const [ref, show] = useInView<HTMLElement>();
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  const fade = (d: number) => ({
    style: { transitionDelay: `${d}ms` },
    className: `transition-all duration-700 ease-out ${
      show ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
    }`,
  });

  return (
    <section ref={ref} id="contact" className="mx-auto max-w-[1100px] px-6 pb-32 pt-10 lg:px-0">
      <div className="grid gap-10 border-t border-ink/10 pt-10 md:grid-cols-[180px_1fr]">
        <p style={fade(0).style} className={`text-sm text-ink/50 ${fade(0).className}`}>
          (Contact)
        </p>

        <div>
          <h2
            style={fade(100).style}
            className={`text-[44px] font-semibold leading-[1.1] tracking-tight text-ink md:text-[80px] ${fade(100).className}`}
          >
            Let's work
            <br />
            together.
          </h2>

          <div style={fade(250).style} className={`mt-14 ${fade(250).className}`}>
            <a
              href={`mailto:${EMAIL}`}
              className="group relative isolate inline-block break-all text-[22px] font-medium tracking-tight text-ink sm:text-[32px] md:text-[48px]"
            >
              {EMAIL}
              <span
                className="absolute inset-x-0 bottom-1 -z-10 h-[10px] bg-brand/40 transition-all duration-500 ease-out group-hover:h-[85%]"
                aria-hidden="true"
              />
            </a>
            <button
              type="button"
              onClick={copy}
              className="mt-4 block text-sm text-ink/50 transition-colors hover:text-ink"
            >
              {copied ? "Copied to clipboard" : "Copy email"}
            </button>
          </div>

          <div
            style={fade(400).style}
            className={`mt-20 grid gap-10 sm:grid-cols-2 sm:max-w-[560px] ${fade(400).className}`}
          >
         
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const links = [
    { label: "Home", id: "top" },
    { label: "Services", id: "services" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];
  const socials = [
    { label: "Dribbble", icon: <Dribbble className="h-4 w-4" /> },
    { label: "Instagram", icon: <Instagram className="h-4 w-4" /> },
    { label: "LinkedIn", icon: <Linkedin className="h-4 w-4" /> },
  ];
  return (
    <footer className="border-t border-ink/10 px-6 py-10 lg:px-16">
      <div className="mx-auto flex max-w-[1100px] flex-col items-center justify-between gap-8 md:flex-row">
        <p className="text-sm text-ink/50">
          © {new Date().getFullYear()} Peter Tech. All rights reserved.
        </p>
        <nav className="flex flex-wrap items-center justify-center gap-7 text-sm font-medium text-ink/60">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={scrollTo(l.id)}
              className="transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href="#"
              aria-label={s.label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/20 text-ink transition-colors hover:bg-brand/20"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-ink">
      <Header />
      <Hero />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
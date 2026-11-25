"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, BrainCircuit, BriefcaseBusiness, Code2, Compass, GraduationCap, Menu, Orbit, Rocket, Sparkles, Users, X, Zap, BookOpen, Trophy, Handshake, Globe2 } from "lucide-react";

const JOIN = "https://chat.whatsapp.com/L4xEzghMKsR8wmcYLSj4mo";
const launchAt = new Date("2026-12-01T00:00:00+05:30").getTime();
const navItems = [{ label: "Home", href: "#home" }, { label: "About", href: "#about" }, { label: "Features", href: "#features" }, { label: "Mission", href: "#mission" }, { label: "Join Us", href: "#join" }];
const features = [
  { n: "01", icon: BookOpen, title: "Learning resources", text: "Useful resources, tutorials, roadmaps, and learning material to keep your curiosity moving." },
  { n: "02", icon: Trophy, title: "Hackathons & competitions", text: "Find your next challenge, sharpen your skills, and turn ideas into something real." },
  { n: "03", icon: BriefcaseBusiness, title: "Jobs & internships", text: "Explore career opportunities, internships, and updates from across the industry." },
  { n: "04", icon: BrainCircuit, title: "AI & technology", text: "Stay curious about AI, programming, and the technologies shaping what comes next." },
  { n: "05", icon: Code2, title: "Projects & collaboration", text: "Build real-world projects, find teammates, and exchange ideas that go somewhere." },
  { n: "06", icon: Users, title: "Community & networking", text: "Connect with curious minds, developers, and innovators who want to build together." },
];
const values = [
  { n: "01", title: "Learn", text: "Explore new skills and emerging technologies with an open mind." },
  { n: "02", title: "Build", text: "Turn what you learn into meaningful projects through practice." },
  { n: "03", title: "Connect", text: "Meet talented people, find collaborators, and share what you know." },
  { n: "04", title: "Grow", text: "Move forward through opportunities, challenges, and shared knowledge." },
];
const audience = ["Beginners starting their tech journey", "Students exploring technology and innovation", "Developers looking for collaboration", "AI and programming enthusiasts", "Aspiring entrepreneurs and innovators"];

function Reveal({ children, delay = 0, className = "", y = 24 }: { children: React.ReactNode; delay?: number; className?: string; y?: number }) {
  const reduce = useReducedMotion();
  return <motion.div className={className} initial={{ opacity: 0, y: reduce ? 0 : y }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ duration: reduce ? 0.25 : 0.7, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}

function OrbitalArt() {
  return <div className="orbital-scene" aria-hidden="true">
    <div className="orbital-halo" />
    <div className="orbit orbit-a"><i /></div><div className="orbit orbit-b"><i /></div><div className="orbit orbit-c"><i /></div>
    <div className="orb-core"><span>H</span><div className="core-sheen" /></div>
    <div className="orbit-label label-one"><span className="label-dot" /> OPEN SOURCE <b>↗</b></div>
    <div className="orbit-label label-two"><span className="label-dot" /> HUMAN × MACHINE</div>
    <div className="orbit-label label-three">BUILD / 001</div>
    <div className="scene-cross cross-one">+</div><div className="scene-cross cross-two">+</div>
  </div>;
}

function Countdown() {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => { setNow(Date.now()); const timer = window.setInterval(() => setNow(Date.now()), 1000); return () => window.clearInterval(timer); }, []);
  if (now === null) return <div className="countdown" aria-label="Countdown loading"><div><strong>—</strong><span>DAYS</span></div><div><strong>—</strong><span>HOURS</span></div><div><strong>—</strong><span>MINUTES</span><div></div></div><div><strong>—</strong><span>SECONDS</span></div></div>;
  const diff = launchAt - now;
  if (diff <= 0) return <div className="launch-live"><span className="live-pulse" /> HACKORA IS LIVE. LET’S BUILD.</div>;
  const units = [{ label: "DAYS", value: Math.floor(diff / 86400000) }, { label: "HOURS", value: Math.floor((diff % 86400000) / 3600000) }, { label: "MINUTES", value: Math.floor((diff % 3600000) / 60000) }, { label: "SECONDS", value: Math.floor((diff % 60000) / 1000) }];
  return <div className="countdown" aria-label={`${units[0].value} days until launch`}>{units.map(u => <div key={u.label}><strong>{String(u.value).padStart(2, "0")}</strong><span>{u.label}</span></div>)}</div>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduce = useReducedMotion();
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 24); window.addEventListener("scroll", onScroll, { passive: true }); return () => window.removeEventListener("scroll", onScroll); }, []);
  const intro = { hidden: { opacity: 0, y: reduce ? 0 : 24 }, show: { opacity: 1, y: 0, transition: { duration: reduce ? 0.2 : 0.8, ease: [0.22, 1, 0.36, 1] } } };

  return <main id="home" className="site-shell">
    <div className="ambient-grid" aria-hidden="true" /><div className="grain" aria-hidden="true" />
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <a className="wordmark" href="#home" aria-label="HACKORA home"><span className="wordmark-symbol">H</span><span>HACKORA</span><span className="wordmark-period">.</span></a>
      <nav className="desktop-nav" aria-label="Main navigation">{navItems.map(item => <a key={item.label} href={item.href}>{item.label}</a>)}</nav>
      <a className="nav-join" href={JOIN} target="_blank" rel="noreferrer">Join Community <ArrowUpRight size={15} /></a>
      <button className="mobile-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(v => !v)}>{menuOpen ? <X /> : <Menu />}</button>
    </header>
    <AnimatePresence>{menuOpen && <motion.nav className="mobile-menu" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.25 }} aria-label="Mobile navigation">{navItems.map((item, i) => <motion.a key={item.label} href={item.href} onClick={() => setMenuOpen(false)} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.035 }}>{item.label}<ArrowUpRight size={16} /></motion.a>)}<a className="mobile-menu-join" href={JOIN} target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>Join Community <ArrowUpRight size={16} /></a></motion.nav>}</AnimatePresence>

    <section className="hero section-wrap">
      <div className="hero-copy">
        <motion.div className="launch-pill" variants={intro} initial="hidden" animate="show"><span className="pill-pulse" /><span>OFFICIAL LAUNCH</span><i /> <strong>01.12.26</strong><ArrowUpRight size={13} /></motion.div>
        <motion.div className="hero-title-wrap" initial="hidden" animate="show" transition={{ delay: 0.08 }}>
          <h1 className="hero-title">HACK<span className="title-outline">O</span>RA<span className="title-star">✳</span></h1>
          <div className="hero-subline"><span className="subline-bar" /> <span>THINK. EXPLORE. BUILD. REPEAT.</span></div>
        </motion.div>
        <motion.p className="hero-tagline" initial="hidden" animate="show" transition={{ delay: 0.18 }}>We Build the Future,<br /><span>From Localhost to the Universe.</span></motion.p>
        <motion.p className="hero-description" initial="hidden" animate="show" transition={{ delay: 0.27 }}>A community for curious minds, aspiring developers, students, and innovators. Learn technologies, explore AI, build real-world projects, and grow together.</motion.p>
        <motion.div className="hero-actions" initial="hidden" animate="show" transition={{ delay: 0.35 }}><a className="button button-primary" href={JOIN} target="_blank" rel="noreferrer">Join the Community <ArrowUpRight size={17} /></a><a className="button button-ghost" href="#about">Explore HACKORA <ArrowDownRight size={17} /></a></motion.div>
        <motion.div className="hero-footnote" initial="hidden" animate="show" transition={{ delay: 0.45 }}><div className="avatar-stack"><span>H</span><span>+</span><span>∞</span></div><span>A space for the <b>next generation</b> of builders</span></motion.div>
      </div>
      <motion.div className="hero-art-wrap" initial={{ opacity: 0, scale: reduce ? 1 : 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}><OrbitalArt /><div className="art-caption"><span>FIG. 01</span><span>AN OPEN UNIVERSE<br />FOR OPEN MINDS</span></div></motion.div>
      <div className="hero-bottomline"><span>SCROLL TO EXPLORE</span><span className="scroll-line"><i /></span><span>EST. 2026 / INTERNET-NATIVE</span></div>
    </section>

    <section className="about section-wrap" id="about">
      <Reveal className="section-kicker"><span>01 / ABOUT HACKORA</span><span className="kicker-line" /><span>WHO WE ARE</span></Reveal>
      <div className="about-grid"><Reveal><h2 className="section-heading">More Than a<br />Community.<br /><em>A Place to Build.</em></h2></Reveal><Reveal delay={0.12} className="about-copy"><p>HACKORA is a growing tech and innovation community where people come together to learn, share knowledge, collaborate, and turn ideas into real-world projects.</p><p>Whether you’re taking your first step into coding or already building advanced projects, HACKORA gives you a space to explore, experiment, and grow.</p><a className="text-link" href="#features">Discover what’s inside <ArrowRight size={16} /></a></Reveal></div>
      <Reveal className="about-stamp" delay={0.2}><div className="stamp-mark"><Orbit size={25} strokeWidth={1.2} /></div><span>CURIOUS BY NATURE.<br />CONNECTED BY CODE.</span><span className="stamp-index">H / 001</span></Reveal>
    </section>

    <section className="features section-wrap" id="features">
      <Reveal className="section-kicker"><span>02 / THE ECOSYSTEM</span><span className="kicker-line" /><span>WHAT YOU’LL FIND INSIDE</span></Reveal>
      <div className="section-intro"><Reveal><h2 className="section-heading">Everything you need<br />to <em>move forward.</em></h2></Reveal><Reveal delay={0.12}><p>One community. A thousand directions to explore. Find the tools, people, and opportunities to make your next move.</p></Reveal></div>
      <div className="feature-grid">{features.map((f, i) => <Reveal key={f.n} delay={i * 0.055}><article className="feature-card"><div className="feature-top"><span className="feature-index">{f.n} / 06</span><span className="feature-icon"><f.icon size={20} strokeWidth={1.5} /></span></div><div className="feature-bottom"><h3>{f.title}</h3><p>{f.text}</p><span className="feature-arrow"><ArrowUpRight size={17} /></span></div></article></Reveal>)}</div>
    </section>

    <section className="mission section-wrap" id="mission">
      <Reveal className="section-kicker"><span>03 / THE PRINCIPLE</span><span className="kicker-line" /><span>OUR MISSION</span></Reveal>
      <Reveal className="mission-head"><h2 className="section-heading">Learn. Build.<br /><em>Connect. Grow.</em></h2><p>Progress isn’t a solo project. We make room for every stage of the journey—and move further when we move together.</p></Reveal>
      <div className="mission-list">{values.map((v, i) => <Reveal key={v.n} delay={i * 0.1}><article className="mission-row"><span className="mission-number">{v.n}</span><h3>{v.title}<span>.</span></h3><p>{v.text}</p><ArrowUpRight className="mission-arrow" size={18} /></article></Reveal>)}</div>
    </section>

    <section className="people section-wrap">
      <Reveal className="section-kicker"><span>04 / YOUR PEOPLE</span><span className="kicker-line" /><span>WHO CAN JOIN?</span></Reveal>
      <div className="people-layout"><Reveal className="people-copy"><h2 className="section-heading">Your background<br />doesn’t matter.<br /><em>Your curiosity does.</em></h2><p>There’s no perfect starting point. Bring your questions, your ideas, and the willingness to try.</p><ul className="audience-list">{audience.map((a, i) => <li key={a}><span>0{i + 1}</span>{a}<ArrowUpRight size={14} /></li>)}</ul></Reveal>
        <Reveal className="people-art" delay={0.15}><div className="people-art-grid" /><div className="people-orbit orbit-p1" /><div className="people-orbit orbit-p2" /><div className="people-orbit orbit-p3" /><div className="people-center"><span>H</span><small>YOU BELONG<br />IN THE BUILD</small></div><div className="people-node node-a"><Code2 size={18} /></div><div className="people-node node-b"><BrainCircuit size={18} /></div><div className="people-node node-c"><GraduationCap size={18} /></div><div className="people-node node-d"><Rocket size={18} /></div><span className="people-coordinate">28°37' N<br />77°13' E</span><span className="people-art-caption">A NETWORK<br />OF POSSIBILITY</span></Reveal></div>
    </section>

    <section className="launch-section section-wrap" id="join">
      <div className="launch-panel"><div className="launch-glow" /><div className="launch-topline"><span><span className="pill-pulse" /> THE COUNTDOWN IS ON</span><span>HACKORA / 2026</span></div><div className="launch-content"><Reveal><span className="launch-eyebrow">THE FIRST CHAPTER</span><h2>A New Chapter<br /><em>Begins.</em></h2><p>HACKORA officially kicks off on <strong>Tuesday, 1 December 2026.</strong> A new space to learn, experiment, collaborate, and build something meaningful.</p><a className="button button-primary" href={JOIN} target="_blank" rel="noreferrer">Be Part of the Beginning <ArrowUpRight size={17} /></a></Reveal><Reveal delay={0.12} className="launch-count-wrap"><div className="count-label">TIME UNTIL TAKEOFF <span>UTC+05:30</span></div><Countdown /><div className="count-foot"><span>01 DECEMBER 2026</span><span>THE FUTURE, TOGETHER <ArrowUpRight size={12} /></span></div></Reveal></div><div className="launch-panel-footer"><span>ONE COMMUNITY. INFINITE POSSIBILITY.</span><span className="launch-symbol"><Orbit size={16} /> H / 001</span></div></div>
    </section>

    <section className="final-cta section-wrap"><Reveal className="final-cta-inner"><div className="cta-orbit" aria-hidden="true"><div /><div /><div /><span>H</span></div><span className="cta-kicker"><span className="pill-pulse" /> YOUR NEXT CHAPTER STARTS HERE</span><h2>The Future Is<br /><em>Built Together.</em></h2><p>Bring your curiosity. Share your ideas. Find your people. Let’s build something meaningful.</p><a className="button button-primary button-large" href={JOIN} target="_blank" rel="noreferrer">Join HACKORA Community <ArrowRight size={18} /></a><span className="cta-footnote">NO GATEKEEPING. JUST GOOD PEOPLE AND BIG IDEAS.</span></Reveal></section>

    <footer className="footer section-wrap"><div className="footer-main"><div className="footer-brand"><a className="wordmark" href="#home"><span className="wordmark-symbol">H</span><span>HACKORA</span><span className="wordmark-period">.</span></a><p>We Build the Future,<br />From Localhost to the Universe.</p></div><div className="footer-nav"><span className="footer-label">EXPLORE</span>{navItems.map(item => <a key={item.label} href={item.href}>{item.label}</a>)}</div><div className="footer-nav footer-community"><span className="footer-label">BE PART OF IT</span><a href={JOIN} target="_blank" rel="noreferrer">Join the community <ArrowUpRight size={14} /></a><span className="footer-note">Curiosity is the only prerequisite.</span></div><div className="footer-mark" aria-hidden="true">H<span>↗</span></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} HACKORA. ALL RIGHTS RESERVED.</span><span>BUILT FOR THE CURIOUS <span className="footer-dot">●</span></span><a href="#home">BACK TO TOP ↑</a></div></footer>
  </main>;
}

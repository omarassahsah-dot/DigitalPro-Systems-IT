import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Shield, ShieldCheck, Server, Monitor, Code, BarChart3, ShoppingCart,
  Fingerprint, Camera, BellRing, Flame, ShieldAlert, KeyRound,
  Lock, Bug, Eye, BookOpen, Globe, Wifi, HardDrive, Headphones,
  Package, LayoutDashboard, Database, TrendingUp, Truck, Laptop, ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const CARD_COLORS = [
  "bg-[#1a3a6b] hover:bg-[#1e4580]",
  "bg-[#8b1a2d] hover:bg-[#9e2035]",
  "bg-[#1a3a6b] hover:bg-[#1e4580]",
  "bg-[#8b1a2d] hover:bg-[#9e2035]",
  "bg-[#1a3a6b] hover:bg-[#1e4580]",
  "bg-[#8b1a2d] hover:bg-[#9e2035]",
];

const categories = [
  {
    label: "Notre Expertise",
    title: "Sécurité Électronique",
    bg: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=1920&q=80",
    cards: [
      { icon: Fingerprint, title: "Contrôle d'Accès", desc: "Biométrie, badges RFID/NFC, gestion multi-zones et journaux d'accès en temps réel.", href: "/services/securite-electronique/controle-acces" },
      { icon: Camera, title: "Vidéosurveillance", desc: "Caméras IP/HD 24h/24, vision nocturne, analyse vidéo intelligente et stockage sécurisé.", href: "/services/securite-electronique/videosurveillance" },
      { icon: BellRing, title: "Alarme Anti-Intrusion", desc: "Détecteurs de mouvement, sirènes, alertes SMS et télésurveillance avec intervention rapide.", href: "/services/securite-electronique/alarme-anti-intrusion" },
      { icon: Flame, title: "Protection Incendie", desc: "Détection précoce, extinction automatique, conformité réglementaire et maintenance annuelle.", href: "/services/securite-electronique/protection-incendie" },
      { icon: ShieldAlert, title: "Sécurité Périphérique", desc: "Clôtures électrifiées, barrières infrarouges, éclairage automatique et surveillance périmétrique.", href: "/services/securite-electronique/securite-peripherique" },
      { icon: KeyRound, title: "Serrures de Bâtiments", desc: "Serrures connectées, cylindres digitaux, portes blindées et gestion des accès à distance.", href: "/services/securite-electronique/serrures-batiments" },
    ],
  },
  {
    label: "Notre Expertise",
    title: "Cybersécurité",
    bg: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80",
    cards: [
      { icon: Shield, title: "Firewall & VPN", desc: "Protection périmétrique avancée et tunnels VPN sécurisés pour vos collaborateurs.", href: "/contact" },
      { icon: Bug, title: "Détection d'Intrusion", desc: "IDS/IPS, monitoring continu et alertes en temps réel sur vos infrastructures.", href: "/contact" },
      { icon: Eye, title: "SOC & Supervision", desc: "Centre opérationnel de sécurité, surveillance 24h/24 et réponse aux incidents.", href: "/contact" },
      { icon: BookOpen, title: "Audit de Sécurité", desc: "Tests de pénétration, analyse des vulnérabilités et rapports de conformité.", href: "/contact" },
      { icon: Lock, title: "Sensibilisation", desc: "Formations et ateliers pour sensibiliser vos équipes aux bonnes pratiques.", href: "/contact" },
      { icon: Database, title: "Plan de Reprise", desc: "PRA/PCA, sauvegarde chiffrée et continuité d'activité garantie.", href: "/contact" },
    ],
  },
  {
    label: "Notre Expertise",
    title: "Infrastructures Réseaux & Systèmes",
    bg: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80",
    cards: [
      { icon: Globe, title: "Réseaux LAN/WAN", desc: "Conception et déploiement de réseaux performants et hautement disponibles.", href: "/contact" },
      { icon: HardDrive, title: "Câblage Structuré", desc: "Installation de câblage cuivre et fibre optique aux standards TIA/ISO.", href: "/contact" },
      { icon: Wifi, title: "WiFi Entreprise", desc: "Solutions Wi-Fi 6 haute densité avec itinérance transparente et sécurisation.", href: "/contact" },
      { icon: Server, title: "Virtualisation", desc: "VMware, Hyper-V, migration vers le cloud hybride et conteneurisation.", href: "/contact" },
      { icon: ShieldCheck, title: "Firewall Réseau", desc: "Segmentation, DMZ, VLAN et politique de sécurité réseau avancée.", href: "/contact" },
      { icon: TrendingUp, title: "Cloud Hybride", desc: "Migration et gestion de vos ressources cloud AWS, Azure ou privées.", href: "/contact" },
    ],
  },
  {
    label: "Notre Expertise",
    title: "Gestion de Parc Informatique",
    bg: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&q=80",
    cards: [
      { icon: Monitor, title: "Maintenance Préventive", desc: "Interventions planifiées, nettoyage, mises à jour et rapport de santé du parc.", href: "/contact" },
      { icon: Headphones, title: "Helpdesk N1/N2/N3", desc: "Support technique multi-niveaux, ticketing et SLA garantis.", href: "/contact" },
      { icon: LayoutDashboard, title: "Supervision Proactive", desc: "Monitoring en temps réel avec alertes avant panne et tableaux de bord.", href: "/contact" },
      { icon: Package, title: "Inventaire & Suivi", desc: "Gestion complète des actifs informatiques et cycle de vie des équipements.", href: "/contact" },
      { icon: Laptop, title: "Migration de Postes", desc: "Remplacement, déploiement d'images et transfert de données sécurisé.", href: "/contact" },
      { icon: BookOpen, title: "Gestion des Licences", desc: "Audit, renouvellement et optimisation de vos licences logicielles.", href: "/contact" },
    ],
  },
  {
    label: "Notre Expertise",
    title: "Développement Logiciel & ERP/CRM",
    bg: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1920&q=80",
    cards: [
      { icon: Globe, title: "Applications Web", desc: "Sites et applications web sur mesure, performants, responsive et sécurisés.", href: "/contact" },
      { icon: Laptop, title: "Applications Mobiles", desc: "Apps iOS et Android natives ou cross-platform adaptées à vos métiers.", href: "/contact" },
      { icon: Code, title: "API & Intégrations", desc: "Connexion de vos logiciels existants via des APIs robustes et documentées.", href: "/contact" },
      { icon: BarChart3, title: "ERP sur Mesure", desc: "Implémentation et personnalisation de solutions ERP adaptées à votre secteur.", href: "/contact" },
      { icon: TrendingUp, title: "CRM & Relation Client", desc: "Gestion des ventes, marketing automation et fidélisation client.", href: "/contact" },
      { icon: LayoutDashboard, title: "Business Intelligence", desc: "Tableaux de bord, KPIs et rapports pour piloter votre activité.", href: "/contact" },
    ],
  },
  {
    label: "Notre Expertise",
    title: "Vente & Distribution de Matériel",
    bg: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80",
    cards: [
      { icon: Server, title: "Serveurs & Stockage", desc: "Serveurs rack, NAS, SAN et solutions de stockage haute capacité.", href: "/contact" },
      { icon: Laptop, title: "Postes de Travail", desc: "PC fixes, laptops, stations graphiques de marques leaders avec garantie.", href: "/contact" },
      { icon: Wifi, title: "Équipements Réseau", desc: "Switches, routeurs, points d'accès Cisco, Ubiquiti, HP et autres.", href: "/contact" },
      { icon: Package, title: "Périphériques", desc: "Imprimantes, écrans, scanners et accessoires informatiques professionnels.", href: "/contact" },
      { icon: BookOpen, title: "Licences Logicielles", desc: "Microsoft, Adobe, antivirus et logiciels métiers au meilleur prix.", href: "/contact" },
      { icon: Truck, title: "Import / Export", desc: "Importation et exportation de matériel technologique international.", href: "/contact" },
    ],
  },
];

function ParallaxBg({ imageUrl, children }: { imageUrl: string; children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  return (
    <div ref={ref} className="relative overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-[-15%] will-change-transform">
        <img src={imageUrl} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#0a1628]/80" />
      </motion.div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 lg:pt-28">
        {/* Hero */}
        <section className="bg-hero py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
              <h1 className="font-display text-3xl lg:text-5xl font-bold text-primary-foreground mb-4">Nos Services</h1>
              <p className="text-primary-foreground/70 text-lg">Des solutions technologiques complètes pour répondre à tous les besoins des PME, grandes entreprises et administrations publiques.</p>
            </motion.div>
          </div>
        </section>

        {/* Categories */}
        {categories.map((cat) => (
          <ParallaxBg key={cat.title} imageUrl={cat.bg}>
            <div className="py-16 lg:py-24">
              <div className="container mx-auto px-4 lg:px-8">
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-10"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-4 h-4 rounded-sm bg-accent inline-block" />
                    <span className="text-accent font-semibold text-sm uppercase tracking-widest">{cat.label}</span>
                  </div>
                  <h2 className="font-display text-3xl lg:text-5xl font-extrabold text-white uppercase tracking-wide">
                    {cat.title}
                  </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {cat.cards.map((card, i) => {
                    const colorClass = CARD_COLORS[i % CARD_COLORS.length];
                    return (
                      <motion.div
                        key={card.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.07 }}
                        whileHover={{ y: -5 }}
                      >
                        <Link
                          to={card.href}
                          className={`group flex flex-col h-full rounded-xl p-6 transition-all duration-300 ${colorClass} shadow-lg`}
                        >
                          <div className="w-16 h-16 rounded-[40%] bg-white/15 flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110">
                            <card.icon className="w-8 h-8 text-white" />
                          </div>
                          <h3 className="font-display text-base font-bold text-white uppercase tracking-wide mb-3">
                            {card.title}
                          </h3>
                          <p className="text-white/75 text-sm leading-relaxed flex-1 mb-5">
                            {card.desc}
                          </p>
                          <span className="inline-flex items-center gap-1.5 text-white/90 text-sm font-semibold group-hover:gap-3 transition-all duration-200">
                            Voir Plus <ArrowRight className="w-4 h-4" />
                          </span>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </ParallaxBg>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;


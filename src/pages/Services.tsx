import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Shield, Server, Monitor, Code, BarChart3, ShoppingCart, Check } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Sécurité Électronique & Cybersécurité",
    desc: "Protection complète de vos locaux et infrastructures numériques avec les technologies les plus avancées.",
    features: ["Vidéosurveillance IP/HD", "Contrôle d'accès biométrique", "Alarmes anti-intrusion", "Firewall & VPN entreprise", "Cybersécurité & SOC", "Détection d'intrusion (IDS/IPS)"],
  },
  {
    icon: Server,
    title: "Infrastructures Réseaux & Systèmes",
    desc: "Conception, déploiement et administration de réseaux performants et sécurisés.",
    features: ["Réseaux LAN/WAN", "Câblage structuré", "WiFi entreprise", "Firewall & VPN", "Virtualisation", "Cloud hybride"],
  },
  {
    icon: Monitor,
    title: "Gestion de Parc Informatique",
    desc: "Maintenance proactive et support technique pour garantir la continuité de vos opérations.",
    features: ["Maintenance préventive", "Helpdesk & support N1/N2/N3", "Inventaire & suivi", "Supervision proactive", "Gestion des licences", "Migration de postes"],
  },
  {
    icon: Code,
    title: "Développement Logiciel",
    desc: "Applications sur mesure pour digitaliser et optimiser vos processus métiers.",
    features: ["Applications web", "Applications mobiles", "API & intégrations", "Portails clients", "Tableaux de bord", "Automatisation"],
  },
  {
    icon: BarChart3,
    title: "Solutions ERP/CRM",
    desc: "Implémentation de solutions de gestion intégrées pour piloter votre activité.",
    features: ["ERP sur mesure", "CRM & relation client", "Gestion comptable", "Gestion des stocks", "Business Intelligence", "Formation utilisateurs"],
  },
  {
    icon: ShoppingCart,
    title: "Vente, Distribution & Import/Export de Matériel",
    desc: "Fourniture et importation d'équipements informatiques de marques leaders avec conseil et garantie.",
    features: ["Serveurs & stockage", "Postes de travail", "Équipements réseau", "Périphériques & accessoires", "Licences logicielles", "Import/export de materiél tech"],
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 lg:pt-28">
        {/* Header */}
        <section className="bg-hero py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
              <h1 className="font-display text-3xl lg:text-5xl font-bold text-primary-foreground mb-4">Nos Services</h1>
              <p className="text-primary-foreground/70 text-lg">Des solutions technologiques complètes pour répondre à tous les besoins des PME, grandes entreprises et administrations publiques.</p>
            </motion.div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 space-y-12">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-card rounded-xl border border-border p-8 lg:p-10 shadow-card"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/3">
                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                      <service.icon className="w-7 h-7 text-accent" />
                    </div>
                    <h2 className="font-display text-2xl font-bold text-foreground mb-3">{service.title}</h2>
                    <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
                  </div>
                  <div className="lg:w-2/3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((f) => (
                        <div key={f} className="flex items-center gap-3 bg-muted rounded-lg px-4 py-3">
                          <Check className="w-4 h-4 text-accent shrink-0" />
                          <span className="text-sm font-medium text-foreground">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;

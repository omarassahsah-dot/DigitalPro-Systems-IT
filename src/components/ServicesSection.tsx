import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, Server, Monitor, Code, BarChart3, ShoppingCart, ArrowRight } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Shield,
    title: "Sécurité Électronique & Cybersécurité",
    description: "Vidéosurveillance, contrôle d'accès, cybersécurité, Firewall et VPN. Intégration complète et maintenance de vos systèmes de protection.",
  },
  {
    icon: Server,
    title: "Infrastructures Réseaux",
    description: "Conception et déploiement de réseaux LAN/WAN, câblage structuré, WiFi professionnel et solutions de connectivité sécurisée.",
  },
  {
    icon: Monitor,
    title: "Gestion de Parc IT",
    description: "Maintenance préventive et corrective, supervision des équipements, helpdesk et support technique 24/7 pour votre parc informatique.",
  },
  {
    icon: Code,
    title: "Développement Logiciel",
    description: "Applications web et mobiles sur mesure, API, intégration de systèmes et solutions digitales adaptées à vos processus métiers.",
  },
  {
    icon: BarChart3,
    title: "Solutions ERP/CRM",
    description: "Implémentation et personnalisation de solutions ERP, CRM et logiciels de gestion comptable pour optimiser vos opérations.",
  },
  {
    icon: ShoppingCart,
    title: "Vente & Distribution de Matériel",
    description: "Fourniture, importation et exportation d'équipements informatiques et technologiques de marques leaders avec conseil d'expert.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">Nos Services</span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mt-3 mb-4">
            Des solutions IT complètes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            De la sécurité électronique au développement logiciel, nous couvrons tous vos besoins technologiques.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} {...service} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/services">
            <Button variant="outline" size="lg">
              Voir tous nos services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;

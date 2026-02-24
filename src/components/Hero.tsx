import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Server, Code } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-navy-dark/80" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-24 lg:pt-28">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/15 text-accent text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              DigitalPro Systems IT — Casablanca
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6"
          >
            Sécurité, Réseaux &{" "}
            <span className="text-gradient">Solutions IT</span>{" "}
            sur mesure pour votre entreprise
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg md:text-xl text-primary-foreground/70 mb-8 max-w-2xl leading-relaxed"
          >
            Vidéosurveillance, cybersécurité, infrastructures réseaux, développement logiciel et ERP/CRM.
            DigitalPro Systems IT accompagne les PME, grandes entreprises et administrations publiques au Maroc.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-wrap gap-4"
          >
            <Link to="/contact">
              <Button variant="hero" size="lg" className="text-base">
                Demander un devis gratuit
                <ArrowRight className="w-5 h-5 ml-1" />
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="heroOutline" size="lg" className="text-base">
                Découvrir nos services
              </Button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-wrap gap-8 mt-16 pt-8 border-t border-primary-foreground/10"
          >
            {[
              { value: "20+", label: "Clients satisfaits" },
              { value: "5+", label: "Années d'expérience" },
              { value: "50+", label: "Projets réalisés" },
              { value: "24/7", label: "Support technique" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-3xl font-bold text-accent">{stat.value}</div>
                <div className="text-sm text-primary-foreground/50 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

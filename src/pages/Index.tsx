import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";

const whyUs = [
  "Expertise technique certifiée",
  "Support réactif 24/7",
  "Solutions personnalisées",
  "Partenariats avec les leaders du marché",
  "Présence nationale au Maroc",
  "Engagement qualité et délais",
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ServicesSection />

      {/* Why Us */}
      <section className="py-20 lg:py-28 bg-navy">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent font-medium text-sm uppercase tracking-wider">Pourquoi nous choisir</span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-primary-foreground mt-3 mb-6">
                Un partenaire technologique de confiance
              </h2>
              <p className="text-primary-foreground/60 mb-8 leading-relaxed">
                DigitalPro Systems IT accompagne les PME, grandes entreprises et administrations publiques marocaines
                dans leur transformation digitale avec des solutions fiables, sécurisées et innovantes.
                Notre expertise couvre la sécurité électronique, la cybersécurité, les réseaux, le développement logiciel et les ERP/CRM.
              </p>
              <Link to="/a-propos">
                <Button variant="hero" size="lg">
                  En savoir plus
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {whyUs.map((item, i) => (
                <div
                  key={item}
                  className="flex items-center gap-3 bg-navy-light/30 rounded-lg px-4 py-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                  <span className="text-primary-foreground/80 text-sm font-medium">{item}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Prêt à digitaliser et sécuriser votre entreprise ?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Contactez-nous pour un audit gratuit et une proposition personnalisée adaptée à vos besoins.
            </p>
            <Link to="/contact">
              <Button variant="default" size="lg">
                Contactez-nous maintenant
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-navy text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <img src={logo} alt="DigitalPro Systems IT" style={{ width: "180px", height: "auto" }} className="object-contain brightness-0 invert" />
            </Link>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              DigitalPro Systems IT — votre partenaire de confiance pour la sécurité électronique, les infrastructures réseaux et les solutions IT au Maroc.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-accent">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li><Link to="/services" className="hover:text-accent transition-colors">Sécurité Électronique</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">Infrastructures Réseaux</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">Développement Logiciel</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">Solutions ERP/CRM</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">Vente de Matériel</Link></li>
            </ul>
          </div>

          {/* Liens */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-accent">Entreprise</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li><Link to="/a-propos" className="hover:text-accent transition-colors">À propos</Link></li>
              <li><Link to="/blog" className="hover:text-accent transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-accent">Contact</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/60">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>82, Angle Rue Soumaya et BD Abdelmoumen, Résidence Shéhérazade 1, 3ème étage N°13, Palmier, Casablanca</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <a href="tel:+212663463189" className="hover:text-accent transition-colors">06 63 46 31 89</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <a href="mailto:contact@dps-it.ma" className="hover:text-accent transition-colors">contact@dps-it.ma</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-light/20 mt-12 pt-8 text-center text-sm text-primary-foreground/40">
          <p>© {new Date().getFullYear()} DigitalPro Systems IT. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

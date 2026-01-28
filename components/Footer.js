import Link from "next/link";
import {
  Zap,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();

  const services = [
    "Electrical Installation",
    "Lighting Solutions",
    "Maintenance Services",
    "Emergency Repairs",
  ];

  const quickLinks = [
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Products", href: "#products" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer
      className={
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
      }
    >
      <div className="container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <img
                src="/logo.png"
                alt="AgeGroup Logo"
                className="h-12 w-auto rounded-full"
              />
              <span className="text-xl font-bold">
                Abundant<span className="text-primary-500">Grace</span>
                Electricals
              </span>
            </Link>
            <p className="text-dark-400 dark:text-dark-500 mb-4">
              Leading provider of electrical and lighting solutions in Nigeria.
              Delivering excellence and innovation since our inception.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="bg-dark-800 dark:bg-dark-900 p-2 rounded-lg hover:bg-primary-500 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          {/* <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-dark-400 dark:text-dark-500 hover:text-primary-500 transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Quick Links */}
          {/* <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-dark-400 dark:text-dark-500 hover:text-primary-500 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                <span className="text-dark-400 dark:text-dark-500">
                  Addulsalami Abubakar Road, Gudu 900110, Abuja, Nigeria, 900110
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <a
                  href="tel:+234"
                  className="text-dark-400 dark:text-dark-500 hover:text-primary-500 transition-colors"
                >
                  +234 706 860 7976
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <a
                  href="mailto:agegroupng@gmail.com"
                  className="text-dark-400 dark:text-dark-500 hover:text-primary-500 transition-colors"
                >
                  agegroupng@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-dark-800 dark:border-dark-950 mt-12 pt-8 text-center text-dark-400 dark:text-dark-500">
          <p>
            © {currentYear} AgeGroupNG. All rights reserved. Powering Nigeria
            with Excellence.
          </p>
        </div>
      </div>
    </footer>
  );
}

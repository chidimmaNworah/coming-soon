"use client";
import { motion } from "framer-motion";
import { Zap, Lightbulb, Wrench, Shield, Clock, Award } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Zap,
      title: "Electrical Installation",
      description:
        "Complete electrical wiring and installation services for residential, commercial, and industrial properties.",
      features: ["New Installations", "System Upgrades", "Panel Replacements"],
    },
    {
      icon: Lightbulb,
      title: "Lighting Solutions",
      description:
        "Modern lighting designs and installations that enhance aesthetics while optimizing energy efficiency.",
      features: ["LED Solutions", "Smart Lighting", "Outdoor Lighting"],
    },
    {
      icon: Wrench,
      title: "Maintenance & Repair",
      description:
        "Comprehensive maintenance services to keep your electrical systems running safely and efficiently.",
      features: [
        "Regular Maintenance",
        "Fault Detection",
        "System Optimization",
      ],
    },
    {
      icon: Shield,
      title: "Safety Inspections",
      description:
        "Thorough safety inspections and compliance checks to ensure your systems meet all regulations.",
      features: ["Safety Audits", "Code Compliance", "Risk Assessment"],
    },
    {
      icon: Clock,
      title: "Emergency Services",
      description:
        "24/7 emergency electrical services for urgent repairs and critical situations.",
      features: ["24/7 Availability", "Rapid Response", "Quick Solutions"],
    },
    {
      icon: Award,
      title: "Consultation Services",
      description:
        "Expert consultation for electrical system design, optimization, and energy management.",
      features: ["Energy Audits", "System Design", "Cost Optimization"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="services"
      className="section-padding bg-gray-50 dark:bg-dark-950"
    >
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-wider mb-2 block">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-dark-900 dark:text-white mb-4">
            Comprehensive Electrical Solutions
          </h2>
          <p className="text-lg text-dark-600 dark:text-dark-300">
            From installations to maintenance, we provide complete electrical
            services tailored to your needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-dark-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="bg-gradient-to-br from-primary-500 to-primary-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-3">
                {service.title}
              </h3>

              <p className="text-dark-600 dark:text-dark-300 mb-6">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center text-dark-700 dark:text-dark-400 text-sm"
                  >
                    <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="mt-6 text-primary-600 dark:text-primary-400 font-semibold flex items-center group-hover:gap-2 transition-all">
                Learn More
                <span className="ml-1 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center mt-12"
        >
          <a href="#contact" className="btn btn-primary">
            Request a Service
          </a>
        </motion.div>
      </div>
    </section>
  );
}

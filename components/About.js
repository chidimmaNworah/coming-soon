"use client";
import { motion } from "framer-motion";
import { CheckCircle2, Target, Eye, Users } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: CheckCircle2,
      title: "Quality Excellence",
      description:
        "We never compromise on quality, delivering superior electrical solutions every time.",
    },
    {
      icon: Target,
      title: "Innovation",
      description:
        "Staying ahead with the latest technologies and innovative electrical solutions.",
    },
    {
      icon: Eye,
      title: "Transparency",
      description:
        "Clear communication and honest pricing in all our dealings.",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description:
        "Your satisfaction is our priority. We build lasting relationships.",
    },
  ];

  return (
    <section id="about" className="section-padding bg-white dark:bg-dark-900">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-wider mb-2 block">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-dark-900 dark:text-white mb-6">
              Nigeria's Trusted Electrical Partner
            </h2>
            <p className="text-lg text-dark-600 dark:text-dark-300 mb-6">
              AgeGroupNG has been at the forefront of electrical and lighting
              solutions in Nigeria, serving residential, commercial, and
              industrial clients with unmatched expertise and dedication.
            </p>
            <p className="text-lg text-dark-600 dark:text-dark-300 mb-8">
              Our team of certified electricians brings years of experience and
              a commitment to safety, quality, and customer satisfaction. We
              pride ourselves on delivering projects on time, within budget, and
              to the highest standards.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 dark:bg-dark-800 p-6 rounded-xl">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  10+
                </div>
                <div className="text-dark-600 dark:text-dark-400">
                  Years Experience
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-dark-800 p-6 rounded-xl">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  50+
                </div>
                <div className="text-dark-600 dark:text-dark-400">
                  Expert Team
                </div>
              </div>
            </div>

            <a href="#contact" className="btn btn-primary">
              Work With Us
            </a>
          </motion.div>

          {/* Right Content - Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-8">
              Our Core Values
            </h3>
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex gap-4 bg-gray-50 dark:bg-dark-800 p-6 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-lg h-fit">
                  <value.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-dark-900 dark:text-white mb-2">
                    {value.title}
                  </h4>
                  <p className="text-dark-600 dark:text-dark-300">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";
import { motion } from "framer-motion";
import { FiPackage } from "react-icons/fi";

export default function Products() {
  const products = [
    {
      category: "LED Lighting",
      items: [
        "LED Bulbs & Tubes",
        "LED Panel Lights",
        "Street Lights",
        "Flood Lights",
      ],
    },
    {
      category: "Electrical Cables",
      items: [
        "Power Cables",
        "Control Cables",
        "Armoured Cables",
        "Flexible Cables",
      ],
    },
    {
      category: "Switches & Sockets",
      items: [
        "Wall Switches",
        "Power Sockets",
        "Smart Switches",
        "Industrial Switches",
      ],
    },
    {
      category: "Protection Devices",
      items: [
        "Circuit Breakers",
        "RCDs & RCBOs",
        "Surge Protectors",
        "Fuse Boxes",
      ],
    },
    {
      category: "Solar Solutions",
      items: ["Solar Panels", "Inverters", "Batteries", "Solar Kits"],
    },
    {
      category: "Industrial Equipment",
      items: [
        "Transformers",
        "Generators",
        "Motor Controls",
        "Distribution Boards",
      ],
    },
  ];

  return (
    <section
      id="products"
      className="section-padding bg-white dark:bg-dark-900"
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
            Our Products
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-dark-900 dark:text-white mb-4">
            Quality Electrical Products
          </h2>
          <p className="text-lg text-dark-600 dark:text-dark-300">
            We stock a comprehensive range of premium electrical products from
            trusted manufacturers.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary-100 p-3 rounded-lg group-hover:bg-primary-500 transition-colors">
                  <FiPackage className="w-5 h-5 text-primary-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-dark-900 dark:text-white">
                  {product.category}
                </h3>
              </div>
              <ul className="space-y-2">
                {product.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center text-dark-700 dark:text-dark-400"
                  >
                    <div className="w-1.5 h-1.5 bg-primary-500 dark:bg-primary-400 rounded-full mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-dark-600 dark:text-dark-300 mb-6">
            Need a specific product? Contact us for availability and pricing.
          </p>
          <a href="#contact" className="btn btn-primary">
            Request Product Catalog
          </a>
        </motion.div>
      </div>
    </section>
  );
}

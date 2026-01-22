"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const Customers = () => {
  const customers = [
    {
      name: "Microsoft",
      logo: "/new_partners/microsoft (1) (1).webp",
      alt: "Microsoft Partner Logo",
    },
    {
      name: "Kaseya",
      logo: "/new_partners/partner-kaseya-logo (1).png",
      alt: "Kaseya Logo",
    },
    {
      name: "Red Hat",
      logo: "/new_partners/Red_Hat-Logo.wine (1).png",
      alt: "Red Hat Logo",
    },
    {
      name: "Halcyon",
      logo: "/new_partners/Halcyon.png",
      alt: "Halcyon Logo",
    },
    {
      name: "Proofpoint",
      logo: "/new_partners/proofpoint.png",
      alt: "proofpoint Logo",
    },
  ]

  return (
    <section className="relative py-20 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-slate-950 to-slate-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 font-dm-sans">
            Trusted Technology Partners
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            We partner with industry-leading technology providers to deliver
            best-in-class solutions
          </p>
        </motion.div>

        {/* Logos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 md:gap-16 items-center justify-items-center max-w-6xl mx-auto">
          {customers.map((customer, index) => (
            <motion.div
              key={customer.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group w-full"
            >
              <div
                className={`relative h-24 md:h-32 flex items-center justify-center p-6 rounded-lg border transition-all duration-300 ${
                  customer.name === "Halcyon"
                    ? "bg-slate-800/90 border-slate-700/50 hover:bg-slate-800 hover:border-slate-600"
                    : "bg-white/90 border-white/30 hover:bg-white hover:border-white/50"
                }`}
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg blur-xl" />

                <Image
                  src={customer.logo}
                  alt={customer.alt}
                  width={200}
                  height={100}
                  className="relative z-10 w-auto h-auto max-w-full max-h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                  unoptimized
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-white/80 text-sm">
            Partnering with the worlds leading technology companies to deliver
            exceptional results
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Customers

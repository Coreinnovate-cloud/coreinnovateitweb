"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const Customers = () => {
  const customers = [
    {
      name: "HP",
      logo: "/customers/hp_logo.jpg",
      alt: "HP Logo",
    },
    {
      name: "Kaseya",
      logo: "/customers/kaseya_logo.webp",
      alt: "Kaseya Logo",
    },
    {
      name: "Microsoft",
      logo: "/customers/microsoftlogo.jpg",
      alt: "Microsoft Logo",
    },
    {
      name: "Proofpoint",
      logo: "/customers/proofpoint_logo.png",
      alt: "Proofpoint Logo",
    },
    {
      name: "Veeam",
      logo: "/customers/veeam_white.png",
      alt: "Veeam Logo",
    },
    {
      name: "Red Hat",
      logo: "/customers/RedHat_White.png",
      alt: "Red Hat Logo",
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12 items-center">
          {customers.map((customer, index) => (
            <motion.div
              key={customer.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="relative h-16 md:h-20 flex items-center justify-center p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg blur-xl" />

                <Image
                  src={customer.logo}
                  alt={customer.alt}
                  width={140}
                  height={60}
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

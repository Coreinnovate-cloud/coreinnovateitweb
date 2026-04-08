"use client";

import BookAssessment from "@/components/modules/book-assessment";
import SendMessage from "@/components/modules/send-message";
import SectionBadge from "@/components/shared/section-badge";
import { contacts } from "@/lib/data";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const page = () => {
  const iconMap = {
    "Call Now": Phone,
    "Email Address": Mail,
    "Office Address": MapPin,
  };

  const colorMap = {
    "Call Now": "from-cyan-500 to-blue-500",
    "Email Address": "from-primary to-cyan-500",
    "Office Address": "from-blue-500 to-primary",
  };

  return (
    <div className="pt-24 sm:pt-32 lg:pt-48 space-y-12 sm:space-y-20">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

        <div className="flex flex-col gap-y-6 sm:gap-y-8 max-w-7xl mx-auto px-4 sm:px-6 items-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SectionBadge title="CONTACT US" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center max-w-3xl px-4"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-secondary mb-4 sm:mb-6 leading-tight">
              We&apos;re Here to Help You Succeed
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-grey leading-relaxed">
              Have a project or question? Our team of experts is ready to assist you with tailored IT solutions
            </p>
          </motion.div>

          {/* Contact Cards */}
          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-3 w-full mt-4 sm:mt-8">
            {contacts.map((contact, index) => {
              const Icon = iconMap[contact.title as keyof typeof iconMap];
              const gradientColor = colorMap[contact.title as keyof typeof colorMap];

              return (
                <motion.div
                  key={contact.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group"
                >
                  <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:border-primary/30 transition-all duration-500 overflow-hidden h-full">
                    {/* Background Gradient Blob */}
                    <div
                      className={`absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br ${gradientColor} opacity-5 group-hover:opacity-10 rounded-full blur-3xl transition-opacity duration-500`}
                    />

                    {/* Icon */}
                    <div className="relative mb-8">
                      <div
                        className={`size-16 bg-gradient-to-br ${gradientColor} rounded-2xl inline-flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
                      >
                        {Icon && <Icon className="w-8 h-8 text-white" />}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative space-y-3">
                      <h3 className="text-2xl font-bold text-secondary group-hover:text-primary transition-colors duration-300">
                        {contact.title}
                      </h3>
                      <p className="text-grey text-sm leading-relaxed">
                        {contact.description}
                      </p>
                      <p className="text-secondary font-semibold pt-2">
                        {contact.contact}
                      </p>

                      {/* Hover Arrow */}
                      <div className="flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 pt-2">
                        <span className="text-sm font-semibold">Get in touch</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Bottom Accent Line */}
                    <div
                      className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${gradientColor} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <SendMessage />

      <BookAssessment />
    </div>
  );
};

export default page;

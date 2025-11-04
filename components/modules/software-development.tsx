"use client";

import Image from "next/image";
import React from "react";
import SectionBadge from "../shared/section-badge";
import VerticalStepList from "../shared/vertical-steplist";

const SoftwareDevelopment = () => {
  return (
    <div className="px-4 bg-[#F5F5F5] relative py-16 space-y-12">
      <div className="absolute inset-0 bg-[url('/vector-white.png')] bg-center bg-cover bg-no-repeat" />

      <div className="space-y-12 max-w-7xl mx-auto">
        <div className="text-center relative z-10">
          <h3 className="text-secondary max-w-[486px] mx-auto text-[28px] font-semibold font-dm-sans">
            Web & Software Development Services
          </h3>
          <p className="text-tertiary max-w-[464px] mx-auto text-base font-medium">
            Transform your ideas into powerful digital solutions. From responsive websites to custom enterprise applications, we deliver scalable, secure, and user-focused software that drives business growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 relative z-10">
          <div className="space-y-6">
            <SectionBadge title="Why Choose CoreInnovate for Development" />

            <div>
              <h3 className="text-secondary max-w-[396px] text-[28px] font-semibold font-dm-sans">
                Build, Deploy, and Scale with Confidence
              </h3>
              <p className="text-tertiary max-w-[436px] text-base font-medium">
                Our development services deliver modern, efficient solutions tailored to your business needs
              </p>
            </div>

            <VerticalStepList key={"software"} items={services} />
          </div>

          <div className="relative h-[462px] sm:h-full rounded-2xl overflow-hidden">
            <Image
              fill
              className="object-cover"
              alt="web-dev"
              src={`/web-dev.jpg`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftwareDevelopment;

const services = [
  {
    title: "Custom Web Applications",
    description:
      "Build responsive, fast, and secure web applications tailored to your business processes. We use modern frameworks like React, Next.js, and Node.js to deliver scalable solutions.",
  },
  {
    title: "Enterprise Software Development",
    description:
      "Develop custom business applications that streamline operations, improve efficiency, and integrate seamlessly with your existing systems.",
  },
  {
    title: "Mobile App Development",
    description:
      "Create native and cross-platform mobile applications for iOS and Android that provide exceptional user experiences and drive engagement.",
  },
  {
    title: "E-commerce Solutions",
    description:
      "Launch powerful online stores with secure payment processing, inventory management, and seamless customer experiences that drive sales.",
  },
  {
    title: "API Development & Integration",
    description:
      "Connect your systems with robust RESTful APIs and integrate third-party services to extend functionality and automate workflows.",
  },
];

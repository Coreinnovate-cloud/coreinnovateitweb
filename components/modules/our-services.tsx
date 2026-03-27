import React from "react";
import SectionBadge from "../shared/section-badge";
import ServiceCard from "../ui/service-card";
import { Button } from "../shared/button";
import { MoveRight } from "lucide-react";
import Link from "next/link";

function OurServices() {
  return (
    <div className="px-4 mx-auto max-w-7xl flex flex-col gap-y-6">
      <SectionBadge title="Our Services" />

      <div>
        <h3 className="text-secondary text-[28px] font-semibold font-dm-sans">
          Solutions That Drive Your Business Forward
        </h3>
        <p className="text-tertiary text-base font-medium">
          We offer comprehensive solutions for your company’s success
        </p>
      </div>

      <div className="grid bg-[url('/vector.png')] bg-cover bg-center bg-no-repeat sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}

        <div
          className="relative flex items-center p-6 rounded-lg bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/explore.jpg')" }}
        >
          <div className="absolute inset-0 bg-[#2E71C5C9] rounded-lg" />

          <div className="relative space-y-6">
            <p className="text-white font-semibold text-2xl font-dm-sans">
              Want to explore all our IT, cloud, and digital solutions in
              detail?
            </p>

            <Link href="/services">
              <Button variant="white" className="text-primary">
                Learn More
                <MoveRight />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurServices;

export const services = [
  {
    id: 1,
    icon: "/shield-tick.png",
    title: "Managed IT Security",
    description:
      "Reliable with 24/7 monitoring and systems protected and running smoothly.",
  },
  {
    id: 2,
    icon: "/cloud.svg",
    title: "Cloud Solution",
    description:
      "Cloud migration, management, and backup services for improved efficiency.",
  },
  {
    id: 3,
    icon: "/code.svg",
    title: "Development & Digital",
    description:
      "Custom websites, apps, and e-commerce solutions at scale for your business.",
  },
  {
    id: 4,
    icon: "/user-group.svg",
    title: "Training Services",
    description:
      "Practical IT and cybersecurity training that reduces risks for organizations.",
  },
  {
    id: 5,
    icon: "/check-circle.svg",
    title: "Project Excellence",
    description:
      "Expert project and risk management on budget, aligned with business goals.",
  },
];

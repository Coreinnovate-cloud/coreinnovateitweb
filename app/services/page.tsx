"use client";

import CloudManagement from "@/components/modules/cloud-management";
import ManagedSecurity from "@/components/modules/managed-security";
import ManagedServices from "@/components/modules/managed-services";
import ProjectManagement from "@/components/modules/project-management";
import ProjectRisk from "@/components/modules/project-risk";
import SoftwareDevelopment from "@/components/modules/software-development";
import TrainingPath from "@/components/modules/training-path";
import TrainingServices from "@/components/modules/training-services";
import BookAssessment from "@/components/modules/book-assessment";
import { useEffect } from "react";

const ServicesPage = () => {
  useEffect(() => {
    // Handle scroll to section on page load
    const hash = window.location.hash;
    if (hash) {
      // Remove the # from the hash
      const id = hash.substring(1);
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const offset = 100; // Offset for fixed navbar
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="space-y-16 pt-10 sm:pt-36">
      <div className="bg-dark min-h-[280px] sm:min-h-[369px] flex items-center px-4 sm:px-8 lg:px-12">
        <div className="relative text-white min-h-[280px] sm:min-h-[369px] bg-[url('/services-hero.png')] bg-cover bg-center text-center w-full justify-center flex flex-col items-center gap-4 sm:gap-6 py-8 sm:py-0">
          <p className="text-2xl sm:text-3xl lg:text-4xl max-w-[90%] sm:max-w-[600px] font-semibold font-dm-sans px-4">
            Our services
          </p>
          <p className="text-[#F9FAFB] max-w-[90%] sm:max-w-[550px] text-sm sm:text-base px-4 leading-relaxed">
            From managing IT to securing data and training talent, Coreinnovate
            delivers end-to-end technology services.
          </p>
        </div>
      </div>

      <div id="managed-it-services">
        <ManagedServices />
      </div>
      <div id="cloud-management">
        <CloudManagement />
      </div>
      <div id="managed-security">
        <ManagedSecurity />
      </div>
      <div id="project-management">
        <ProjectManagement />
      </div>
      <div id="software-development">
        <SoftwareDevelopment />
      </div>
      <div id="project-risk">
        <ProjectRisk />
      </div>
      <div id="training-services">
        <TrainingServices />
      </div>
      <div id="training-path">
        <TrainingPath />
      </div>
      <BookAssessment />
    </div>
  );
};

export default ServicesPage;

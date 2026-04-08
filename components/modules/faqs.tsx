"use client"

import React from "react";
import SectionBadge from "../shared/section-badge";
import Accordion from "../shared/accordion";
import { accordionData } from "@/lib/data";

const Faqs = () => {
  return (
    <div className="px-4 sm:px-8 hidden bg-[url('/vector.png')] bg-cover bg-center bg-no-repeat flex-col gap-y-6 w-full items-center py-16 lg:px-12">
      <SectionBadge title="FAQS" />

      <div>
        <h3 className="text-secondary text-center text-[28px] font-semibold font-dm-sans">
          Got Questions? We’ve Got Answers.
        </h3>
        <p className="text-tertiary text-center max-w-[524px] text-base font-medium">
          Quick answers to the most common questions about our services and
          solutions.
        </p>
      </div>

      <div className="pt-6 sm:max-w-[75%] mx-auto">
        <Accordion
          items={accordionData.map((faq, index) => ({
            ...faq,
            id: index,
          }))}
        />
      </div>
    </div>
  );
};

export default Faqs;

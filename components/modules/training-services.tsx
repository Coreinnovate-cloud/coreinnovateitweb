import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const TrainingServices = () => {
  return (
    <div className="px-4 max-w-7xl mx-auto space-y-12">
      <div className="text-center">
        <h3 className="text-secondary text-[28px] font-semibold font-dm-sans">
          Training Services
        </h3>
        <p className="text-tertiary max-w-[650px] mx-auto text-base font-medium">
          At CoreInnovate, we provide hands-on training designed to give you the
          knowledge, certifications, and confidence to succeed in today’s
          competitive job market. Here’s why you should choose our training
          services
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-9">
        {trainings.map((training) => (
          <div
            key={training.Feature}
            className={cn(
              "flex flex-col lg:col-span-2 items-center gap-y-2 text-center"
            )}
          >
            <span className="size-11 rounded-[100px] mb-7 inline-flex items-center justify-center bg-[#F7F9FC]">
              <Image width={20} height={20} alt="icon" src={training.image} />
            </span>

            <p className="font-medium text-xl text-black">{training.Feature}</p>
            <p className="text-base max-w-[378px] mx-auto text-tertiary">
              {training.Description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainingServices;

const trainings = [
  {
    image: "/lock.svg",
    Feature: "Beginner Friendly",
    Description:
      "We start from the basics, making sure even those without a technical background can follow along and build a strong foundation.",
  },
  {
    image: "/check-circle.svg",
    Feature: "Hands-On Learning",
    Description:
      "Our courses go beyond theory. You'll work on practical labs, real-world scenarios, and projects that give you experience employers value.",
  },
  {
    image: "/gem.svg",
    Feature: "Certification-Focused",
    Description:
      "We prepare you for industry-recognised certifications such as CompTIA A+, Network+, Security+, Microsoft Azure Fundamentals, and AWS Cloud Practitioner.",
  },
  {
    image: "/user-group.svg",
    Feature: "Mentoring and Career Guidance",
    Description:
      "We strive for high standards in service delivery, ensuring quality, reliability, and results.",
  },
  {
    image: "/book-open.svg",
    Feature: "Flexible Learning Options",
    Description:
      "Choose from online, instructor-led, or blended programs designed to fit around your schedule.",
  },
];

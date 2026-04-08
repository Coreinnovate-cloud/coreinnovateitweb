import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IServiceCard {
  icon: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<IServiceCard> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col gap-y-6 p-6 rounded-lg bg-[#FBFBFB]">
      <Image src={icon} alt={title} height={40} width={40} />

      <p className="text-secondary font-dm-sans text-2xl font-semibold">{title}</p>

      <p className="font-medium text-base text-tertiary">{description}</p>

      <Link
        href={`/services`}
        className="text-primary hover:text-primary/75 font-medium text-base underline"
      >
        Learn more
      </Link>
    </div>
  );
};

export default ServiceCard;

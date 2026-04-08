import React from "react";
import { Badge } from "../ui/badge";

const SectionBadge = ({ title }: { title: string }) => {
  return (
    <Badge
      className="rounded-lg uppercase gap-2 whitespace-pre-wrap text-xs font-semibold border-[#CDCDCD]"
      variant="white"
    >
      <span className="size-1.5 rounded-[2px] bg-black" />
      {title}
    </Badge>
  );
};

export default SectionBadge;

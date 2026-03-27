import Image from "next/image";
import React from "react";
import { Badge } from "./badge";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface ArticleProps {
  id: number;
  image?: string;
  title: string;
  content: string;
  date: string;
  tags: string[];
}

const Article: React.FC<ArticleProps> = ({
  id,
  image,
  title,
  content,
  date,
  tags,
}) => {
  return (
  <Link href={`/resources/${id}`}>
      <div className="flex flex-col gap-y-6">
        {image ? (
          <div className="relative h-[271px] overflow-hidden rounded-lg">
            <Image src={image} fill className="object-cover" alt={title} />
          </div>
        ) : null}

        <div className="flex flex-col gap-y-4">
          <p className="font-medium text-sm text-secondary">{date}</p>
          <div className="flex items-center flex-wrap gap-2">
            {tags?.map((tag, index) => (
              <Badge
                key={tag}
                className={cn(
                  {
                    "text-[#CC400C] border-[#FCB59A] bg-[#FFECE5]":
                      index % 2 === 1,
                    "text-[#04802E] border-[#91D6A8] bg-[#E7F6EC]":
                      index % 2 === 0,
                  },
                  "font-medium text-sm rounded-lg px-2 py-0.5"
                )}
              >
                {tag}
              </Badge>
            ))}
          </div>
          <h3 className="font-semibold font-dm-sans text-2xl text-black">
            {title}
          </h3>
          <p className="text-base line-clamp-4 text-secondary">{content}</p>
        </div>
      </div>
    </Link>
  );
};

export default Article;

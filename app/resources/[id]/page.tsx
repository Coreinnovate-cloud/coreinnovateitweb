// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbSeparator,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { cn } from "@/lib/utils";
import { blogs } from "@/lib/data";
import Image from "next/image";
import { notFound } from "next/navigation";

type PageProps = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return blogs.map((b) => ({ id: String(b.id) }));
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const blog = blogs.find((b) => String(b.id) === id);
  if (!blog) return {};
  return {
    title: `${blog.title} | CoreInnovate` ,
    description: blog.content,
  };
}

const page = async ({ params }: PageProps) => {
  const { id } = await params;
  const blog = blogs.find((b) => String(b.id) === id);
  if (!blog) return notFound();

  const { title, content, heroImage, tags, sections } = blog;

  return (
    <div className="pt-64 px-4 max-w-7xl mx-auto space-y-16">
      <div className="grid lg:grid-cols-2 justify-between items-center gap-6">
        <div className="relative w-full h-[476px] lg:h-full rounded-lg overflow-hidden">
          <Image src={heroImage ?? "/popular.jpg"} fill className="object-cover" alt={title} />
        </div>

        <div className="grid gap-y-4">
          <Breadcrumb>
            <BreadcrumbList className="bg-[#F7F9FC] rounded py-1.5 px-2">
              <BreadcrumbItem>
                <BreadcrumbLink href="/resources">Resources</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>/</BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink className="text-primary truncate">
                  {title}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <h3 className="font-semibold font-dm-sans text-4xl sm:text-5xl text-black">
            {title}
          </h3>

          <p className="text-base line-clamp-4 text-secondary">
            {content}
          </p>

          <div className="flex items-center gap-2 flex-wrap">
            {tags.map((tag, index) => (
              <Badge
                key={index}
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

          {/* <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage
                src="https://github.com/maxleiter.png"
                alt="@maxleiter"
              />
              <AvatarFallback>LR</AvatarFallback>
            </Avatar>

            <p className="text-base font-medium text-secondary">Bose Arowolo</p>
          </div> */}
        </div>
      </div>

      <div className="flex flex-col gap-12 lg:flex-row">
        <div className="rounded-2xl h-fit text-base text-[#1B1B1F] w-full p-4 sm:max-w-[328px] border border-[#D0D5DD] space-y-3">
          <p className="text-lg font-semibold">In this article</p>
          {sections.map((s) => (
            <p key={s.heading}>{s.heading}</p>
          ))}
        </div>

        <div className="text-base flex flex-col gap-y-6 text-secondary">
          <p>
            Technology is the backbone of every modern business. From email and
            collaboration tools to cloud storage and cybersecurity, your IT
            systems keep daily operations running. But as businesses grow, so do
            the demands on IT. That’s where our expertise comes in.
          </p>

          <p>
            Here are the key topics we cover in this article:
          </p>

          {sections.map((s, idx) => (
            <span className="space-y-2" key={s.heading}>
              <p className="text-lg font-semibold text-secondary">
                {idx + 1}. {s.heading}
              </p>

              {s.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </span>
          ))}

          <p>
            Ready to learn more? Contact <span className="text-primary">CoreInnovate</span> to discover how we can help your business.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;

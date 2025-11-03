import BookAssessment from "@/components/modules/book-assessment";
import PopularBlogs from "@/components/modules/popular-blogs";
import RecentArticles from "@/components/modules/recent-articles";
import SectionBadge from "@/components/shared/section-badge";
import React from "react";

const page = () => {
  return (
    <div className="space-y-16 pt-10 sm:pt-36">
      <div className="bg-dark hero min-h-[320px] sm:min-h-[369px] flex items-center px-4 sm:px-8 lg:px-12">
        <div className="relative text-white max-w-7xl mx-auto bg-cover bg-[url('/resources.png')] bg-center w-full flex flex-col gap-4 sm:gap-6 py-8 sm:py-0">
          <SectionBadge title="blog" />
          <p className="text-2xl sm:text-3xl lg:text-4xl max-w-[90%] sm:max-w-[600px] font-semibold font-dm-sans">
            News & Articles
          </p>
          <p className="text-[#F9FAFB] max-w-[95%] sm:max-w-4xl text-sm sm:text-base leading-relaxed">
            Get the latest insights, industry updates, and expert advice
            designed to keep your business secure, productive, and future-ready
            in today&apos;s fast-changing digital world.
          </p>
        </div>
      </div>

      <PopularBlogs />
      <RecentArticles />
      <BookAssessment />
    </div>
  );
};

export default page;

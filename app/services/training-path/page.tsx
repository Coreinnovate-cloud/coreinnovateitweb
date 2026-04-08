import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Training Path | CoreInnovate IT",
  description: "Structured training paths for individuals and organizations.",
};

export default function TrainingPathPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-indigo-950 via-slate-900 to-slate-950 text-white py-20 px-4 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Training Path
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            {/* Your content here */}
          </p>
        </div>
      </section>

      {/* Content sections will go here */}
      <section className="py-16 px-4 sm:px-8 lg:px-12 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          {/* Add your content here */}
        </div>
      </section>
    </main>
  );
}

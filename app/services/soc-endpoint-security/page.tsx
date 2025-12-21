import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security Operations Centre (SOC) & Endpoint Security | CoreInnovate IT",
  description: "24/7 security monitoring, threat detection, and endpoint protection to safeguard your business from cyber threats.",
};

export default function SOCEndpointSecurityPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-red-950 via-slate-900 to-slate-950 text-white py-20 px-4 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Security Operations Centre (SOC) & Endpoint Security
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Comprehensive 24/7 security monitoring, threat detection, and endpoint protection to safeguard your business from evolving cyber threats.
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

import CallToAction from "@/components/layout/CallToAction";
import Hero from "@/components/home/Hero";
import Portfolio from "@/components/home/Portfolio";
import Services from "@/components/home/Services";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://freestackinc.com.ng/#organization",
    "name": "FreeStack Inc",
    "legalName": "FreeStack Inc",
    "url": "https://freestackinc.com.ng",
    "logo": "https://freestackinc.com.ng/logo.png",
    "image": "https://freestackinc.com.ng/og-image.png",
    "description": "FreeStack Inc is a modern software development and web engineering agency building high-performance web platforms, custom APIs, and digital solutions.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "NG",
      "addressLocality": "Lagos"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Nigeria"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "contact@freestackinc.com.ng",
      "availableLanguage": ["English"]
    },
    "sameAs": [
      "https://github.com/freestackinc",
      "https://www.linkedin.com/company/freestackinc",
      "https://twitter.com/freestackinc"
    ],
    "knowsAbout": [
      "Web Development",
      "Software Engineering",
      "API Development",
      "Next.js",
      "Backend Architecture"
    ]
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Services />
      <Portfolio />
      <CallToAction />
    </main>
  );
}
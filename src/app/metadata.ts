export const siteConfig = {
  name: "Imperium.dev",
  description: "Top-Rated MVP & Software Development Agency | Expert in Web, Mobile, AI & GenAI Solutions | Fast, Affordable Development Services",
  url: "https://imperium.dev",
  ogImage: "https://imperium.dev/og-image.jpg",
  links: {
    twitter: "https://twitter.com/imperiumdev",
    github: "https://github.com/imperiumdev",
    linkedin: "https://linkedin.com/company/imperiumdev"
  }
};

export const metadata = {
  home: {
    title: "Imperium.dev | #1 MVP Development Agency | Web, Mobile & AI Solutions",
    description: "Transform your ideas into market-ready MVPs in weeks. Expert in web development, mobile apps, AI solutions, and GenAI development. Get a free consultation with our development team.",
    keywords: "MVP development, software development company, AI development services, web development agency, mobile app development, GenAI solutions, custom software development, full-stack development, enterprise software development, startup development, rapid prototyping, software consulting"
  },
  about: {
    title: "About Imperium.dev | Leading Software Development & AI Solutions Agency",
    description: "Imperium.dev is a premier software development agency specializing in MVP development, web applications, mobile apps, and AI solutions. Our expert team delivers cutting-edge technology solutions.",
    keywords: "software development agency, AI development company, web development experts, mobile app developers, MVP development specialists, GenAI development, custom software solutions, enterprise development, startup technology partner"
  },
  caseStudies: {
    title: "Case Studies | Imperium.dev | Software Development Success Stories",
    description: "Explore our successful software development projects, including web applications, mobile apps, AI solutions, and MVP development. See how we've helped businesses achieve digital transformation.",
    keywords: "software development case studies, web development projects, mobile app success stories, AI implementation examples, MVP development results, digital transformation case studies, enterprise software solutions"
  },
  services: {
    title: "Software Development Services | Imperium.dev | Web, Mobile & AI Solutions",
    description: "Comprehensive software development services including MVP development, web applications, mobile apps, AI solutions, and GenAI development. Transform your business with our expert development team.",
    keywords: "software development services, MVP development, web development, mobile app development, AI development, GenAI solutions, custom software development, full-stack development, enterprise software, startup development"
  }
};

export const structuredData = {
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Imperium.dev",
    "url": "https://imperium.dev",
    "logo": "https://imperium.dev/logo.png",
    "description": "Leading Software Development Agency | Expert in MVP Development, Web Apps, Mobile Apps & AI Solutions",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "San Francisco",
      "addressRegion": "CA",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-123-4567",
      "contactType": "customer service",
      "email": "contact@imperium.dev"
    },
    "sameAs": [
      "https://twitter.com/imperiumdev",
      "https://linkedin.com/company/imperiumdev",
      "https://github.com/imperiumdev"
    ]
  },
  service: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Software Development Services",
    "provider": {
      "@type": "Organization",
      "name": "Imperium.dev"
    },
    "description": "Expert software development services including MVP development, web applications, mobile apps, and AI solutions. Fast, affordable, and high-quality development services.",
    "areaServed": "Worldwide",
    "serviceType": ["Software Development", "Web Development", "Mobile App Development", "AI Development"],
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "price": "Contact for pricing",
      "priceCurrency": "USD"
    }
  }
}; 
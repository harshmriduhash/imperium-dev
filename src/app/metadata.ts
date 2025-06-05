export const siteConfig = {
  name: "Imperium.dev",
  description: "Leading MVP Development Agency | Fast, Affordable, and Stress-Free Software Development",
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
    title: "Imperium.dev | MVP Development Agency | Fast & Affordable Software Solutions",
    description: "Transform your ideas into market-ready MVPs in weeks, not months. Expert software development, AI solutions, and digital transformation services. Get started with a free consultation.",
    keywords: "MVP development, software development, AI solutions, digital transformation, web development, mobile apps, startup development, rapid prototyping"
  },
  about: {
    title: "About Imperium.dev | Leading Software Development Agency",
    description: "Meet Imperium.dev - Your trusted partner in software development. We combine cutting-edge technology with creative problem-solving to deliver exceptional digital solutions.",
    keywords: "software development agency, tech company, digital solutions, expert developers, innovation, technology partner"
  },
  caseStudies: {
    title: "Case Studies | Imperium.dev Success Stories & Client Projects",
    description: "Explore our successful client projects and case studies. See how we've helped businesses transform their digital presence and achieve remarkable results.",
    keywords: "case studies, success stories, client projects, digital transformation, software development projects, AI solutions, web development"
  },
  services: {
    title: "Our Services | Imperium.dev | Software Development Solutions",
    description: "Comprehensive software development services including MVP development, AI solutions, web development, and mobile apps. Transform your business with our expertise.",
    keywords: "software development services, MVP development, AI solutions, web development, mobile apps, digital transformation"
  }
};

export const structuredData = {
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Imperium.dev",
    "url": "https://imperium.dev",
    "logo": "https://imperium.dev/logo.png",
    "description": "Leading MVP Development Agency | Fast, Affordable, and Stress-Free Software Development",
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
    }
  },
  service: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "MVP Development",
    "provider": {
      "@type": "Organization",
      "name": "Imperium.dev"
    },
    "description": "Fast and affordable MVP development services to help startups and businesses bring their ideas to market quickly.",
    "areaServed": "Worldwide",
    "serviceType": "Software Development"
  }
}; 
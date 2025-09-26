/**
 * SEO Configuration for Frugloo AI-Powered Personal Finance App
 * Centralized SEO metadata and structured data management
 */

export const seoConfig = {
  // Basic site information
  siteName: "Frugloo",
  siteUrl: "https://frugloo.com",
  siteDescription:
    "Finally, a finance app that understands your real life. Get out of debt faster, save more effortlessly, and build wealth with AI that learns your habits. Join thousands getting early access.",

  // Benefit-focused keywords
  keywords: [
    "get out of debt faster",
    "build wealth with AI",
    "smart money management",
    "debt free journey",
    "AI financial coach",
    "automated expense tracking",
    "intelligent budgeting",
    "personal finance AI",
    "early access finance app",
    "money management app",
    "financial freedom",
    "AI money mentor",
    "smart savings",
    "wealth building",
    "debt payoff strategies",
    "realistic budgeting",
  ],

  // Social media handles
  social: {
    twitter: "@frugloo",
    facebook: "frugloo",
    linkedin: "frugloo",
    instagram: "frugloo",
  },

  // Default meta tags
  defaultMeta: {
    title:
      "Frugloo - Master Your Money with AI That Gets You | Get Early Access",
    description:
      "Finally, a finance app that understands your real life. Get out of debt faster, save more effortlessly, and build wealth with AI that learns your habits. Join thousands getting early access.",
    image: "https://frugloo.com/og-image.png",
    type: "website",
    locale: "en_US",
  },

  // Structured data schemas
  structuredData: {
    organization: {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Frugloo",
      url: "https://frugloo.com/",
      logo: "https://frugloo.com/logo-wordmark.svg",
      description: "AI-powered personal finance management platform",
      foundingDate: "2024",
      industry: "Financial Technology",
      sameAs: [
        "https://twitter.com/frugloo",
        "https://linkedin.com/company/frugloo",
        "https://facebook.com/frugloo",
      ],
    },

    softwareApplication: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Frugloo",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web, iOS, Android",
      description:
        "Master your money with AI that gets you. Get out of debt faster, save more effortlessly, and build wealth with AI that learns your habits.",
      url: "https://frugloo.com/",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description:
          "Free AI-powered personal finance app with waitlist access",
      },
      featureList: [
        "Smart money moves with AI",
        "Debt clarity and payoff strategies",
        "Your personal money coach",
        "Auto expense tracking",
        "Smart budgets that work",
        "Never miss a bill",
      ],
    },
  },

  // Page-specific configurations (currently only home page exists)
  pages: {
    home: {
      title:
        "Frugloo - Master Your Money with AI That Gets You | Get Early Access",
      description:
        "Finally, a finance app that understands your real life. Get out of debt faster, save more effortlessly, and build wealth with AI that learns your habits. Join thousands getting early access.",
      keywords: [
        "get out of debt faster",
        "build wealth with AI",
        "smart money management",
        "debt free journey",
        "AI financial coach",
        "automated expense tracking",
        "intelligent budgeting",
        "personal finance AI",
        "early access finance app",
        "money management app",
        "financial freedom",
        "AI money mentor",
      ],
    },

    // Future pages - ready for when they are created
    features: {
      title: "AI-Powered Features | Frugloo - Smart Financial Management",
      description:
        "Discover Frugloo's revolutionary AI-powered features: intelligent debt tracking, smart budgeting, automated expense categorization, and personalized financial guidance.",
      keywords: [
        "AI financial features",
        "smart budgeting tools",
        "intelligent expense tracking",
        "AI financial planning",
        "automated money management",
        "AI budgeting features",
      ],
    },

    about: {
      title: "About Frugloo - AI-Powered Personal Finance Innovation",
      description:
        "Learn about Frugloo's mission to revolutionize personal finance with artificial intelligence. Meet the team behind the smartest financial management platform.",
      keywords: [
        "about frugloo",
        "AI finance company",
        "fintech innovation",
        "personal finance technology",
        "AI financial startup",
        "smart money management team",
      ],
    },

    privacy: {
      title: "Privacy Policy | Frugloo - AI Financial App",
      description:
        "Frugloo's privacy policy: How we protect your financial data with AI-powered security. Learn about our commitment to privacy and data protection.",
      keywords: [
        "frugloo privacy policy",
        "AI financial data security",
        "personal finance privacy",
        "financial data protection",
        "AI app privacy",
      ],
    },

    terms: {
      title: "Terms of Service | Frugloo - AI Financial Platform",
      description:
        "Frugloo's terms of service for our AI-powered personal finance platform. Understand your rights and our commitment to secure financial management.",
      keywords: [
        "frugloo terms of service",
        "AI financial app terms",
        "personal finance platform terms",
        "fintech terms and conditions",
      ],
    },

    blog: {
      title: "AI Finance Blog | Frugloo - Smart Money Management Tips",
      description:
        "Expert insights on AI-powered personal finance, smart budgeting strategies, and financial technology. Learn how artificial intelligence can transform your money management.",
      keywords: [
        "AI finance blog",
        "personal finance tips",
        "smart budgeting advice",
        "financial technology insights",
        "AI money management",
        "fintech blog",
      ],
    },

    contact: {
      title: "Contact Frugloo - AI Financial App Support",
      description:
        "Get in touch with Frugloo's AI financial app team. Support, feedback, and partnership inquiries for our intelligent personal finance platform.",
      keywords: [
        "contact frugloo",
        "AI financial app support",
        "frugloo customer service",
        "fintech support",
        "AI app help",
      ],
    },
  },
};

/**
 * Generate page-specific meta tags
 */
export function generatePageMeta(page: keyof typeof seoConfig.pages) {
  const pageConfig = seoConfig.pages[page];
  return {
    title: pageConfig.title,
    description: pageConfig.description,
    keywords: pageConfig.keywords.join(", "),
    openGraph: {
      title: pageConfig.title,
      description: pageConfig.description,
      url: `${seoConfig.siteUrl}/${page === "home" ? "" : page}`,
      siteName: seoConfig.siteName,
      images: [
        {
          url: seoConfig.defaultMeta.image,
          width: 1200,
          height: 630,
          alt: pageConfig.title,
        },
      ],
      locale: seoConfig.defaultMeta.locale,
      type: seoConfig.defaultMeta.type,
    },
    twitter: {
      card: "summary_large_image",
      site: seoConfig.social.twitter,
      creator: seoConfig.social.twitter,
      title: pageConfig.title,
      description: pageConfig.description,
      images: [seoConfig.defaultMeta.image],
    },
  };
}

/**
 * Generate structured data for a specific page
 */
export function generateStructuredData(
  type: "organization" | "softwareApplication" | "webSite" | "faqPage",
) {
  switch (type) {
    case "organization":
      return seoConfig.structuredData.organization;
    case "softwareApplication":
      return seoConfig.structuredData.softwareApplication;
    case "webSite":
      return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: `${seoConfig.siteName} - AI-Powered Personal Finance Tracker`,
        url: seoConfig.siteUrl,
        description: seoConfig.siteDescription,
        potentialAction: {
          "@type": "SearchAction",
          target: `${seoConfig.siteUrl}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      };
    case "faqPage":
      return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What makes Frugloo different from other personal finance apps?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Frugloo is the first finance app that actually understands your real life. Our AI learns your habits and provides realistic advice you can stick to, helping you get out of debt faster and build wealth without feeling deprived.",
            },
          },
          {
            "@type": "Question",
            name: "How does the AI financial coach work?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Your AI money coach learns your spending patterns and celebrates your wins while gently guiding you back on track. It provides realistic advice that works with your lifestyle, not against it, so you can actually stick to your financial goals.",
            },
          },
          {
            "@type": "Question",
            name: "How do I get early access to Frugloo?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Join our waitlist to get early access to Frugloo! You'll be among the first to experience AI-powered money management that actually works with your real life. Get exclusive features and special launch pricing.",
            },
          },
        ],
      };
    default:
      return null;
  }
}

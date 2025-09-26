/**
 * SEO Configuration for Frugloo AI-Powered Personal Finance App
 * Centralized SEO metadata and structured data management
 */

export const seoConfig = {
  // Basic site information
  siteName: "Frugloo",
  siteUrl: "https://frugloo.com",
  siteDescription:
    "Revolutionary AI-powered personal finance app that provides intelligent debt tracking, smart budgeting, and personalized financial guidance.",

  // AI-focused keywords
  keywords: [
    "AI personal finance",
    "artificial intelligence budgeting",
    "smart money tracker",
    "AI financial advisor",
    "automated expense tracking",
    "intelligent debt management",
    "AI-powered budgeting app",
    "personal finance AI",
    "smart financial planning",
    "AI money mentor",
    "fintech AI",
    "automated financial guidance",
    "intelligent budget planning",
    "AI expense categorization",
    "smart financial insights",
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
      "Frugloo - AI-Powered Personal Finance Tracker | Smart Money Management",
    description:
      "Revolutionary AI-powered personal finance app with intelligent debt tracking, smart budgeting, and personalized financial guidance. Join thousands using AI to transform their money management.",
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
        "AI-powered personal finance tracker with intelligent debt management, smart budgeting, and personalized financial guidance",
      url: "https://frugloo.com/",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description:
          "Free AI-powered personal finance app with waitlist access",
      },
      featureList: [
        "AI-driven financial decisions",
        "Intelligent debt tracking",
        "Smart expense categorization",
        "Personalized budget planning",
        "AI financial mentor",
        "Automated bill reminders",
      ],
    },
  },

  // Page-specific configurations (currently only home page exists)
  pages: {
    home: {
      title:
        "Frugloo - AI-Powered Personal Finance Tracker | Smart Money Management",
      description:
        "Revolutionary AI-powered personal finance app with intelligent debt tracking, smart budgeting, and personalized financial guidance. Transform your money management with artificial intelligence.",
      keywords: [
        "AI personal finance",
        "artificial intelligence budgeting",
        "smart money tracker",
        "AI financial advisor",
        "automated expense tracking",
        "intelligent debt management",
        "AI-powered budgeting app",
        "personal finance AI",
        "smart financial planning",
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
              text: "Frugloo uses advanced AI technology to provide personalized financial guidance, intelligent debt tracking, and smart budgeting recommendations tailored to your lifestyle and spending patterns.",
            },
          },
          {
            "@type": "Question",
            name: "How does the AI financial advisor work?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Our AI learns from your spending habits and financial goals to provide realistic, personalized advice that you can actually stick to, without feeling deprived or overwhelmed.",
            },
          },
          {
            "@type": "Question",
            name: "Is Frugloo free to use?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, Frugloo offers a free AI-powered personal finance tracking experience. Join our waitlist to get early access to all features.",
            },
          },
        ],
      };
    default:
      return null;
  }
}


export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  link: string;
  cta: string;
}

export interface PricingPlan {
  id: string;
  title: string;
  price: string;
  period?: string;
  features: string[];
  recommended?: boolean;
  category: 'social' | 'restaurant' | 'clinic' | 'travel';
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  time: string;
  image?: string;
}

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface Content {
  header: {
    home: string;
    services: string;
    pricing: string;
    contact: string;
    callAction: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
  };
  whyUs: {
    title: string;
    subtitle: string;
    features: Feature[];
  };
  services: {
    title: string;
    subtitle: string;
    items: Service[];
  };
  process: {
    title: string;
    subtitle: string;
    steps: ProcessStep[];
  };
  pricing: {
    title: string;
    subtitle: string;
    categories: { id: string; label: string }[];
    items: PricingPlan[];
  };
  faq: {
    title: string;
    subtitle: string;
    items: FAQItem[];
  };
  testimonials: {
    title: string;
    subtitle: string;
    items: Testimonial[];
  };
  footer: {
    copyright: string;
    address: string;
    phone: string;
  };
}
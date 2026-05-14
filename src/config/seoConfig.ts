// src/config/seoConfig.ts
// Centralized SEO configuration for easy management

export const seoConfig = {
  // Business Information
  businessName: 'Sanjay Arts',
  businessDescription: 'Professional events and media services specializing in cinematic storytelling',
  businessPhone: '+91-YOUR-PHONE-NUMBER', // UPDATE THIS
  businessEmail: 'contact@sanjayarts.com', // UPDATE THIS
  
  // Website Information
  baseUrl: 'https://sanjayarts.com', // UPDATE THIS with your actual domain
  siteName: 'Sanjay Arts',
  siteLanguage: 'en',
  
  // Business Address
  address: {
    streetAddress: 'Your Street Address', // UPDATE THIS
    addressLocality: 'Your City', // UPDATE THIS
    addressRegion: 'Your State', // UPDATE THIS
    postalCode: 'Your Postal Code', // UPDATE THIS
    addressCountry: 'IN',
  },
  
  // Social Media Links
  socialMedia: {
    facebook: 'https://www.facebook.com/sanjayarts', // UPDATE THIS
    instagram: 'https://www.instagram.com/sanjayarts', // UPDATE THIS
    youtube: 'https://www.youtube.com/sanjayarts', // UPDATE THIS
    twitter: 'https://twitter.com/sanjayarts', // UPDATE THIS
  },
  
  // Default Meta Tags
  defaultMeta: {
    title: 'Sanjay Arts - Professional Events & Media Services',
    description: 'Transform your special moments into cinematic stories. Sanjay Arts specializes in professional event coverage, media production, and cinematic storytelling for weddings, corporate events, and celebrations.',
    keywords: 'event photography, event videography, media services, cinematic videos, professional events, wedding videography, corporate events, media production',
    ogImage: 'https://sanjayarts.com/logo.png',
  },
  
  // Pages Configuration
  pages: {
    home: {
      title: 'Sanjay Arts - Professional Events & Media Services',
      description: 'Transform your special moments into cinematic stories. Sanjay Arts specializes in professional event coverage, media production, and cinematic storytelling.',
      keywords: 'events, media, videography, photography, professional services',
      path: '/',
    },
    services: {
      title: 'Our Services - Sanjay Arts',
      description: 'Explore our comprehensive range of professional event photography, videography, and media production services tailored to your needs.',
      keywords: 'event services, photography services, videography services, media production, event coverage',
      path: '/services',
    },
    gallery: {
      title: 'Gallery - Sanjay Arts',
      description: 'View our portfolio of stunning event coverage, cinematic videos, and professional media work. See the quality and creativity we bring to every project.',
      keywords: 'event photos, portfolio, video gallery, cinematic work, event coverage',
      path: '/gallery',
    },
    contact: {
      title: 'Contact Us - Sanjay Arts',
      description: 'Get in touch with Sanjay Arts for your event coverage, media production, or inquiries. We\'re ready to transform your moments into timeless stories.',
      keywords: 'contact us, inquiries, booking, event booking, media services inquiry',
      path: '/contact',
    },
  },
  
  // Services List (for structured data)
  services: [
    'Event Photography',
    'Event Videography',
    'Media Production',
    'Cinematic Storytelling',
    'Corporate Events',
    'Wedding Coverage',
  ],
  
  // Operating Hours (in 24-hour format)
  operatingHours: {
    monday: { opens: '10:00', closes: '22:00' },
    tuesday: { opens: '10:00', closes: '22:00' },
    wednesday: { opens: '10:00', closes: '22:00' },
    thursday: { opens: '10:00', closes: '22:00' },
    friday: { opens: '10:00', closes: '22:00' },
    saturday: { opens: '10:00', closes: '22:00' },
    sunday: { opens: '10:00', closes: '22:00' },
  },
  
  // Analytics (Update after setting up)
  googleAnalyticsId: 'G-YOUR-GA-ID', // UPDATE THIS with your Google Analytics ID
  googleSearchConsoleId: 'YOUR-GSC-ID', // UPDATE THIS
  
  // Meta Tags for Page Sections
  sections: {
    hero: {
      ariaLabel: 'Hero section showcasing Sanjay Arts professional event services',
    },
    services: {
      ariaLabel: 'Services section displaying our offerings',
    },
    gallery: {
      ariaLabel: 'Gallery section with our portfolio',
    },
    contact: {
      ariaLabel: 'Contact section for inquiries',
    },
  },
};

// Helper function to get page SEO config
export const getPageSEO = (pageName: keyof typeof seoConfig.pages) => {
  const page = seoConfig.pages[pageName];
  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    canonical: `${seoConfig.baseUrl}${page.path}`,
  };
};

// Helper to build full URL
export const buildUrl = (path: string) => {
  return `${seoConfig.baseUrl}${path}`.replace(/([^:]\/)\/+/g, '$1');
};

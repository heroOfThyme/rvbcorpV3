import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'Services',
      links: [
        {
          text: 'Web Development',
          href: getPermalink('/web-development'),
        },
        {
          text: 'SEO Services',
          href: getPermalink('/search-engine-optimization'),
        },
        {
          text: 'Business Process Automation',
          href: getPermalink('/business-process-automation'),
        },
        {
          text: 'Google Business Management',
          href: getPermalink('/google-business-management'),
        },
        {
          text: 'Web Hosting',
          href: getPermalink('/web-hosting'),
        },
      ],
    },
    {
      text: 'Portfolio',
      href: getPermalink('/portfolio'),
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
  actions: [
    {
      text: 'Get Started',
      href: getPermalink('/contact'),
      variant: 'primary',
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Services',
      links: [
        { text: 'Web Development', href: getPermalink('/web-development') },
        { text: 'SEO Services', href: getPermalink('/search-engine-optimization') },
        { text: 'Process Automation', href: getPermalink('/business-process-automation') },
        { text: 'Google Business', href: getPermalink('/google-business-management') },
        { text: 'Web Hosting', href: getPermalink('/web-hosting') },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: getPermalink('/about') },
        { text: 'Portfolio', href: getPermalink('/portfolio') },
        { text: 'Blog', href: getBlogPermalink() },
        { text: 'Contact', href: getPermalink('/contact') },
      ],
    },
    {
      title: 'Get in Touch',
      links: [
        { text: 'hello@rvbcorp.com', href: 'mailto:hello@rvbcorp.com' },
        { text: '(365) 324-0642', href: 'tel:3653240642' },
        { text: 'Burlington, ON', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://linkedin.com/company/rvb-data-sciences' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://facebook.com/rvbdatasciences' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://instagram.com/rvbdatasciences' },
  ],
  footNote: `
    © ${new Date().getFullYear()} RVB Data Sciences Corp. All rights reserved.
  `,
};
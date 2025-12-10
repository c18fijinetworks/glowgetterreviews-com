import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'How It Works', href: getPermalink('/#features') },
    { text: 'Lifetime Access - $99 One-Time', href: getPermalink('/pricing') },
  ],
  actions: [
    { text: 'Get Lifetime Access - $99', variant: 'primary', href: '/pricing' }
  ],
};

export const footerData = {
  links: [
    {
      title: 'Resources',
      links: [
        { text: "Order Now. Get Instant Setup - Just $99", href: getPermalink('/pricing') },
        { text: 'Learn More About Us', href: getPermalink('/about') },
        { text: 'Get in Touch', href: getPermalink('/contact') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms of Service', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
  ],
  // THIS LINE IS MODIFIED FOR THE PIPELINE
  footNote: `© 2024 GlowGetter Reviews. All rights reserved.`,
};

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
  footNote: `<img class='w-8 h-8 mr-2 rtl:mr-0 rtl:ml-2 float-left rtl:float-right rounded-sm' src='/images/footer-icon.webp' alt='GlowGetter Reviews' loading='lazy'> © 2025 GlowGetter Reviews. All rights reserved.`,
};

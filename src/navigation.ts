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
      title: 'Grow Your Salon&#39;s Buzz',
      links: [
        { text: "Order Now. Get Instant Setup - Just $99", href: getPermalink('/pricing') },
        { text: 'About Your Shine', href: getPermalink('/about') },
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
  footNote: `<img class='w-8 h-8 mr-2 rtl:mr-0 rtl:ml-2 float-left rtl:float-right rounded-sm' src='/images/footer-icon.webp' alt='GlowGetter Reviews' loading='lazy'> 💖 Growing beautiful businesses. | © ${new Date().getFullYear()} <a class="text-blue-600 underline dark:text-muted" href="#">GlowGetter Reviews</a> All rights reserved.`,
};

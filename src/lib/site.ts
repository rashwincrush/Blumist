export const site = {
  name: 'BluMist Aerial Solutions',
  url: 'https://blumistaerial.com',
  phone: '+91-XXXXXXXXXX',
  email: 'hello@blumistaerial.com',
  whatsapp: '+91-XXXXXXXXXX',
  address: {
    city: 'Chennai',
    state: 'Tamil Nadu',
    country: 'India',
  },
  nav: [
    { label: 'Home', href: '/' },
    { 
      label: 'Services', 
      href: '/services',
      children: [
        { label: 'Aerial Mapping & Survey', href: '/services/mapping-survey' },
        { label: 'Drone Inspections', href: '/services/inspections' },
        { label: 'Agribot Spraying', href: '/services/agribot-spraying' },
        { label: 'Solar Panel Cleaning', href: '/services/solar-cleaning' },
        { label: 'Real Estate Photography', href: '/services/real-estate' },
        { label: 'Event Coverage', href: '/services/events' },
      ]
    },
    { label: 'About', href: '/about' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Contact', href: '/contact' },
  ],
  social: {
    twitter: '#',
    linkedin: '#',
    instagram: '#',
  }
}

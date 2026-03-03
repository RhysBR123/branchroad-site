export interface LinkItem {
  label: string;
  href: string;
}

export const navLinks: LinkItem[] = [
  { label: 'Services', href: 'https://branchroad.media/services/' },
  { label: 'Case studies', href: 'https://branchroad.media/case-studies/' },
  { label: 'About', href: 'https://branchroad.media/about/' },
  { label: 'Blog', href: 'https://branchroad.media/blog/' },
  { label: 'Careers', href: 'https://branchroad.media/careers/' },
  { label: 'Contact', href: 'https://branchroad.media/contact/' },
];

export const footerCompanyLinks: LinkItem[] = [
  { label: 'Services', href: 'https://branchroad.media/services/' },
  { label: 'Case studies', href: 'https://branchroad.media/case-studies/' },
  { label: 'About', href: 'https://branchroad.media/about/' },
  { label: 'Blog', href: 'https://branchroad.media/blog/' },
  { label: 'Careers', href: 'https://branchroad.media/careers/' },
];

export const footerContactLinks: LinkItem[] = [
  { label: 'Get in touch', href: 'https://branchroad.media/contact/' },
  { label: 'hello@branchroad.media', href: 'mailto:hello@branchroad.media' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/branch-road-media/' },
];

export const footer = {
  heading: "What's your story?",
  copy:
    'We make strategic B2B video content for teams that need ideas, execution, and consistent output without bloated production overhead.',
  copyright: '(c) Branch Road 2026',
  privacyLabel: 'Privacy policy',
  privacyHref: 'https://branchroad.media/privacy-policy/',
  creditsLabel: 'Site credits',
  creditsHref: 'https://extract.studio/',
};

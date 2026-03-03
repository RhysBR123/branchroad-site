export interface ExplainerTypeCard {
  video: string;
  label: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  tag: string;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const explainerHero = {
  eyebrow: 'Explainer Video Production',
  title: 'Explainer videos that make complex products easy to buy',
  subtitle:
    'We help B2B tech teams explain complex products in plain language. The result is video content your audience can understand quickly and your team can reuse across web, campaigns, and sales conversations.',
  exampleVideo:
    'https://www.dropbox.com/scl/fi/j0pfd6vo5iita38ul666m/Appear_X5-Animation_FINAL.mp4?rlkey=3bpay7baveneb5wedhfzo7tfi&st=b8opg8mc&raw=1',
};

export const explainerTypes: ExplainerTypeCard[] = [
  {
    video:
      'https://www.dropbox.com/scl/fi/go209g9s79kld20d17i55/2025-video-marketing-trends.mov?rlkey=xievn2hx77q7ileuepdhq70kz&st=9tbsckum&raw=1',
    label: 'Editorial explainer style',
    title: '2025 Video Marketing Trends',
    description:
      'A strong reference for narrative-led explainers that combine opinion, insight, and clear framing for thought-leadership audiences.',
  },
  {
    video:
      'https://www.dropbox.com/scl/fi/j0pfd6vo5iita38ul666m/Appear_X5-Animation_FINAL.mp4?rlkey=3bpay7baveneb5wedhfzo7tfi&st=b8opg8mc&raw=1',
    label: 'Motion-first explainer',
    title: 'Appear X5 Animation',
    description:
      'A clear fit for animation-heavy explainers where product capabilities, systems, or technical value are best communicated through motion graphics.',
  },
  {
    video:
      'https://www.dropbox.com/scl/fi/m3gpi51l9vl5h5xr6jiy5/Keysight-V02c.mp4?rlkey=tj54lldq7opkxkqmzg755pfmq&st=jaktenw5&raw=1',
    label: 'Product + platform explainer',
    title: 'Keysight V02c',
    description:
      'A useful model for explainers that balance product context, platform value, and campaign-ready storytelling in one concise edit.',
  },
  {
    video:
      'https://www.dropbox.com/scl/fi/xw1s25xwccwz7o451w4vq/Interos-v5-FINAL.mp4?rlkey=icevwnejex7aivjzybriwtxf9&st=ri9b89mm&raw=1',
    label: 'Enterprise narrative explainer',
    title: 'Interos v5 Final',
    description:
      'A reference for high-trust enterprise explainers that simplify complex risk or operations narratives without losing strategic depth.',
  },
];

export const processSteps: ProcessStep[] = [
  {
    tag: 'Discover',
    title: 'Strategy and scriptwriting',
    description:
      'We align on audience, messaging, and objectives, then build a script around the decisions your buyer needs to make.',
  },
  {
    tag: 'Design',
    title: 'Storyboard and pre-production',
    description:
      'We shape visual direction, pacing, and format before production starts so feedback happens early and efficiently.',
  },
  {
    tag: 'Produce',
    title: 'Production and post-production',
    description:
      'We produce in the agreed format - live action, animation, or hybrid - then edit for clarity and consistency.',
  },
  {
    tag: 'Deploy',
    title: 'Versioning and handoff',
    description:
      'We deliver your core explainer plus channel-specific versions for web, paid, and sales use.',
  },
];

export const explainerFaq: FaqItem[] = [
  {
    question: 'What is included in your explainer video production service?',
    answer:
      'Everything required for a finished asset: strategy, scriptwriting, storyboarding, production, editing, subtitles, branded graphics, and music licensing.',
  },
  {
    question: 'Do you produce animated explainer videos and live-action explainers?',
    answer:
      'Yes. We recommend live action, animation, or hybrid formats based on your audience, product complexity, and campaign objective.',
  },
  {
    question: 'How long does a typical explainer project take?',
    answer:
      'Most projects take 3 to 6 weeks. Timeline depends on complexity, approvals, and the number of versions needed.',
  },
  {
    question: 'Can you work with our internal team and fixed budget?',
    answer:
      'Yes. We regularly collaborate with internal teams and can scope clear options around fixed budgets.',
  },
];

export const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Explainer Video Production',
  provider: {
    '@type': 'Organization',
    name: 'Branch Road Media',
  },
  description:
    'Explainer video production and animated explainer video production for B2B tech companies, including strategy, scripting, storyboarding, production, and post-production.',
  offers: {
    '@type': 'Offer',
    priceCurrency: 'GBP',
    price: '3500',
    description:
      'Starting from GBP 3,500 per explainer video. Includes scripting, production, and two revision rounds.',
  },
};

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: explainerFaq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

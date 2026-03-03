export interface StatItem {
  target: number;
  suffix: string;
  label: string;
}

export interface LogoItem {
  src: string;
  alt: string;
  fallback: string;
}

export interface ServiceVideo {
  label: string;
  src: string;
}

export interface ServiceSectionData {
  id: string;
  theme: 'dark' | 'light';
  jumpLabel: string;
  label: string;
  title: string;
  emphasis: string;
  description: string[];
  subtleLink?: {
    label: string;
    href: string;
  };
  features: string[];
  testimonial: {
    quote: string;
    author: string;
    company: string;
  };
  exampleText: string;
  videos: ServiceVideo[];
  priceFrom: string;
  priceNote: string;
  cta: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const homeHero = {
  badge: 'Video Production & Animation',
  title: 'B2B video, minus the B2B voice',
  subtitle:
    'Customer stories, explainer videos, event capture, and animation for tech companies that want content worth watching.',
  backgroundVideo:
    'https://www.dropbox.com/scl/fi/j0pfd6vo5iita38ul666m/Appear_X5-Animation_FINAL.mp4?rlkey=3bpay7baveneb5wedhfzo7tfi&st=b8opg8mc&raw=1',
  primaryCta: {
    label: 'Start a project ->',
    href: '#contact',
  },
  secondaryCta: {
    label: 'See what we make v',
    href: '#customer-stories',
  },
};

export const homeStats: StatItem[] = [
  { target: 200, suffix: '+', label: 'Videos delivered' },
  { target: 13, suffix: '', label: 'Years in B2B' },
  { target: 40, suffix: '+', label: 'B2B tech clients' },
];

export const clientLogos: LogoItem[] = [
  { src: '/logos/Samsara-Logo.jpg', alt: 'Samsara logo', fallback: 'Samsara' },
  { src: '/logos/ServiceNow-Logo.png', alt: 'ServiceNow logo', fallback: 'ServiceNow' },
  { src: '/logos/960px-HP_logo_2012.svg.png', alt: 'HP logo', fallback: 'HP' },
  { src: '/logos/ifs_assyst_logo_positive.png', alt: 'IFS Assyst logo', fallback: 'IFS Assyst' },
  { src: '/logos/appear-logo.png', alt: 'Appear logo', fallback: 'Appear' },
  { src: '/logos/SAS_logo_horiz.svg', alt: 'SAS logo', fallback: 'SAS' },
  { src: '/logos/DBX.png', alt: 'Dropbox logo', fallback: 'Dropbox' },
  { src: '/logos/Okta-Logo.png', alt: 'Okta logo', fallback: 'Okta' },
  { src: '/logos/Keysight-Logo.wine.png', alt: 'Keysight logo', fallback: 'Keysight' },
  { src: '/logos/NTT-DATA-Logo-HumanBlue.webp', alt: 'NTT Data logo', fallback: 'NTT Data' },
];

export const serviceSections: ServiceSectionData[] = [
  {
    id: 'customer-stories',
    theme: 'dark',
    jumpLabel: 'Customer Story Videos',
    label: 'Customer Story Videos',
    title: 'Customer story videos',
    emphasis: '& storytelling',
    description: [
      'Your happiest customers are your best salespeople -- but only if they get to tell a real story, not deliver a testimonial. We do the prep work to find the narrative that matters, get your customers comfortable on camera, and edit it into something with a genuine arc.',
      'The result is a video your sales team actually uses, your prospects actually trust, and your customer is proud to share.',
    ],
    features: [
      'Pre-production that does the heavy lifting: customer briefing, story arc development, and interview preparation',
      'On-location filming with professional crew (or remote capture for global customers)',
      'Hero cuts, social edits (30s, 60s), and quote clips',
      'Subtitles, branded graphics, and music licensing included',
    ],
    testimonial: {
      quote:
        '"Branch Road turned a 45-minute customer interview into the single most-used asset in our sales cycle. The video paid for itself in the first month."',
      author: '[Name], [Title]',
      company: '[Company]',
    },
    exampleText:
      'Example project: [EXAMPLE] -- 3-minute customer story driving 2x pipeline conversion vs. product demos',
    videos: [
      {
        label: 'Example 1',
        src: 'https://www.dropbox.com/scl/fi/i86ai3zxahkq3rk81dbdy/Samsara-x-MTS.mov?rlkey=7h6hgkmshzl0aroc0imxr4bsy&st=15l0twya&raw=1',
      },
      {
        label: 'Example 2',
        src: 'https://www.dropbox.com/scl/fi/7b0lvk9si29hrmra0n7ju/Dropbox-DocSend-x-Wizard-Ventures.mov?rlkey=peqcv0q2gm7b8gt6ov0e5rp3g&st=281nrule&raw=1',
      },
    ],
    priceFrom: '£4,500',
    priceNote: 'Per story. Includes filming day, editing, and social cuts.',
    cta: "Let's discuss your next customer story ->",
  },
  {
    id: 'events',
    theme: 'light',
    jumpLabel: 'Event Videography',
    label: 'Event Videography',
    title: 'Event video production',
    emphasis: '& live capture',
    description: [
      "A good event is a content goldmine. We embed with your team before the event to plan what we're capturing and why -- then film keynotes, interviews, vox pops, and b-roll and turn it into a content library your marketing team can run on for months.",
    ],
    features: [
      'Pre-event content planning aligned to your post-event campaign calendar',
      'Multi-event capture: keynotes, breakouts, interviews, and atmosphere',
      "Fast-turnaround social video highlights while the event's still trending",
      'Full content library: session recordings, sizzle reel, speaker clips, and testimonials',
    ],
    testimonial: {
      quote:
        '"We got 25 pieces of content from a single-day event. Our social calendar was sorted for two months."',
      author: '[Name], [Title]',
      company: '[Company]',
    },
    exampleText:
      'Example project: [EXAMPLE] -- Full event capture producing 25+ content assets from a single-day conference',
    videos: [
      {
        label: 'Example 1',
        src: 'https://www.dropbox.com/scl/fi/yr6iy724e43371eamafpb/Samsara_Summer-SUG_Event-Sizzle_V2.mp4?rlkey=twic39v05ttzoiln4l8w3gzl5&st=jz5gvdnr&raw=1',
      },
      {
        label: 'Example 2',
        src: 'https://www.dropbox.com/scl/fi/cwgtylh2k1efwxf7kl47o/HP_London-Creates_LONG_16-9_FINAL_Sept25.mp4?rlkey=wv2jonuf58fcyoxlboex8ucr8&st=yol093fw&raw=1',
      },
    ],
    priceFrom: '£2,500',
    priceNote: 'Per day. Scales with crew size, deliverables, and event complexity.',
    cta: 'Plan your event coverage ->',
  },
  {
    id: 'explainers',
    theme: 'dark',
    jumpLabel: 'Explainer Videos',
    label: 'Explainer Video Production',
    title: 'Explainer video',
    emphasis: 'production',
    description: [
      "A good explainer video doesn't just describe your product -- it closes the gap between what your audience knows and what they need to understand. We start with that gap, then build the fastest route across it.",
      'Live action, animated explainer video production, screen capture, or a blend -- whatever the format, the job is the same: making your product make sense to the people who need to buy it.',
    ],
    subtleLink: {
      label: 'Let us explain ->',
      href: '/explainer-video-production',
    },
    features: [
      'Scriptwriting grounded in audience research',
      'Storyboarding and visual treatment before a single frame is produced',
      'Professional voiceover and music',
      'Versioning for different audiences, platforms, and campaign stages',
    ],
    testimonial: {
      quote:
        '"We\'d tried three agencies before. Branch Road was the first to actually understand what our product does before picking up a camera."',
      author: '[Name], [Title]',
      company: '[Company]',
    },
    exampleText:
      'Example project: [EXAMPLE] -- 90-second product explainer used across paid social and sales outreach',
    videos: [
      {
        label: 'Example 1',
        src: 'https://www.dropbox.com/scl/fi/m3gpi51l9vl5h5xr6jiy5/Keysight-V02c.mp4?rlkey=tj54lldq7opkxkqmzg755pfmq&st=jaktenw5&raw=1',
      },
      {
        label: 'Example 2',
        src: 'https://www.dropbox.com/scl/fi/xw1s25xwccwz7o451w4vq/Interos-v5-FINAL.mp4?rlkey=icevwnejex7aivjzybriwtxf9&st=ri9b89mm&raw=1',
      },
    ],
    priceFrom: '£3,500',
    priceNote: 'Per video. Includes scripting, production, and two revision rounds.',
    cta: 'Brief us on your explainer ->',
  },
  {
    id: 'motion',
    theme: 'light',
    jumpLabel: 'Motion & Animation',
    label: 'Motion Graphics & Animation',
    title: 'Motion graphics',
    emphasis: '& animation',
    description: [
      "You can't photograph a data flow. You can't film a platform architecture. We create motion graphics and 2D animation for the stuff that only makes sense when it moves -- complex workflows, product demos, data visualisation.",
    ],
    features: [
      'Concept development and storyboarding tied to your brand guidelines',
      '2D animation, kinetic typography, icon animation, and data visualisation',
      'Standalone animated videos or integrated into live-action edits',
      'Reusable asset libraries for ongoing campaigns and social content',
    ],
    testimonial: {
      quote:
        '"The animations they built for our platform demo have been repurposed across sales decks, webinars, and paid social. Huge ROI."',
      author: '[Name], [Title]',
      company: '[Company]',
    },
    exampleText:
      'Example project: [EXAMPLE] -- Animated product walkthrough used in onboarding and sales enablement',
    videos: [
      {
        label: '2D',
        src: 'https://www.dropbox.com/scl/fi/3gyymh5pgfyslnsziyb9w/IFS-assyst_Homepage-GFX.mp4?rlkey=0i4p0pewgjpjja9jna9limvu3&st=oscnh0m5&raw=1',
      },
      {
        label: '3D',
        src: 'https://www.dropbox.com/scl/fi/dgukxjd3ckm7upqnkzgf6/Appear_X5_updated.mp4?rlkey=h4vr5bkjzv8euvwdnr4irf97h&st=z5e6i4aw&raw=1',
      },
    ],
    priceFrom: '£3,000',
    priceNote: 'Per minute of finished animation. Complexity and style affect final cost.',
    cta: 'Talk to us about animation ->',
  },
  {
    id: 'fireside',
    theme: 'dark',
    jumpLabel: 'Podcasts & Webinars',
    label: 'Webinar & Podcast Production',
    title: 'Fireside chats, webinars',
    emphasis: '& podcasts',
    description: [
      "Smart people having real conversations is the best content format in B2B. It's also the easiest to do badly. We take care of guest prep, topic development, recording, editing, and multi-channel distribution -- so your experts just show up and talk.",
      "Full-service podcast production, one-off webinar recordings, executive fireside chats. Whatever the format, it'll sound and look good.",
    ],
    features: [
      'Guest preparation, topic development, and conversation guides (not rigid scripts)',
      'Studio or remote recording with professional audio and multi-cam video',
      'Full post-production: editing, audiograms, highlight clips, and show notes',
      'Ongoing series production with consistent branding and scheduling',
    ],
    testimonial: {
      quote:
        '"We went from zero podcast to 5,000 monthly listeners in three months. Branch Road handles everything -- we just show up and talk."',
      author: '[Name], [Title]',
      company: '[Company]',
    },
    exampleText:
      'Example project: [EXAMPLE] -- Monthly thought leadership podcast producing 12+ social assets per episode',
    videos: [
      {
        label: 'Example 1',
        src: 'https://www.dropbox.com/scl/fi/qtzx1h1s87ads95sz6yjn/IFS-Assyst-11.5-v3.1-FULL.mp4?rlkey=555kein8p862n1t2wolb9apjd&st=n0onkvox&raw=1',
      },
      {
        label: 'Example 2',
        src: 'https://www.dropbox.com/scl/fi/ejyeqqs98a4zcvmajqpm7/ServiceNow_Town-Hall-CMO-Interview_V2.mp4?rlkey=jx4b3am7yss9lbtey43hgzwwx&st=47naaeze&raw=1',
      },
      {
        label: 'Example 3',
        src: 'https://www.dropbox.com/scl/fi/cka4nygjhk0bf5y1x6o9n/Samsara_GoBeyond_Matt-Reid-Fireside-Chat_1.2.mp4?rlkey=ecr6zgkwina5s1k09s8pjukat&st=v6pcpo5z&raw=1',
      },
    ],
    priceFrom: '£2,000',
    priceNote: 'Per episode. Includes recording, editing, and social cuts. Series discounts available.',
    cta: 'Start your series ->',
  },
];

export const homeFaq: FaqItem[] = [
  {
    question: 'What do the "starting from" prices include?',
    answer:
      'Everything you need for a finished, usable asset: pre-production planning, filming or production, editing, branded graphics, subtitles, and music licensing. Final cost depends on complexity: locations, interview subjects, animation detail, and number of deliverable versions.',
  },
  {
    question: 'Can you work within a fixed budget?',
    answer:
      "Always. Tell us the number and we'll tell you what's achievable. We'd rather scope something realistic than over-promise and deliver something mediocre.",
  },
  {
    question: 'Do you offer retainer or package pricing for ongoing work?',
    answer:
      'Yes. If you need regular content, we offer retainer arrangements with preferential rates and faster output once the workflow is embedded.',
  },
  {
    question: 'What\'s not included in the starting price?',
    answer:
      'Travel and accommodation outside London are quoted separately, as are specialist add-ons like drone footage, studio hire, or premium voice talent.',
  },
  {
    question: 'What does the production process look like from start to finish?',
    answer:
      'Briefing call -> creative treatment and production plan -> approval -> production -> first cut for review -> revisions (usually two rounds) -> final delivery formats.',
  },
  {
    question: 'How long does a typical project take?',
    answer:
      'Customer story and explainer projects usually run 3 to 4 weeks. More complex animation or multi-day event coverage can run 4 to 8 weeks.',
  },
  {
    question: 'How many revision rounds do we get?',
    answer:
      'Two rounds are included as standard. Extra revision rounds are scoped only when project scope changes.',
  },
  {
    question: 'Can you film internationally or work with remote customers?',
    answer:
      'Yes to both. We film internationally where needed and also run remote interview captures with broadcast-quality audio/video workflows.',
  },
  {
    question: 'We have internal video capabilities -- why would we use you?',
    answer:
      'Internal teams are excellent for speed and volume. We add value in strategy, storytelling, and turning one shoot into multiple campaign assets.',
  },
  {
    question: 'Do you only work with B2B tech companies?',
    answer:
      "Most of our work is B2B tech, but we also support teams selling complex services to smart, skeptical buyers in adjacent sectors.",
  },
  {
    question: 'What do you need from us to get started?',
    answer:
      'A short call is enough to get started. If you have a brief, brand guidelines, or references, share them; if not, we can still scope it with you.',
  },
];

export const selectorOptions = [
  { name: 'Explainer Video Production', price: 3500 },
  { name: 'Motion Graphics & Animation', price: 3000 },
  { name: 'Webinar & Podcast Production', price: 2000 },
  { name: 'Event Videography', price: 2500 },
  { name: 'Customer Story Videos', price: 4500 },
];

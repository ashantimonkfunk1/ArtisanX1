/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Artisan, BlogPost, FeaturedProject, Testimonial, Job } from './types';

export const COLORS = {
  primary: '#082A4B',    // Navy Blue
  secondary: '#B6D400',  // Lime Green
  accent: '#D4AF37',     // Gold
  white: '#FFFFFF',
  dark: '#222222',       // Dark Charcoal
};

export const SERVICES = [
  {
    id: 'metal-works',
    title: 'Metal Works',
    description: 'Structural steel fabrication, high-security reinforcements, custom gates, and industrial solutions built with precision.',
    image: 'https://imgur.com/RhdthDY.png',
    subTrades: [
      'Welding',
      'Aluminium Fabrication',
      'Steel Structures',
      'Burglar Proofs',
      'Industrial Fabrication',
      'Gate Automation',
      'Steel Railings',
      'Metal Roofing',
      'Container Conversions'
    ]
  },
  {
    id: 'masonry',
    title: 'Masonry',
    description: 'Expert brickwork, concrete foundations, beautiful POP plasterings, tiling, and structural masonry work for premium real estate.',
    image: 'https://imgur.com/ThSFHCx.png',
    objectPosition: 'center 20%',
    subTrades: [
      'Bricklaying',
      'Plastering',
      'Rendering',
      'Floor Screeding',
      'Concrete Works',
      'Foundations',
      'Interlocking',
      'POP Ceiling',
      'Tiling'
    ]
  },
  {
    id: 'painting',
    title: 'Painting',
    description: 'Flawless interior and exterior painting, textured walls, wall branding, and highly weather-resistant protective coatings.',
    image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=800&q=80',
    subTrades: [
      'Interior Painting',
      'Exterior Painting',
      'Spray Painting',
      'Decorative Finishes',
      'Industrial Coating',
      'Wall Branding',
      'Waterproofing'
    ]
  },
  {
    id: 'plumbing',
    title: 'Plumbing',
    description: 'Comprehensive plumbing systems, borehole installations, water pumps, heater systems, and elegant pool construction.',
    image: 'https://imgur.com/2vtbEPC.png',
    objectPosition: 'center 20%',
    subTrades: [
      'Pipe Installation',
      'Repairs',
      'Boreholes',
      'Drainage',
      'Water Pumps',
      'Swimming Pools',
      'Water Heaters',
      'Biogas',
      'Water Storage Systems'
    ]
  },
  {
    id: 'woodworks',
    title: 'Woodworks & Carpentry',
    description: 'Bespoke kitchen cabinets, modern custom wardrobes, premium wooden flooring, doors, and architectural pergolas.',
    image: 'https://imgur.com/Dat50of.png',
    splitImages: [
      'https://imgur.com/Dat50of.png',
      'https://imgur.com/WYz6EP6.png'
    ],
    objectPositions: [
      'center 20%',
      'center'
    ],
    subTrades: [
      'Kitchen Cabinets',
      'Wardrobes',
      'Custom Furniture',
      'Doors',
      'Pergolas',
      'Wood Flooring',
      'Carpentry',
      'Joinery'
    ]
  },
  {
    id: 'electrical',
    title: 'Electrical Engineering',
    description: 'Complete certified wiring, smart home automation, high-yield solar arrays, DSTV, CCTV, and backup generators.',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
    subTrades: [
      'House Wiring',
      'Meter Installation',
      'Solar Systems',
      'CCTV',
      'DSTV',
      'Generators',
      'Smart Homes',
      'Security Systems'
    ]
  },
  {
    id: 'decor',
    title: 'Interior & Exterior Decor',
    description: 'Visual space planning, gypsum boards, acoustic wood panels, statement lighting, and premium landscaping.',
    image: 'https://imgur.com/kEIv2Nw.png',
    splitImages: [
      'https://imgur.com/kEIv2Nw.png',
      'https://imgur.com/58IHpQJ.png'
    ],
    objectPositions: [
      'center',
      'center'
    ],
    subTrades: [
      'Gypsum Ceiling',
      'Wall Panels',
      'TV Units',
      'Curtains',
      'Lighting Design',
      'Resin Floors',
      'Landscaping',
      'Wall Art'
    ]
  },
  {
    id: 'cleaning',
    title: 'Cleaning & Maintenance',
    description: 'Detailed post-construction deep cleans, office sanitizing, gardening, expert pest control, and household support.',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
    subTrades: [
      'Home Cleaning',
      'Office Cleaning',
      'Laundry',
      'Gardening',
      'Pest Control',
      'Waste Removal',
      'Post Construction Cleaning'
    ]
  }
];

export const WHY_CHOOSE_US = [
  {
    title: 'Trusted Professionals',
    description: 'Every artisan is carefully interviewed, reference-checked, and assessed for technical skill before onboarding.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Fast Delivery',
    description: 'Our digital routing dispatch ensures verified support arrives at your doorstep or job site exactly on schedule.',
    icon: 'Zap'
  },
  {
    title: 'Quality Guaranteed',
    description: 'Every project comes with a satisfaction warranty. If there is a dispute, we fix it with no additional charge.',
    icon: 'Award'
  },
  {
    title: 'Security For Both Parties',
    description: 'All payments are escrowed safely until milestones are fully approved and certified by our group leaders.',
    icon: 'Lock'
  },
  {
    title: 'Transparent Pricing',
    description: 'Get immediate itemized, real-market estimations with no hidden markups or sudden cost increases mid-job.',
    icon: 'DollarSign'
  },
  {
    title: 'Verified Background Checks',
    description: 'Full identity scans, criminal records clearing, and local references checks to guarantee your safety.',
    icon: 'UserCheck'
  },
  {
    title: 'Project Tracking',
    description: 'Receive real-time progress photo updates and milestone tracking directly on your digital client dashboard.',
    icon: 'TrendingUp'
  },
  {
    title: 'Dedicated Group Leaders',
    description: 'Every job is monitored by a senior certified group leader who acts as your direct liaison and site foreman.',
    icon: 'Users'
  }
];

export const WORK_PROCESS = [
  { step: '01', title: 'Client Contacts Us', desc: 'Reach out online, on WhatsApp, or book via our online portal.' },
  { step: '02', title: 'Free Inspection', desc: 'Our certified group leader reviews the site and details.' },
  { step: '03', title: 'Quotation', desc: 'Get an itemized breakdown of materials, labor, and schedules.' },
  { step: '04', title: 'Confirmation', desc: 'Approve the contract and activate the project with secure escrow.' },
  { step: '05', title: 'Payment Enacted', desc: 'Funds are securely escrowed and released incrementally upon milestone approval.' },
  { step: '06', title: 'Artisans Assigned', desc: 'Verified specialists best suited for your trade are routed.' },
  { step: '07', title: 'Dedicated Group Leader', desc: 'A senior coordinator is assigned to manage standards.' },
  { step: '08', title: 'Work Begins', desc: 'Artisans execute assignments following high-precision protocols.' },
  { step: '09', title: 'Quality Inspection', desc: 'Group leader performs rigorous diagnostic runs and check-offs.' },
  { step: '10', title: 'Completion', desc: 'Final walkthrough with client to hand over the polished site.' },
  { step: '11', title: 'Client Satisfaction', desc: 'Ratings are logged, escrow is released, and warranties are activated.' }
];

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    id: 'project-1',
    title: 'Luxury Mansion Painting & Finishes',
    category: 'Painting',
    location: 'East Legon, Accra',
    imageBefore: 'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=600&q=80', // raw wall
    imageAfter: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80', // luxury painted
    description: 'Complete multi-layered weather-proof exterior protective paint job and high-end textured POP living room ceilings.',
    year: '2026'
  },
  {
    id: 'project-2',
    title: 'Modern Bespoke Kitchen Fit-Out',
    category: 'Woodworks',
    location: 'Airport Residential, Accra',
    imageBefore: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=600&q=80', // empty kitchen
    imageAfter: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80', // modern luxurious cabinets
    description: 'Custom hardwood mahogany floating kitchen cabinets and automated drawer installations with smart organizers.',
    year: '2025'
  },
  {
    id: 'project-3',
    title: 'Complete Smart Electrical Overhaul',
    category: 'Electrical',
    location: 'Trasacco Valley, Accra',
    imageBefore: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=600&q=80', // messy wiring
    imageAfter: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80', // clean electrical panel
    description: 'Upgrading a massive 6-bedroom luxury villa with safe automated circuit control systems, DSTV distribution, and backup generator transfer switches.',
    year: '2026'
  },
  {
    id: 'project-4',
    title: 'Infinity Swimming Pool Plumbing & Filters',
    category: 'Plumbing',
    location: 'Cantonments, Accra',
    imageBefore: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=600&q=80', // raw concrete hole
    imageAfter: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=600&q=80', // completed swimming pool
    description: 'State-of-the-art dual pump water recycling array, automated heaters, and high-efficiency sand filter installation.',
    year: '2026'
  },
  {
    id: 'project-5',
    title: 'Industrial Container Office Conversion',
    category: 'Metal Works',
    location: 'Tema Community 25, Tema',
    imageBefore: 'https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&w=600&q=80', // rusted container
    imageAfter: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=600&q=80', // modern office interior
    description: 'Constructing a dynamic dual-storey creative space using repurposed shipping containers with high-performance polyurethane insulation.',
    year: '2025'
  },
  {
    id: 'project-6',
    title: 'Acoustic Wall Panels & Gypsum Ceiling',
    category: 'Interior & Exterior Decor',
    location: 'Ahodwo, Kumasi',
    imageBefore: 'https://images.unsplash.com/photo-1585409605803-36c7328221a2?auto=format&fit=crop&w=600&q=80', // block walls
    imageAfter: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80', // beautiful wooden panel studio
    description: 'Custom walnut acoustic baffles, perimeter LED strip light troughs, and elegant plasterboard styling for a commercial recording studio.',
    year: '2026'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Kofi Owusu-Ansah',
    role: 'Property Developer',
    location: 'Cantonments, Accra',
    quote: 'Finding reliable artisans in Accra has always been a game of chance. ArtisanXpress changed everything. The dedicated group leader checked every square inch of our tiling. Absolute class.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150&q=80'
  },
  {
    id: 't-2',
    name: 'Dr. Ama Osei',
    role: 'Homeowner',
    location: 'Trasacco Valley, Accra',
    quote: 'They completed my luxury kitchen woodwork while I was away in Kumasi. The daily photo updates on my dashboard and the group leader supervision gave me 100% peace of mind. Five-star service!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=150&h=150&q=80'
  },
  {
    id: 't-3',
    name: 'Emmanuel Tetteh',
    role: 'Hotel Operations Manager',
    location: 'Takoradi',
    quote: 'Our hotel experienced a critical emergency borehole pump failure at 5 AM. We placed an emergency request, and ArtisanXpress had a certified plumber and technician on-site in under 45 minutes.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80'
  },
  {
    id: 't-4',
    name: 'Naa Adjeley Mensah',
    role: 'Retail Business Owner',
    location: 'Tema Community 25',
    quote: 'Fantastic post-construction deep clean of our new boutique. Extremely thorough. They even organized the waste disposal and did a full pesticide spraying. Very professional crew.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80'
  }
];

export const FAQS = [
  {
    question: 'How do I hire an artisan?',
    answer: 'Simply click "Book an Artisan" or use our "Project Cost Estimator". You can specify your location, trade required, and task description. You will get connected instantly with a verified professional and assigned a dedicated group leader to manage the project.'
  },
  {
    question: 'How do payments work?',
    answer: 'ArtisanXpress operates on a secure escrow model. When you approve the quote, you fund the project. The payment is held securely in our escrow system and released in milestones only when the group leader inspects the quality and you confirm your satisfaction.'
  },
  {
    question: 'Can I track my project?',
    answer: 'Absolutely! Our premium Client Dashboard allows you to view active milestones, tick off completed checklist items, view live photo updates taken by the group leader on-site, track payment history, and receive text alerts.'
  },
  {
    question: 'Are artisans verified?',
    answer: 'Yes, 100%. Every single artisan undergoes three levels of vetting: (1) Identity & Background Check including criminal history, (2) Rigorous practical skills assessments by our trade heads, and (3) In-person reference and guarantor confirmations.'
  },
  {
    question: 'Can businesses register?',
    answer: 'Yes! We support property developers, office managers, hotels, and construction companies. We provide itemized VAT invoices, dedicated commercial group leaders, and flexible service level agreements.'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'Top 5 Home Improvement Upgrades to Boost Property Value',
    category: 'Home Improvement',
    snippet: 'Strategic, high-ROI updates to immediately boost rental yields and value in premium residential areas.',
    content: 'Upgrading premium residential property in Accra requires targeted investments. These five high-ROI projects yield the highest returns in rental and resale value with minimal downtime:',
    bullets: [
      { title: 'POP Ceilings & LED Coves', desc: 'Moisture-resistant gypsum coves with warm recessed LEDs elevate living spaces instantly.' },
      { title: 'Hybrid Solar Backup Systems', desc: 'Bypass power interruptions seamlessly with quiet, high-efficiency inverter battery setups.' },
      { title: 'Smart Biometric Door Locks', desc: 'Keyless entry pads and remote security features appeal highly to modern corporate tenants.' },
      { title: 'Modular Kitchen Cabinets', desc: 'Sleek soft-close hinges and acrylic finishes designed to resist local humidity.' },
      { title: 'Elastomeric External Waterproofing', desc: 'Prevents paint peeling, mold, and concrete blistering caused by the coastal sea air.' }
    ],
    author: 'Kwadwo Boateng (Head Architect)',
    date: 'June 18, 2026',
    readTime: '2 min read',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'blog-2',
    title: 'Understanding Electrical Safety & Solar Backups in Ghana',
    category: 'Solar Energy',
    snippet: 'Keep your smart homes running seamlessly without the stress of voltage fluctuations or power cuts.',
    content: 'With frequent grid changes, voltage stabilization is critical for luxury gadgets in your home. This article outlines the step-by-step sizing of solar inverter battery systems tailored for Ghanaian weather, the importance of safe transfer switch installations, and why regular circuit diagnostic check-ups prevent expensive wire overloads.',
    author: 'Ebenezer Lartey (Senior Engineer)',
    date: 'May 29, 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'blog-3',
    title: 'The Ultimate Guide to Selecting Weather-Resistant Paint in Accra',
    category: 'Painting Ideas',
    snippet: 'High humidity and salty sea breezes can ruin paint. Learn how to protect your exterior walls.',
    content: 'The salty, coastal environment of Accra and Cape Coast causes cheap paints to blister and peel. We explore high-tech elastomeric waterproofing undercoats, custom anti-fungal paint treatments, and professional application protocols that keep your exterior facades pristine for up to ten years.',
    author: 'Francis Kwakye (Master Painter)',
    date: 'April 14, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=400&q=80'
  }
];

export const INITIAL_ARTISANS: Artisan[] = [
  {
    id: 'art-1',
    name: 'Kojo Mensah',
    trade: 'Plumbing',
    subTrades: ['Pipe Installation', 'Boreholes', 'Water Heaters', 'Water Pumps'],
    location: 'East Legon, Accra',
    rating: 4.9,
    completedJobs: 142,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80',
    verified: true,
    phone: '0591222901',
    available: true,
    emergency: true,
    bio: 'Certified Master Plumber with over 8 years experience specializing in modern plumbing installations, complex pressure pumps, and agricultural borehole drilling.'
  },
  {
    id: 'art-2',
    name: 'Yaa Asantewaa Lartey',
    trade: 'Electrical',
    subTrades: ['House Wiring', 'Solar Systems', 'Smart Homes', 'CCTV'],
    location: 'Airport Residential, Accra',
    rating: 4.95,
    completedJobs: 89,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80',
    verified: true,
    phone: '0591222902',
    available: true,
    emergency: false,
    bio: 'Certified KNUST Electrical Engineering graduate specializing in luxury smart home automations, safe distribution panels, and solar backup power systems.'
  },
  {
    id: 'art-3',
    name: 'Kwame Osei',
    trade: 'Woodworks',
    subTrades: ['Kitchen Cabinets', 'Wardrobes', 'Custom Furniture', 'Pergolas'],
    location: 'Cantonments, Accra',
    rating: 4.8,
    completedJobs: 210,
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&h=150&q=80',
    verified: true,
    phone: '0591222903',
    available: false,
    emergency: false,
    bio: 'Cabinet-maker extraordinaire with a passion for mahogany and premium wood craftsmanship. Designed luxury fit-outs for major residential towers.'
  },
  {
    id: 'art-4',
    name: 'Francis Appiah',
    trade: 'Painting',
    subTrades: ['Interior Painting', 'Exterior Painting', 'Decorative Finishes', 'Waterproofing'],
    location: 'Trasacco Valley, Accra',
    rating: 4.85,
    completedJobs: 115,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80',
    verified: true,
    phone: '0591222901',
    available: true,
    emergency: true,
    bio: 'Experienced decorative painter specializing in multi-texture Italian plaster finishes, anti-mold sealing, and high-rise exterior spraying.'
  },
  {
    id: 'art-5',
    name: 'Abena Boadi',
    trade: 'Cleaning Services',
    subTrades: ['Home Cleaning', 'Office Cleaning', 'Post Construction Cleaning'],
    location: 'Tema Community 25, Tema',
    rating: 4.9,
    completedJobs: 156,
    avatar: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=150&h=150&q=80',
    verified: true,
    phone: '0591222902',
    available: true,
    emergency: true,
    bio: 'Professional maintenance coordinator delivering ultra-premium sanitizing, post-construction deep cleanings, and high-efficiency office care.'
  },
  {
    id: 'art-6',
    name: 'Sylvester Tetteh',
    trade: 'Masonry',
    subTrades: ['Concrete Works', 'POP Ceiling', 'Tiling', 'Interlocking'],
    location: 'Kumasi',
    rating: 4.75,
    completedJobs: 174,
    avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=150&h=150&q=80',
    verified: true,
    phone: '0591222903',
    available: true,
    emergency: false,
    bio: 'Structural bricklaying and floor tiling expert known for pristine linear laser alignments and high-durability concrete foundational pours.'
  }
];

export const INITIAL_JOBS: Job[] = [
  {
    id: 'job-101',
    clientName: 'Kwame Okyere',
    clientPhone: '0543210987',
    clientEmail: 'okyeremakwame@gmail.com',
    trade: 'Woodworks',
    description: 'Custom Mahogany Kitchen Cabinet units & linear floating shelving for Cantonments modern townhouse.',
    status: 'in_progress',
    location: 'Cantonments, Accra',
    costEstimate: 4200,
    assignedArtisanId: 'art-3',
    assignedArtisanName: 'Kwame Osei',
    groupLeaderName: 'Ing. David Mensah (Group Leader)',
    dateCreated: '2026-06-20',
    photos: [
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80'
    ],
    payments: [
      { id: 'p-1', amount: 2100, date: '2026-06-20', status: 'paid', description: '50% Initial Escrow Deposit' },
      { id: 'p-2', amount: 2100, date: 'Pending approval', status: 'pending', description: '50% Final Completion Release' }
    ],
    progress: 65,
    checklist: [
      { id: 'c-1', task: 'Site measurement and wood selection', completed: true },
      { id: 'c-2', task: 'Structural framework assembly', completed: true },
      { id: 'c-3', task: 'Hinge and soft-close mechanisms alignment', completed: true },
      { id: 'c-4', task: 'Premium walnut staining and lacquer spray', completed: false },
      { id: 'c-5', task: 'On-site installation and final inspection', completed: false }
    ]
  },
  {
    id: 'job-102',
    clientName: 'Kwame Okyere',
    clientPhone: '0543210987',
    clientEmail: 'okyeremakwame@gmail.com',
    trade: 'Electrical',
    description: 'Solar power backup inverter system (5kVA Hybrid Inverter + 4x Lithium Batteries) for clean power.',
    status: 'completed',
    location: 'Trasacco Valley, Accra',
    costEstimate: 8500,
    assignedArtisanId: 'art-2',
    assignedArtisanName: 'Yaa Asantewaa Lartey',
    groupLeaderName: 'Ing. David Mensah (Group Leader)',
    dateCreated: '2026-06-15',
    completionDate: '2026-06-19',
    photos: [
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80'
    ],
    payments: [
      { id: 'p-3', amount: 4250, date: '2026-06-15', status: 'paid', description: '50% Onboarding Deposit' },
      { id: 'p-4', amount: 4250, date: '2026-06-19', status: 'paid', description: '50% Quality Certified Release' }
    ],
    progress: 100,
    checklist: [
      { id: 'c-6', task: 'Solar roof brackets installation', completed: true },
      { id: 'c-7', task: 'Inverter array integration', completed: true },
      { id: 'c-8', task: 'Battery rack and circuit safety testing', completed: true },
      { id: 'c-9', task: 'Automatic grid transition check', completed: true }
    ],
    feedbackRating: 5,
    feedbackComment: 'Phenomenal work! Yaa and the Group Leader explained every step. The solar transition is completely seamless.'
  }
];

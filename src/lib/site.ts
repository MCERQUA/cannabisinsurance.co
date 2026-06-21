// Centralized site data — Cannabis Insurance

export const SITE = {
  name: "Cannabis Insurance",
  legalName: "Cannabis Insurance (by Contractors Choice Agency)",
  domain: "cannabisinsurance.co",
  url: "https://cannabisinsurance.co",
  tagline: "Insurance for Cannabis Businesses — Dispensaries, Growers & Processors",
  description:
    "Specialized commercial insurance for cannabis businesses — dispensaries, cultivators, processors, delivery operations, and all cannabis verticals. General liability, product liability, commercial property, crop insurance, workers' compensation, commercial auto, cyber liability, and D&O. Licensed all 50 states. 15-minute quotes.",
  phone: "844-967-5247",
  phoneAlt: "855-336-7189",
  phoneHref: "tel:+18449675247",
  phoneAltHref: "tel:+18553367189",
  email: "josh@contractorschoiceagency.com",
  founded: 2005,
  npn: "8608479",
  address: {
    street: "12220 E Riggs Road, Suite #105",
    city: "Chandler",
    state: "AZ",
    zip: "85249",
    country: "US",
  },
  hours: "Mon–Fri 8am–5pm (MST)",
  claimsSla: "2-hour claims response",
  quoteSla: "15-minute quote turnaround",
  statesLicensed: "All 50 states",
} as const;

export const BRAND = {
  brandShort: "Cannabis",
  brandSub: "Business Insurance",
  tagline: "Insurance for Cannabis Businesses — Dispensaries, Growers & Processors",
  subTagline: "GL, product liability, commercial property, crop insurance, workers comp, and D&O for cannabis operations",
  nicheShort: "cannabis business",
  nicheShortCap: "Cannabis Business",
  nichePlural: "cannabis businesses",
  nichePluralCap: "Cannabis Businesses",
  operator: "cannabis operation",
  operatorCap: "Cannabis Operation",
  industry: "cannabis industry",
  industryCap: "Cannabis Industry",
  audience: "cannabis operators",
  audienceCap: "Cannabis Operators",
  ownerTitle: "cannabis business owner",
  regionPill: "California · Colorado · Michigan · Nationwide",
  ctaMain: "Get a Cannabis Insurance Quote",
  ctaSecondary: "Talk to an Agent",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Coverage", href: "/coverage" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  {
    slug: "general-liability",
    title: "General Liability Insurance",
    short: "Premises, operations & completed products",
    description:
      "Core liability protection for cannabis businesses — covering third-party bodily injury and property damage from dispensary premises, grow operations, processing facilities, and delivery operations. Essential for state licensing compliance and landlord requirements.",
    icon: "ShieldCheck",
    keywords: ["cannabis general liability insurance", "dispensary GL insurance", "cannabis business liability", "marijuana business insurance"],
  },
  {
    slug: "product-liability",
    title: "Product Liability Insurance",
    short: "Contamination, mislabeling & adverse effects",
    description:
      "Cannabis product liability covers claims arising from contaminated products, mislabeled THC/CBD content, adverse health effects, and product recalls. Critical for any cannabis business that touches the product — cultivators, processors, edible manufacturers, and dispensaries.",
    icon: "Package",
    keywords: ["cannabis product liability insurance", "marijuana product liability", "edible cannabis insurance", "cannabis product recall insurance"],
  },
  {
    slug: "commercial-property",
    title: "Commercial Property Insurance",
    short: "Dispensaries, grow facilities & processing plants",
    description:
      "Commercial property coverage for cannabis businesses — dispensary retail space, cultivation facilities, processing and extraction plants, and storage. Covers cannabis inventory, specialized grow equipment, HVAC systems, and extraction equipment on a replacement cost basis.",
    icon: "Building2",
    keywords: ["cannabis commercial property insurance", "dispensary property insurance", "grow facility insurance", "cannabis inventory insurance"],
  },
  {
    slug: "crop-insurance",
    title: "Crop Insurance",
    short: "Cannabis crop loss from fire, freeze, disease & theft",
    description:
      "Cannabis crop insurance covers loss of growing or harvested cannabis from fire, windstorm, freeze, disease, pests, and theft. Written specifically for licensed cannabis cultivators — covering the actual value of the crop at the time of loss.",
    icon: "Leaf",
    keywords: ["cannabis crop insurance", "marijuana crop loss insurance", "cannabis cultivator insurance", "cannabis farm insurance"],
  },
  {
    slug: "workers-compensation",
    title: "Workers' Compensation",
    short: "Dispensary staff, trimmers & delivery drivers",
    description:
      "Workers' compensation for the full cannabis workforce — dispensary budtenders, cultivation trimmers and plant handlers, extraction technicians, delivery drivers, and administrative staff. Proper class codes for each cannabis operation type.",
    icon: "HardHat",
    keywords: ["cannabis workers compensation", "dispensary workers comp", "marijuana business workers compensation", "cannabis employee insurance"],
  },
  {
    slug: "commercial-auto",
    title: "Commercial Auto Insurance",
    short: "Cannabis delivery vehicles & transport fleet",
    description:
      "Commercial auto coverage for licensed cannabis delivery operations — delivery vans, transport vehicles, and fleet vehicles used to move cannabis products between facilities. Includes hired and non-owned auto coverage for delivery operations using employee or contractor vehicles.",
    icon: "Truck",
    keywords: ["cannabis delivery insurance", "marijuana delivery vehicle insurance", "cannabis commercial auto", "cannabis transport insurance"],
  },
  {
    slug: "cyber-liability",
    title: "Cyber Liability Insurance",
    short: "POS systems, customer data & regulatory breach",
    description:
      "Cyber liability coverage for cannabis businesses — dispensary POS system breaches, customer data theft, ransomware, HIPAA-adjacent medical cannabis data exposure, and the regulatory notification costs following a data breach in a heavily regulated industry.",
    icon: "Shield",
    keywords: ["cannabis cyber liability insurance", "dispensary data breach insurance", "cannabis POS system insurance", "marijuana business cyber insurance"],
  },
  {
    slug: "directors-officers",
    title: "Directors & Officers Insurance",
    short: "Management liability for cannabis companies",
    description:
      "D&O liability insurance for cannabis company management teams — covering claims against directors and officers for regulatory violations, investor disputes, breach of fiduciary duty, and management decisions in an industry with significant compliance obligations and investor scrutiny.",
    icon: "Briefcase",
    keywords: ["cannabis D&O insurance", "cannabis directors officers insurance", "marijuana company management liability", "cannabis executive insurance"],
  },
] as const;

export const LOCATIONS = [
  {
    slug: "california",
    name: "California",
    state: "CA",
    region: "Los Angeles · Bay Area · San Diego",
    metaTitle: "Cannabis Insurance California | CA Cannabis Business Coverage",
    metaDescription: "California cannabis insurance — GL, product liability, commercial property, crop insurance, and workers comp for CA dispensaries, cultivators, and processors.",
    h1: "Cannabis Insurance in California",
    intro: "California's cannabis market — the largest in the world — operates under DCC licensing, strict track-and-trace requirements, and a complex regulatory environment. Dispensaries, cultivators, manufacturers, distributors, and delivery operators all need specialty insurance programs tailored to California cannabis regulations. We write programs for California cannabis businesses across all license types.",
    blurb: "DCC-licensed dispensaries, cultivators, manufacturers, and delivery operators across California. GL, product liability, and commercial property for CA cannabis businesses.",
  },
  {
    slug: "colorado",
    name: "Colorado",
    state: "CO",
    region: "Denver · Boulder · Colorado Springs",
    metaTitle: "Cannabis Insurance Colorado | CO Cannabis Business Coverage",
    metaDescription: "Colorado cannabis insurance — GL, product liability, commercial property, crop insurance, and workers comp for CO dispensaries, grow operations, and MIP facilities.",
    h1: "Cannabis Insurance in Colorado",
    intro: "Colorado's mature cannabis market — one of the first states to legalize recreational cannabis — has sophisticated operators with significant insurance needs. MED-licensed dispensaries, cultivation facilities, marijuana infused products (MIP) manufacturers, and transporters all require specialty programs. We write programs for Colorado cannabis businesses across all tiers.",
    blurb: "MED-licensed dispensaries, cultivation facilities, and MIP manufacturers across Colorado. Full-program cannabis insurance for CO cannabis operators.",
  },
  {
    slug: "michigan",
    name: "Michigan",
    state: "MI",
    region: "Detroit · Grand Rapids · Lansing",
    metaTitle: "Cannabis Insurance Michigan | MI Cannabis Business Coverage",
    metaDescription: "Michigan cannabis insurance — GL, product liability, commercial property, and workers comp for MI dispensaries, grow operations, and cannabis processors.",
    h1: "Cannabis Insurance in Michigan",
    intro: "Michigan's rapidly growing cannabis market — driven by one of the strongest recreational frameworks in the Midwest — has created significant demand for specialty cannabis insurance. LARA-licensed retailers, cultivators, processors, safety compliance facilities, and transporters need programs built for the Michigan regulatory environment.",
    blurb: "LARA-licensed retailers, cultivators, and processors across Michigan. Specialty GL, product liability, and commercial property for MI cannabis businesses.",
  },
  {
    slug: "illinois",
    name: "Illinois",
    state: "IL",
    region: "Chicago · Springfield · Rockford",
    metaTitle: "Cannabis Insurance Illinois | IL Cannabis Business Coverage",
    metaDescription: "Illinois cannabis insurance — GL, product liability, commercial property, and D&O for IL dispensaries, cultivators, and cannabis processors in the Chicago market.",
    h1: "Cannabis Insurance in Illinois",
    intro: "Illinois's cannabis market — anchored by the Chicago metro and governed by the Illinois Cannabis Regulation and Tax Act — requires dispensing organizations, craft growers, infuser organizations, and transporters to carry specific insurance coverages as a condition of licensure. We write programs for Illinois cannabis businesses that satisfy IDFPR requirements.",
    blurb: "CRTA-licensed dispensing organizations, craft growers, and infuser organizations across Illinois. Compliance-ready insurance for IL cannabis businesses.",
  },
  {
    slug: "oregon",
    name: "Oregon",
    state: "OR",
    region: "Portland · Eugene · Bend",
    metaTitle: "Cannabis Insurance Oregon | OR Cannabis Business Coverage",
    metaDescription: "Oregon cannabis insurance — GL, product liability, commercial property, and crop insurance for OR dispensaries, cannabis producers, and processors.",
    h1: "Cannabis Insurance in Oregon",
    intro: "Oregon's competitive cannabis market has one of the highest dispensary-to-population ratios in the country. OLCC-licensed producers, processors, wholesalers, and retailers need insurance programs built for Oregon's regulatory requirements and the unique risks of a mature, competitive cannabis market.",
    blurb: "OLCC-licensed producers, processors, wholesalers, and retailers across Oregon. Specialty cannabis insurance for OR operators in a competitive market.",
  },
  {
    slug: "nevada",
    name: "Nevada",
    state: "NV",
    region: "Las Vegas · Reno · Henderson",
    metaTitle: "Cannabis Insurance Nevada | NV Cannabis Business Coverage",
    metaDescription: "Nevada cannabis insurance — GL, product liability, commercial property, and commercial auto for NV dispensaries, cannabis cultivators, and Las Vegas cannabis tourism.",
    h1: "Cannabis Insurance in Nevada",
    intro: "Nevada's cannabis market — driven by Las Vegas tourism and a strong local customer base — operates under CCB licensing with specific requirements for retail cannabis stores, cultivation facilities, production facilities, and distributors. We write specialty programs for Nevada cannabis businesses including high-volume Las Vegas dispensaries.",
    blurb: "CCB-licensed retail stores, cultivation facilities, and production facilities across Nevada. Specialty cannabis insurance for NV operators including Las Vegas tourism venues.",
  },
  {
    slug: "massachusetts",
    name: "Massachusetts",
    state: "MA",
    region: "Boston · Worcester · Springfield",
    metaTitle: "Cannabis Insurance Massachusetts | MA Cannabis Business Coverage",
    metaDescription: "Massachusetts cannabis insurance — GL, product liability, commercial property, and D&O for MA dispensaries, cultivators, and cannabis product manufacturers.",
    h1: "Cannabis Insurance in Massachusetts",
    intro: "Massachusetts's cannabis market — governed by the Cannabis Control Commission with strong equity and social justice provisions — requires Marijuana Establishments to maintain specific insurance coverages. RMDs, craft marijuana cultivator cooperatives, cannabis couriers, and transportation network companies all need specialty programs.",
    blurb: "CCC-licensed marijuana establishments, craft cultivator cooperatives, and cannabis couriers across Massachusetts. Compliance-first insurance for MA cannabis operators.",
  },
  {
    slug: "washington",
    name: "Washington",
    state: "WA",
    region: "Seattle · Spokane · Tacoma",
    metaTitle: "Cannabis Insurance Washington | WA Cannabis Business Coverage",
    metaDescription: "Washington cannabis insurance — GL, product liability, commercial property, and crop insurance for WA cannabis retailers, producers, and processors.",
    h1: "Cannabis Insurance in Washington",
    intro: "Washington's cannabis market — one of the most mature recreational markets in the country — operates under LCB licensing with I-502-compliant retailers, producers, and processors. Washington cannabis businesses need specialty programs that address the state's strict track-and-trace requirements and the liability exposure of an established adult-use market.",
    blurb: "LCB-licensed retailers, producers, and processors across Washington. Specialty cannabis insurance for WA operators in one of the most mature markets.",
  },
] as const;

export const CREDENTIALS = [
  { label: "Licensed in all 50 states", icon: "MapPin" },
  { label: "Founded 2005 — 20+ years", icon: "CalendarCheck" },
  { label: "Cannabis industry specialists", icon: "ShieldCheck" },
  { label: "15-minute quote turnaround", icon: "Timer" },
  { label: "2-hour claims response", icon: "Zap" },
  { label: "A.M. Best A+ carrier partners", icon: "Award" },
] as const;

export const SOCIAL = { facebook: "", instagram: "", linkedin: "", twitter: "" } as const;

export const STATS = [
  { value: 500, suffix: "+", label: "Cannabis businesses insured nationwide", prefix: "" },
  { value: 20, suffix: "+", label: "Years insuring specialty operators", prefix: "" },
  { value: 15, suffix: " min", label: "Average quote turnaround", prefix: "" },
  { value: 50, suffix: "", label: "States licensed & writing", prefix: "" },
] as const;

export const TESTIMONIALS = [
  {
    quote: "We operate three dispensaries in California and the product liability exposure alone makes generic GL completely inadequate. Cannabis Insurance placed us with a carrier who writes true cannabis product liability — contamination, mislabeling, adverse effects — not a farm-market product policy that might deny our claim.",
    name: "Priya M.",
    role: "CEO, Emerald Dispensary Group",
    location: "California",
  },
  {
    quote: "Our outdoor cultivation operation lost a significant portion of the crop to an early freeze. The crop insurance program through CCA paid out on the loss quickly — valued at our actual harvest value, not some generic agricultural rate. That payout kept us operational through the next growing season.",
    name: "James T.",
    role: "Owner, High Country Cultivation LLC",
    location: "Colorado",
  },
  {
    quote: "As a cannabis processor and manufacturer, our D&O exposure is real — investor scrutiny, regulatory changes, management decisions in a shifting legal landscape. CCA placed our D&O alongside our GL and product liability in one coordinated program. No gaps, one renewal, and an agent who understands the industry.",
    name: "Sarah K.",
    role: "COO, Precision Extracts Michigan",
    location: "Michigan",
  },
] as const;

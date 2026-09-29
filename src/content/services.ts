export type Service = {
  slug: string;
  name: string;
  /** One line used in lists. */
  summary: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  why: string[];
  whatWeDo: string[];
  firstWeek: string[];
  monthly: string[];
  outcome: string;
  related: string[];
  diagram?: "heatmap";
};

export const services: Service[] = [
  {
    slug: "benchmarking",
    name: "Benchmarking",
    summary: "Measuring where you rank across your area, and what the top 10 have that you do not.",
    metaTitle: "Local ranking benchmark",
    metaDescription:
      "AC North records where you rank on Google from points across your area and compares your profile with the top 10 businesses for your search.",
    intro:
      "Before changing anything, we record where you appear on Google for your main search term. We check it from points across your whole area, not from one address. We then compare your business with the ten ranking above you.",
    why: [
      "Your position changes depending on where the person searching is. One search from your own premises does not show the full picture.",
      "The businesses already in the top 10 show what Google is rewarding in your trade and your area.",
      "It gives a fixed starting point that every later update is measured against.",
    ],
    whatWeDo: [
      "Agree your main search term, usually your trade and your town.",
      "Run a ranking map: your Google position checked from a grid of points across your area.",
      "Record the reviews, photos, categories and services of the top 10 businesses for that search.",
      "Check your Google Business Profile for gaps.",
      "Check your website: page title, main heading, business details and how many pages Google has indexed.",
      "Look for fake or spam listings taking places in the top results.",
    ],
    firstWeek: [
      "Main search term agreed",
      "Starting ranking map recorded",
      "Top 10 comparison completed",
      "Fix list for your profile, website and listings",
    ],
    monthly: [
      "Ranking map re-run to measure progress",
      "Changes among competitors checked",
      "New spam listings looked for",
    ],
    outcome:
      "A clear picture of where you rank across your area, what the top 10 have that you do not, and a list of what to fix first.",
    related: ["google-business-profile", "website-seo", "weekly-updates"],
    diagram: "heatmap",
  },
  {
    slug: "google-business-profile",
    name: "Google Business Profile",
    summary: "Completing and managing the profile that decides whether you appear in the map results.",
    metaTitle: "Google Business Profile optimisation",
    metaDescription:
      "AC North completes and manages your Google Business Profile: categories, services, questions and answers, weekly posts and photos.",
    intro:
      "Your Google Business Profile is the listing that appears on Google Maps and in the map results at the top of local searches. It carries more weight in local rankings than anything else, and most businesses leave large parts of it empty.",
    why: [
      "For most local searches, the map results appear above the normal results.",
      "Google rewards complete profiles because they are more useful to the people searching.",
      "Your categories and services are among the strongest signals Google uses to decide which searches you appear for.",
    ],
    whatWeDo: [
      "Set your main category and up to three more, based on what the top-ranking businesses use.",
      "Complete every relevant section of the profile, including hours, service area, website and booking link.",
      "Build a full list of your services, up to Google's limit of 99, checked with you, with descriptions for the 20 most important.",
      "Add questions and answers relevant to your trade and your area.",
      "Post updates to your profile every week.",
      "Add photos of your work every week, tagged with the location of the job.",
      "Keep your details identical to your website and your listings elsewhere.",
      "Report fake listings that break Google's rules and take places from real businesses.",
    ],
    firstWeek: [
      "Categories set",
      "Profile completed",
      "Full services list added with descriptions",
      "Questions and answers added",
    ],
    monthly: [
      "Weekly posts",
      "Weekly photos from your work",
      "Help getting a steady flow of reviews",
    ],
    outcome:
      "A complete, accurate profile that gives Google more reasons to show you in the map results than the businesses around you.",
    related: ["benchmarking", "citations", "website-seo"],
  },
  {
    slug: "website-seo",
    name: "Website SEO",
    summary: "Making your website clearly say what you do and where you do it.",
    metaTitle: "Website SEO for local businesses",
    metaDescription:
      "AC North updates your website so it states what you do and where: page title, headings, business details, map and structured data.",
    intro:
      "Google checks your website to confirm what your Google Business Profile says. It reads the page title, the main heading and your business details closely. On most local business sites these are missing or vague, and fixing them is often the quickest improvement available.",
    why: [
      "Your page title and main heading tell Google what the page is about. They should name your trade and your town.",
      "Your business name, address and phone number on the site should match your Google Business Profile exactly. Differences cost trust.",
      "Structured data tells Google directly what kind of business you are and where you work.",
    ],
    whatWeDo: [
      "Rewrite the home page title to include your trade, your town and your main services.",
      "Set the main heading to your trade and your town, with your main services as subheadings.",
      "Add your business name, address and phone number to every page, matching your profile.",
      "Add a Google map of your location to the home page.",
      "Add local business structured data.",
      "Check how many of your pages Google has indexed, and fix any it has missed.",
    ],
    firstWeek: [
      "Title and headings rewritten",
      "Business details added to every page",
      "Map added",
      "Structured data added",
    ],
    monthly: [
      "Indexing checked",
      "New pages set up correctly as they are added",
      "Titles adjusted as rankings change",
    ],
    outcome:
      "A website that states clearly, in the places Google reads first, what you do and where you do it.",
    related: ["service-and-area-pages", "google-business-profile", "benchmarking"],
  },
  {
    slug: "service-and-area-pages",
    name: "Service and area pages",
    summary: "Adding pages that show Google you know your trade and work in your area.",
    metaTitle: "Service and area pages",
    metaDescription:
      "AC North adds a page for each of your main services and each area you cover, linked together, so Google sees what you do and where.",
    intro:
      "Google ranks businesses it sees as experts in their trade and active in their area. A site with one or two pages gives it little to go on. We add a page for each main service and each area you cover, and link them together so Google can find and understand all of them.",
    why: [
      "Each service page gives you a chance to appear for searches about that service, not just your trade in general.",
      "Area pages show Google where you work, which helps you rank in the towns and neighbourhoods around you.",
      "Businesses with more useful pages about their trade and area tend to rank above those with fewer.",
    ],
    whatWeDo: [
      "Research the services and topics your customers search for, and what competitors cover.",
      "Plan a simple structure: home page, a services page, and a page for each main service.",
      "Write a page for each main service, explaining what it involves and answering common questions.",
      "Add an 'Areas we serve' page and a page for each town or neighbourhood you cover.",
      "Link service pages and area pages to each other where it helps the reader.",
      "Make sure every new page is indexed by Google.",
    ],
    firstWeek: [
      "Current pages reviewed",
      "Services and areas to cover agreed with you",
    ],
    monthly: [
      "New service pages added",
      "New area pages added",
      "Pages linked together and indexed",
    ],
    outcome:
      "A clear page for each service and each area you cover, linked together, giving Google a full view of what you do and where.",
    related: ["website-seo", "citations", "benchmarking"],
  },
  {
    slug: "citations",
    name: "Citations",
    summary: "Listing your business on the maps, directories and sites Google trusts.",
    metaTitle: "Local citations",
    metaDescription:
      "AC North lists your business on Apple Maps, Bing, Yelp, Foursquare and the directories that rank for your trade, with the same details everywhere.",
    intro:
      "A citation is a listing of your business name, address and phone number on another website, such as Apple Maps, Bing or a trade directory. Google uses them to confirm that your business is real, where it is, and that other trusted sites know about it.",
    why: [
      "Consistent listings on trusted sites are one of the three main factors in local rankings.",
      "Details that differ between sites, such as an old phone number or address, weaken Google's confidence in your business.",
      "A few strong, relevant listings are worth more than hundreds of low-quality ones.",
    ],
    whatWeDo: [
      "Set up or correct your listings on the core sites: Apple Business Connect, Bing Places, Yelp and Foursquare.",
      "Find the directories that already rank for your search term and get you listed on them.",
      "Check where the top competitors are listed and fill the gaps.",
      "Add trade and local directories relevant to your business.",
      "Make sure your name, address and phone number match your Google Business Profile everywhere.",
      "Bring your social media profiles into line with the same details.",
      "Where a site asks you to confirm by email or phone, send you a short list each week.",
    ],
    firstWeek: [
      "Existing listings checked for wrong or missing details",
      "Core listings set up or corrected",
    ],
    monthly: [
      "New listings added each week",
      "Competitor listings checked",
      "Details kept consistent",
    ],
    outcome:
      "Your business listed accurately on the sites Google trusts most, with the same details everywhere.",
    related: ["google-business-profile", "service-and-area-pages", "weekly-updates"],
  },
  {
    slug: "weekly-updates",
    name: "Weekly updates",
    summary: "An update every Friday, and a monthly ranking map measured from where you started.",
    metaTitle: "Weekly updates and reporting",
    metaDescription:
      "Every Friday AC North sends a short update on the week's work. Each month you get a ranking map compared with where you started.",
    intro:
      "You should always know what has been done and where you rank. Every Friday you get a short update on the work that week. Each month you get a ranking map compared with your starting point.",
    why: [
      "A fixed update day means you never have to chase for news.",
      "Measuring against the starting benchmark shows exactly what has changed.",
      "Seeing the work alongside the results makes it clear what is having an effect.",
    ],
    whatWeDo: [
      "A short update every Friday: what was done that week and what is next.",
      "A monthly ranking map compared with your starting point.",
      "Your position for each agreed search term.",
      "Calls, direction requests and website visits from your Google Business Profile.",
      "A note of anything we need from you, such as photos or a listing to confirm.",
    ],
    firstWeek: [
      "Starting ranking map recorded",
      "First Friday update",
    ],
    monthly: [
      "Update every Friday",
      "Monthly ranking map",
    ],
    outcome:
      "A short update every Friday and a clear monthly view of where you rank, measured from where you started.",
    related: ["benchmarking", "google-business-profile", "citations"],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

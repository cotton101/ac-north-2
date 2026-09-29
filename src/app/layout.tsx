import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Intro from "@/components/Intro";
import { INTRO_KEY, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "AC North — Top 3 on Google in one week",
    template: "%s | AC North",
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_GB",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#131e29",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-GB" className={`${poppins.variable} h-full`} data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className="flex min-h-full flex-col">
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(sessionStorage.getItem("${INTRO_KEY}")==="1")document.documentElement.classList.add("intro-seen")}catch(e){}`,
          }}
        />
        <Intro />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-3 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": `${SITE_URL}/#organization`,
                name: SITE_NAME,
                url: SITE_URL,
                description: SITE_DESCRIPTION,
                logo: `${SITE_URL}/ac-north-logo-blue.png`,
                image: `${SITE_URL}/og/home.jpg`,
                knowsAbout: [
                  "Local SEO",
                  "Google Business Profile optimisation",
                  "Local citations",
                  "On-page SEO",
                ],
              },
              {
                "@type": "WebSite",
                "@id": `${SITE_URL}/#website`,
                name: SITE_NAME,
                url: SITE_URL,
                inLanguage: "en-GB",
                publisher: { "@id": `${SITE_URL}/#organization` },
              },
            ],
          }}
        />
      </body>
    </html>
  );
}

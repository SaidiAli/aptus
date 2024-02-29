import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import clsx from "clsx";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

const keywords = [
  "Digital marketing strategy",
  "Content marketing",
  "SEO (Search Engine Optimization)",
  "SEM (Search Engine Marketing)",
  "Social media marketing",
  "Email marketing",
  "PPC (Pay-Per-Click)",
  "CRO (Conversion Rate Optimization)",
  "Online advertising",
  "Brand management",
  "Marketing analytics",
  "Influencer marketing",
  "Affiliate marketing",
  "Video marketing",
  "Mobile marketing",
  "Digital marketing tools",
  "Google Analytics",
  "Facebook Ads",
  "Instagram marketing",
  "LinkedIn strategy",
  "Twitter engagement",
  "TikTok advertising",
  "Content creation",
  "Digital marketing for healthcare",
  "Digital marketing for education",
  "Digital marketing for finance",
  "digital marketer",
  "seo in digital marketing",
  "best marketing agency in uganda",
  "remarketing",
  "Web development services",
  "Website design",
  "Responsive web design",
  "E-commerce website",
  "CMS (Content Management System)",
  "WordPress development",
  "Web application development",
  "Mobile app development",
  "User experience (UX) design",
  "User interface (UI) design",
  "Front-end development",
  "Back-end development",
  "Full-stack development",
  "Web hosting services",
  "Website maintenance",
  "Website speed optimization",
  "SEO-friendly web design",
  "Web development for real estate",
  "Web development for education",
  "Web development for healthcare",
  "Web development for finance",
  "website designer",
  "website developer",
  "web designer",
];

export const metadata: Metadata = {
  title: {
    template: "%s - Aptus Agency",
    default: "Aptus Agency",
  },
  keywords,
  description:
    "Aptus agency is a growth focussed creative digital agency offering development and digital marketing services. Website design and development, social media management, google ads and more",
  twitter: {
    site: "@aptusagencykla",
    card: "summary_large_image",
  },
  metadataBase: new URL("https://aptusagency.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "en-GB": "/en-GB",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_UG",
    url: "https://aptusagency.com/",
    siteName: "Aptus Agency",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        {/* Google Tag Manager */}
        <Script
        id="gtm"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5NWK47T9');`,
          }}
        />
        {/* End Google Tag Manager */}

        {/* Google tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-FSKRHZSDK3"
        />
        <Script
        id="gtag"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-FSKRHZSDK3');
            `,
          }}
        />
        {/* End Google tag (gtag.js) */}

        {/* Microsoft Clarity */}
        <Script
        id="clarity"
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "l99kn9qnyb");
            `,
          }}
        />
        {/* End Microsoft Clarity */}
      </head>
      <body className={clsx(inter.className, "bg-white")}>
        <noscript>
          {/* Google Tag Manager (noscript) */}
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5NWK47T9"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
          {/* End Google Tag Manager (noscript) */}
        </noscript>

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

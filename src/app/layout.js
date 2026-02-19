import Script from "next/script";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../app/globals.css";

const GTM_ID = "GTM-M89ZWPJ";

export const metadata = {
  title: "VSR Vriksha | Telangana's First Premium Naturopathy Retreat",
  description:
    "VSR Vriksha Nature Cure Center is Telangana's first premium naturopathy retreat in Hyderabad. Experience holistic healing through yoga, diet therapy, and natural treatments.",
  alternates: {
    canonical: "https://vsrvriksha.com",
  },
  openGraph: {
    title: "VSR Vriksha | Telangana's First Premium Naturopathy Retreat",
    description:
      "VSR Vriksha Nature Cure Center is Telangana's first premium naturopathy retreat in Hyderabad. Experience holistic healing through yoga, diet therapy, and natural treatments.",
    url: "https://vsrvriksha.com",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `,
          }}
        />
      </head>
      <body>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
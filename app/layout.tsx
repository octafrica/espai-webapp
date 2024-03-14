import type { Metadata } from "next";
import { Kaisei_Decol, Poppins } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"
import Script from "next/script";

import "./globals.css";
import Logo from '/public/app_logo.svg';
// import OgImg from '/public/og-img.png'

const kaisei_decol = Kaisei_Decol({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const poppins = Poppins({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Espai | Virtual Staging, Interior Design, Furniture & Decor discovery & Shopping",
    metadataBase: new URL('htps://espai.co'),
    description: "Transform your spaces effortlessly with the power of AI! Explore virtual staging solutions for real estate agents and impress clients, discover interior design ideas, extract furniture or decor from images and get shoppable links for them instantly",
    keywords: [
        'Virtual Staging',
        'Real Estate',
        'Interior design',
        'Room redesign',
        'Home decor',
        'DIY decor',
        'Furniture shopping',
        'Interior inspiration',
        'Design ideas',
        'Decorating tips',
        'Home makeover',
        'Space transformation',
        'AI-powered design',
        'Room visualization',
        'Furniture links',
        'Decor shopping',
        'Home styling',
        'Design variants',
        'Creative ideas',
        'Room makeover',
        'Design trends',
        'Space reinvention'
    ],
    openGraph: {
        siteName: 'Espai',
        url: 'https://espai.co',
        images: [
            {
                url: "/og-img.png",
                width: 800,
                height: 600,
            },
            {
                url: "/og-img.png",
                width: 1800,
                height: 1600,
            }
        ],
        locale: 'en_US',
        type: 'website',
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
        <link
            rel="canonical"
            href="https://espai.co"
            key="canonical"
        />
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-TCE9ZH4HN3"/>
        <Script id="google-analytics" strategy="afterInteractive" dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-TCE9ZH4HN3');`
        }}/>
    </head>
    <body
        className={`${kaisei_decol.className}  border-red-600 md:border-blue-600 lg:border-green-600 xl:border-yellow-600 2xl:border-purple `}
      >
        {children}
        <SpeedInsights/>
      </body>
    </html>
  );
}


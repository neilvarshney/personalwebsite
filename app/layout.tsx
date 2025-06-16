import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "./components/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/footer";
import { metaData } from "./lib/config";
import Aurora from "./components/aurora";
import LenisProvider from "./components/LenisProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(metaData.baseUrl),
  title: "Neil's Portfolio",
  description: "Welcome to my portfolio website showcasing my projects and skills.",
  openGraph: {
    images: metaData.ogImage,
    title: "Neil's Portfolio",
    description: "Welcome to my portfolio website showcasing my projects and skills.",
    url: metaData.baseUrl,
    siteName: metaData.name,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: metaData.name,
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.className} antialiased text-white min-h-screen`}>
        <div className="fixed inset-0 -z-10">
          <Aurora
            beamWidth={3}
            beamHeight={30}
            beamNumber={30}
            lightColor="#D71414"
            speed={2}
            noiseIntensity={1.75}
            scale={0.2}
            rotation={45}
          />
        </div>
        <LenisProvider>
          <div className="relative min-h-screen">
            <Navbar />
            <main className="flex-auto min-w-0 flex flex-col">
              {children}
            </main>
            <Footer />
          </div>
        </LenisProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

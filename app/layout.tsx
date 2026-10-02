import type { Metadata } from "next";
import { Montserrat, Inter, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://freestackinc.com.ng"),
  title: {
    default: "FreeStack Inc | Custom Software Development & Web Agency",
    template: "%s | FreeStack Inc",
  },
  description:
    "FreeStack Inc is a software engineering agency building scalable web applications, custom APIs, and high-performance digital platforms.",
  keywords: [
    "Software Development",
    "Web Engineering",
    "Next.js Developer",
    "API Development",
    "Nigeria Tech Agency",
    "FreeStack Inc",
  ],
  authors: [{ name: "FreeStack Inc" }],
  creator: "FreeStack Inc",
  publisher: "FreeStack Inc",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://freestackinc.com.ng",
    siteName: "FreeStack Inc",
    title: "FreeStack Inc | Custom Software Development & Web Agency",
    description:
      "FreeStack Inc is a software engineering agency building scalable web applications, custom APIs, and high-performance digital platforms.",
    images: [
      {
        url: "/og-image.png", // Ensure this file exists in your /public folder (1200x630 px)
        width: 1200,
        height: 630,
        alt: "FreeStack Inc - Modern Web & Software Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FreeStack Inc | Custom Software Development & Web Agency",
    description:
      "FreeStack Inc is a software engineering agency building scalable web applications, custom APIs, and high-performance digital platforms.",
    images: ["/og-image.png"],
    creator: "@freestackinc",
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
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${inter.variable} ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="font-inter min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
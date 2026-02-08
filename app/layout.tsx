import "../styles/globals.css";
import type { Metadata } from "next";
import { SITE_CONFIG } from "@/constants/site";
import { AppLayout } from "@/components/layout";
import { ThemeProvider } from "@/components/providers";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: { 
      default: SITE_CONFIG.title, 
      absolute: SITE_CONFIG.title, 
      template: `%s | ${SITE_CONFIG.title}`,
    },
    authors: { name: SITE_CONFIG.author },
    description: SITE_CONFIG.description,
    keywords: SITE_CONFIG.keywords,
    icons: {
      icon: "/favicon.ico",
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: SITE_CONFIG.url,
      languages: {
        "en-US": SITE_CONFIG.url,
        "vi-VN": SITE_CONFIG.url,
      },
    },
    openGraph: {
      title: SITE_CONFIG.title,
      description: SITE_CONFIG.description,
      url: SITE_CONFIG.url,
      siteName: SITE_CONFIG.title,
      images: [
        {
          url: SITE_CONFIG.ogImage,
          width: 1200,
          height: 630,
          alt: SITE_CONFIG.title,
        },
      ],
      locale: SITE_CONFIG.locale,
      type: SITE_CONFIG.type,
    },
    twitter: {
      card: "summary_large_image",
      title: SITE_CONFIG.title,
      description: SITE_CONFIG.description,
      images: [SITE_CONFIG.ogImage],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AppLayout>
            {children}
          </AppLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}

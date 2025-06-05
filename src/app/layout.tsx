'use client';

import { Inter } from "next/font/google";
import "./globals.css";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";
import { siteConfig, structuredData } from "./metadata";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (you can remove this in production)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Increased to 3 seconds to see the full particle animation

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <Head>
        <title>{siteConfig.name}</title>
        <meta name="description" content={siteConfig.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteConfig.url} />
        <meta property="og:title" content={siteConfig.name} />
        <meta property="og:description" content={siteConfig.description} />
        <meta property="og:image" content={siteConfig.ogImage} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={siteConfig.url} />
        <meta property="twitter:title" content={siteConfig.name} />
        <meta property="twitter:description" content={siteConfig.description} />
        <meta property="twitter:image" content={siteConfig.ogImage} />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData.organization)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData.service)
          }}
        />
      </Head>
      <body className={inter.className}>
        <AnimatePresence mode="wait">
          {isLoading ? (
            <LoadingScreen key="loading" />
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </body>
    </html>
  );
}

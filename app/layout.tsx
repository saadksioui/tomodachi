import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Tomodachi — Track Your Anime & Manga Journey",
  description:
    "Tomodachi is your personal anime and manga companion. Discover, track, and share your favorite titles with ease.",
  keywords: [
    "anime",
    "manga",
    "anime tracker",
    "manga list",
    "anime list",
    "Tomodachi",
    "anime database",
    "manga database",
    "anime app",
    "otaku",
    "watchlist",
    "readlist",
  ],
  authors: [{ name: "Saad Ksioui", url: "https://saadksioui.pro/" }],
  creator: "Tomodachi",
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL("https://tomodachi.example.com"),
  openGraph: {
    title: "Tomodachi — Track Your Anime & Manga Journey",
    description:
      "Tomodachi is your personal anime and manga companion. Discover, track, and share your favorite titles.",
    url: "https://tomodachi.example.com",
    siteName: "Tomodachi",
    images: [
      {
        url: "/TomadachiLogo.png",
        width: 1200,
        height: 630,
        alt: "Tomodachi - Track Anime and Manga",
      },
    ],
    type: "website",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className={`${poppins.className} antialiased h-full w-full`}>
        <div className="flex flex-col h-full w-full">
          <Header />
          <main className="flex-1">
            <Toaster position="top-center" />
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

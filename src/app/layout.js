import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: "Math2Model — Mathematics, Machine Learning & Research",
    template: "%s | Math2Model",
  },
  description: "Understand the mathematical foundations behind machine learning, neural networks, and modern AI models through structured learning, research, and practical implementations.",
  applicationName: "Math2Model",
  keywords: ["Math2Model", "Machine Learning", "Mathematics", "Deep Learning", "Neural Networks", "AI Research", "Transformers", "Python Implementations"],
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Math2Model — Mathematics, Machine Learning & Research",
    description: "Bridge mathematical foundations and modern AI through structured learning, research papers, and practical implementations.",
    siteName: "Math2Model",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Math2Model — Mathematics, Machine Learning & Research",
    description: "Understand the mathematics behind modern AI, from theory to implementation.",
  },
  robots: {
    index: true,
    follow: true,
  },
  themeColor: "#ffffff",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-white font-sans text-[#172033]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
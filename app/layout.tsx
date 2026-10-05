import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "veyra — Understand long videos without watching every minute",
  description:
    "Break long YouTube videos into focused sections with summaries, key points, concepts, and useful resources.",
  openGraph: {
    title: "veyra — Understand long videos without watching every minute",
    description:
      "Break long YouTube videos into focused sections with summaries, key points, concepts, and useful resources.",
    url: "https://aiveyra.vercel.app",
    siteName: "veyra",
    images: [
      {
        url: "/veyraThumbnail.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

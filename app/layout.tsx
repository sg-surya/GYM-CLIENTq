import type { Metadata } from "next";
import { Inter, Space_Grotesk, Bebas_Neue } from "next/font/google";
import "./globals.css";

// Load premium fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AURA | Premium Luxury Fitness Club & Sanctuary",
  description: "Experience India's next-generation premium fitness experience. State-of-the-art equipment, elite personal trainers, recovery chambers, and customized nutrition coaching.",
  keywords: "luxury gym, premium fitness, elite training, personal trainers, bodybuilding, crossfit, steam recovery, wellness club",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${bebasNeue.variable} scroll-smooth`}
    >
      <body className="bg-matte-black text-white antialiased overflow-x-hidden font-sans" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

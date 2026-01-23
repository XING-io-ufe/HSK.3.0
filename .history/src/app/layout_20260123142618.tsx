import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/footer';

// Space Grotesk фонт тохиргоо
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk", // Tailwind дээр ашиглах хувьсагч нэр
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});


export const metadata: Metadata = {
  title: "Hanzi.mn - Хятад хэл сурах хамгийн хялбар арга",
  description: "Hanzi.mn нь хятад хэл сурах хүсэлтэй хүмүүст зориулсан онлайн платформ бөгөөд HSK шалгалтын бэлтгэл, үгийн сан, хичээлүүдийг санал болгодог.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="mn">
      <body className={`${spaceGrotesk.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

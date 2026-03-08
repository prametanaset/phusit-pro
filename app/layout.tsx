import type React from "react";
import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Noto_Sans_Thai } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { LenisProvider } from "@/components/lenis-provider";
import ClickSpark from "@/components/click-spark";
import "./globals.css";

const _inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const _notoSansThai = Noto_Sans_Thai({
  subsets: ["thai"],
  variable: "--font-thai",
});

const _jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "ภูสิท โปร | บริการพิมพ์ & ถ่ายรูป ครบวงจร",
  description:
    "บริการพิมพ์เอกสาร พิมพ์ภาพ ถ่ายรูปติดบัตร รับทำป้าย นามบัตร สติกเกอร์ และงานพิมพ์ทุกชนิด คุณภาพดี ราคาเป็นมิตร",
  keywords: [
    "ร้านพิมพ์",
    "ถ่ายรูป",
    "นามบัตร",
    "ป้าย",
    "สติกเกอร์",
    "ภูสิท โปร",
    "printing shop",
  ],
  generator: "v0.app",
};

export const viewport: Viewport = {
  themeColor: "#3B82F6",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body
        className={`${_inter.variable} ${_notoSansThai.variable} ${_jetbrainsMono.variable} font-sans antialiased`}
      >
        <ClickSpark
          sparkColor="#3B82F6"
          sparkSize={12}
          sparkRadius={20}
          sparkCount={8}
          duration={400}
          easing="ease-out"
        >
          <LenisProvider>{children}</LenisProvider>
        </ClickSpark>
        <Analytics />
      </body>
    </html>
  );
}

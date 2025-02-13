/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Metadata } from "next";
import { Merriweather } from "next/font/google";

import "./globals.css";

const font1 = Merriweather({
  weight: ["400", "700"], // 필요한 두께 선택
  subsets: ["latin"], // 사용할 문자셋
  variable: "--font-merriweather", // Tailwind에서 사용 가능하도록 변수 선언
});

export const metadata: Metadata = {
  title: "SUNGMIN.",
  description: "sungmin portfolio website",
  keywords:
    "sungmin.my, portfolio, portfolio website, frontend developer, frontend, backend developer, web developer, 개발자,웹 개발자,",
  // icons : {
  //   icon : []
  // }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}

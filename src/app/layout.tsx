import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const sohoBold = localFont({
  src: [
    { path: "../../public/fonts/Soho-Bold.woff2", weight: "700", style: "normal" },
    { path: "../../public/fonts/Soho-Bold-Italic.woff2", weight: "700", style: "italic" },
  ],
  variable: "--font-heading",
  display: "swap",
});

const sohoGothic = localFont({
  src: [
    { path: "../../public/fonts/SohoGothicPro-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/SohoGothicPro-Medium.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Personal Training | AnasPlus",
  description:
    "Maximum results with personal coaching - individual, flexible, motivating.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${sohoBold.variable} ${sohoGothic.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}

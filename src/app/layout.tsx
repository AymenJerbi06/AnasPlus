import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import BackToTop from "@/components/BackToTop";

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
  title: {
    default: "Anas Plus Fitness Club",
    template: "%s | Anas Plus",
  },
  description:
    "Anas Plus has two fitness club locations in Tunisia: Bouzayen in Sfax and Route Tunis in Tunis.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${sohoBold.variable} ${sohoGothic.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <BackToTop />
      </body>
    </html>
  );
}

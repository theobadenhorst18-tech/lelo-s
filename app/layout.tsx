import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lelo's Catering | Catering to Your Culinary Delights",
  description: "Fresh, generous catering for weddings, family events, office events and birthdays.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { SanityLive } from "@/sanity/lib/live";

export const metadata: Metadata = {
  title: {
    template: "%s - ShopiCart",
    default: "ShopiCart",
  },
  description: "ShopiCart Online Store, Your one stop shop for all your needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <div className="flex flex-col min-h-screen">
        <SanityLive />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </ClerkProvider>
  );
}

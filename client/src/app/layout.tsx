import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import { PersonContextProvider } from "@/context/PersonContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StoryLine",
  description: "Visualize history trough the people who altered it",
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PersonContextProvider>
          <Header />
          {children}
        </PersonContextProvider>
      </body>
    </html>
  );
};

export default RootLayout;

import { Navbar, Footer } from "@/components/index";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ETHCourse",
  description: "Web3 course marketplace",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative max-w-7xl mx-auto px-4">
          <Navbar />
          <div className="fit">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}

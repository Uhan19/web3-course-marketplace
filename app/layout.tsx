import { Footer, Web3Provider } from "@/components";
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
        <Web3Provider>
          <div className="relative max-w-7xl mx-auto px-4">
            <div className="fit">{children}</div>
          </div>
        </Web3Provider>
      </body>
    </html>
  );
}

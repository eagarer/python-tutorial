import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/app-sidebar";
import ContentArea from "@/components/ContentArea";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Python-Tutorial",
  description: "Python-Tutorial",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body
      // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SidebarProvider>
          <div
            className="flex h-screen"
            // style={{ display: "flex", height: "100vh" }}
          >
            <AppSidebar className="w-1/5" />
          </div>
          <main
            className="w-4/5 flex justify-center overflow-auto"
            // style={{
            //   flex: 1, // kalan tüm alanı kaplar
            //   display: "flex",
            //   flexDirection: "column",
            //   overflow: "auto", // içeriğin taşması durumunda scroll ekler
            // }}
          >
            <SidebarTrigger />
            {children}
          </main>
        </SidebarProvider>
        {/* {children} */}
      </body>
    </html>
  );
}

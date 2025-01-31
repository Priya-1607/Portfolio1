import type { Metadata } from "next";
import { ReactNode } from 'react';
import { Inter } from "next/font/google";
import "./globals.css";
import "../components/Layout/layout.css"
import Link from 'next/link';
import Navbar from "@/components/Navbar/navbar";
import Aboutpage from "./about/page";
import ReduxProvider from './ReduxProvider.client'
import Footer from "@/components/Footer/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
    <head>
      <title>Portfolio</title>
      <script
    // you might need to get a newer version
    src="https://kit.fontawesome.com/fbadad80a0.js"
    crossOrigin="anonymous"
  ></script>
    </head>
    <body>
      <header>

        
     <div>
      <div className="area1">

      </div>
     </div>
    
  
      </header>
      <main>
      <ReduxProvider>
          {children}
       </ReduxProvider>
     
      </main>
      {/* <footer>
    
    <p>&copy; 2024 My Next.js App</p> 
  </footer> */}
      <Navbar/>
      <div>
    
      </div>

      {/* <footer>
     <div>
      <div className="area1">
      <p>&copy; 2024 My Next.js App</p> 
      </div>
     </div>
    
  
      </footer> */}
      {/* <Footer></Footer> */}
    </body>
  </html>
  );
}

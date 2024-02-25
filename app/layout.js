import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "WebTv",
  description: "WebTv HomePage",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      
      
      <body className={inter.className}>
     
<Navbar/>
<div >
{children}
</div>
<Footer/>  
        </body>
      
      
    </html>
  );
}

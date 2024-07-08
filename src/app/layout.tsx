import "./globals.css";
import {Roboto} from "next/font/google";
import React from "react";
import Providers from "./providers";
import Header from "@/components/Header";


const roboto = Roboto({
    weight: ["400", "700"],
    subsets: ["latin", "cyrillic"]
});

export default function RootLayout(
    {children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={roboto.className}>
        <div className="container mx-auto">
            <Providers>
                <Header/>
                {children}
            </Providers>
        </div>
        </body>
        </html>)
}
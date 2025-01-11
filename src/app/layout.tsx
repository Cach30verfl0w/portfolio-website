import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import React from "react";
import {Header} from "@/app/components/Header";
import {Footer} from "@/app/components/Footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Cach30verfl0w Portfolio",
    description: "Generated by create next app",
    applicationName: "Cach30verfl0w Portfolio",
    keywords: ["portfolio", "website", "cach30verfl0w"]
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en_US">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased text-white bg-black min-h-screen bg-gradient-to-t from-black to-[rgba(0,250,0,0.1)] via-black via-[40%] h-screen`}>
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
        </body>
        </html>
    );
}

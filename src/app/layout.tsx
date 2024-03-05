import type {Metadata} from "next";
import {Inter,Montserrat} from "next/font/google";
import "./globals.css";
import {Providers} from "@/utils/provider";
import React from 'react';

const inter = Inter({subsets: ["latin"]});
const font_primary = Montserrat({subsets:["latin"]});

export const metadata: Metadata = {
    title: "Blog App",
    description: "Blogging app",
};

export default function RootLayout({children,}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={`${inter.className} ${font_primary.className} bg-white dark:bg-[#090D1F]`}>
        <Providers>
            {children}
        </Providers>
        </body>
        </html>
    );
}

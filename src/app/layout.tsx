import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {Providers} from "@/utils/provider";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Blog App",
    description: "Blogging app",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className="bg-white dark:bg-[#090D1F]">
        <Providers>
            {children}
        </Providers>
        </body>
        </html>
    );
}

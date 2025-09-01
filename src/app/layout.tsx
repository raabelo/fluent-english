import type { Metadata } from "next";
import { Dosis } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import PageWrapper from "@/components/organisms/PageWrapper";

const dosis = Dosis({
    variable: "--font-dosis",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Fluent English",
    description: "Fluent English | Teacher Gabs",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR">
            <body className={`${dosis.className} antialiased overflow-x-hidden`}>
                <PageWrapper>{children}</PageWrapper>
            </body>
        </html>
    );
}

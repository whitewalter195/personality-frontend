import type { Metadata } from "next";
import "@/styles/globals.css";
import { Josefin_Sans } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import RecoidContextProvider from "@/context/recoilContext";

const josefin = Josefin_Sans({
    subsets: ["latin"],
    display: "swap",
});

export const metadata = {
    title: {
        template: "%s / PersonalityCheck",
        default: "Welcome / PersonalityCheck",
    },
    description:
        "Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt">
            <body
                className={`${josefin.className} grid h-screen grid-rows-[auto_1fr_auto] antialiased`}
            >
                <NavBar />
                <RecoidContextProvider>{children}</RecoidContextProvider>
                <Footer />
            </body>
        </html>
    );
}

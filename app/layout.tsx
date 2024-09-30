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

export const metadata: Metadata = {
    title: "Teste de Personalidade: Avaliação Rápida e Gratuita para Você!",
    robots: "INDEX, FOLLOW, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, MAX-IMAGE-PREVIEW:LARGE",
    description:
        "Descubra mais sobre você com nosso teste de personalidade! Faça a avaliação rápida e gratuita e entenda seu arquétipo e como ele impacta sua vida.",
    alternates: {
        canonical: "https://www.personalidadetest.com/",
    },
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

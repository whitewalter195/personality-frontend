import { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
}

export const metadata = {
    title: "Descubra Seu Tipo de Personalidade - Personalidadetest",
    description:
        "Explore os tipos de personalidade e encontre suas características e carreiras ideais.",
    robots: "INDEX, FOLLOW, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, MAX-IMAGE-PREVIEW:LARGE",
    alternates: {
        canonical: "https://www.personalidadetest.com/personality-types",
    },
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <html lang="pt">
            <body>{children}</body>
        </html>
    );
};

export default Layout;

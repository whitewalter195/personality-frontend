"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const NavItems = () => (
        <>
            <li>
                <Link href="/" className="hover:text-primary">
                    Início
                </Link>
            </li>
            <li>
                <Link href="/personality-types" className="hover:text-primary">
                    Tipos de Personalidade
                </Link>
            </li>
            <li>
                <Link
                    href="/test"
                    className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
                >
                    Verifique Sua Personalidade
                </Link>
            </li>
        </>
    );

    return (
        <nav className="flex justify-between items-center py-4 px-4 md:px-8">
            <div>
                <Logo />
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex justify-between items-center gap-8 text-sm">
                <NavItems />
            </ul>

            {/* Mobile Menu */}
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" size="icon" className="md:hidden">
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Toggle menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="right">
                    <ul className="flex flex-col gap-4 mt-8">
                        <NavItems />
                    </ul>
                </SheetContent>
            </Sheet>
        </nav>
    );
}

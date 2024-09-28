import Link from "next/link";
import Logo from "./Logo";

function NavBar() {
    return (
        <nav className="flex justify-between items-center py-4 px-8">
            <div>
                <Logo />
            </div>

            <div>
                <ul className="flex justify-between items-center gap-8 text-sm">
                    <li>
                        <Link href="/">Início</Link>
                    </li>
                    <li>
                        <Link href="/personality-types">
                            Tipos de Personalidade
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/test"
                            className="px-4 py-4 bg-zinc-800 text-white rounded-md"
                        >
                            Verifique Sua Personalidade
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;

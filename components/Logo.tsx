import Link from "next/link";
import { FcGlobe } from "react-icons/fc";

function Logo() {
    return (
        <Link href="/" className="flex items-center justify-center gap-2">
            <FcGlobe className="text-2xl" />
            <h1 className="text-lg text-zinc-800">
                <span className="text-yellow-400">Personalidade</span>Test
            </h1>
        </Link>
    );
}

export default Logo;

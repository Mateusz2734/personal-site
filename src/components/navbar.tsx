import Link from "next/link";

import { Menu } from "@/components/ui/navbar-menu";

export function Navbar() {
    return (
        <div className="fixed top-4 inset-x-0 max-w-xs mx-auto z-50" >
            <Menu>
                <Link href="/">Home</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/about">About</Link>
            </Menu>
        </div>
    );
}
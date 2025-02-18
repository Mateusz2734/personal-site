'use client';
import { HoveredLink, Menu } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";

export function Navbar({ className }: { className?: string; }) {
    return (
        <div className={cn("fixed top-4 inset-x-0 max-w-xs mx-auto z-50", className)}>
            <Menu>
                <HoveredLink href="#about">About</HoveredLink>
                <HoveredLink href="#projects">Projects</HoveredLink>
                <HoveredLink href="#timeline">Timeline</HoveredLink>
            </Menu>
        </div>
    );
}
import Link from "next/link";
import { LuGithub as Github, LuLinkedin as Linkedin } from "react-icons/lu";

import { Separator } from "@/components/ui/separator";

export function Footer() {
    return (
        <footer className="bg-[#121212] text-foreground mt-8 pb-8 mx-auto">
            <Separator className="my-8" />
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <h3 className="font-bold text-lg">Mateusz Wala</h3>
                        <p className="text-sm text-muted-foreground">Software Engineer</p>
                        <p className="text-sm text-muted-foreground">📍 Kraków, Poland</p>
                        <p className="text-sm text-muted-foreground">✉️ kontakt.mateusz2734@gmail.com</p>
                        <p className="text-sm text-muted-foreground">📄 <a href="resume.pdf" target="_blank" className="underline">My resume</a></p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-sm hover:underline">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/projects" className="text-sm hover:underline">
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-sm hover:underline">
                                    About
                                </Link>
                            </li>
                            <li>
                                <div className="flex space-x-4">
                                    <Link href="https://www.linkedin.com/in/mateusz-wala2734/" target="_blank" rel="noopener noreferrer" aria-label="My LinkedIn profile">
                                        <Linkedin className="h-5 w-5" />
                                    </Link>
                                    <Link href="https://github.com/Mateusz2734" target="_blank" rel="noopener noreferrer" aria-label="My GitHub profile">
                                        <Github className="h-5 w-5" />
                                    </Link>
                                </div>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
            <div className="container mx-auto px-4 pt-2 max-w-7xl">
                <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Mateusz Wala</p>
            </div>
        </footer>
    );
}

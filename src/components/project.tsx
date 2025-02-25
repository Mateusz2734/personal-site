import { FaGithub as Github } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { BentoGridItem } from "@/components/ui/bento-grid";

interface Project {
    title: string;
    description: string;
    image: string;
    url: string;
    technologies: Technology[];
}

interface Technology {
    name: string;
    url: string;
}


export function createProjectShowcase({ title, description, image, url, technologies }: Project, i: number) {
    const cards = [
        i % 2 == 1 ? {
            // LARGE VIEWPORT DESCRIPTION (LEFT)
            header: <LargeViewportDescription description={description} />,
            className: "lg:col-span-1 lg:row-span-7 p-4 hidden lg:block",
        } : null,
        {
            title: <ProjectTile title={title} />,
            description: <MainCardDescription description={description} technologies={technologies} url={url} />,
            header: <CoverImage src={image} />,
            className: "lg:col-span-3 lg:row-span-9",
        },
        i % 2 == 0 ? {
            // LARGE VIEWPORT DESCRIPTION (RIGHT)
            header: <LargeViewportDescription description={description} />,
            className: "lg:col-span-1 lg:row-span-7 p-4 hidden lg:block",
        } : null,
        {
            // LARGE VIEWPORT BADGES
            header: <LargeViewportBadges technologies={technologies} url={url} />,
            className: "hidden lg:block lg:row-span-2 lg:col-span-1 p-4",
        },
        {
            // LARGE VIEWPORT SEPARATOR
            className: "hidden lg:block invisible lg:row-span-1 lg:col-span-4 p-4",
        }];


    return cards.map((item, i) => item ? <BentoGridItem {...item} key={i} /> : null);
}

const LargeViewportDescription = ({ description }: { description: string; }) => {
    return (
        <div className="h-full w-full bg-dot-white/[0.2]">
            <p className="truncate text-wrap line-clamp-[24] text-xs lg:text-sm">
                {description}
            </p>
        </div>
    );
};

const LargeViewportBadges = ({ technologies, url }: { technologies: Technology[]; url: string; }) => {
    return (
        <div className="flex flex-col justify-end gap-4 items-center h-full w-full bg-dot-white/[0.2]">
            <GithubBadge url={url} />
            <div className="flex gap-2 flex-wrap">
                {technologies.map(({ name, url }, i) => (
                    <LinkedBadge key={i} name={name} url={url} />
                ))}
            </div>
        </div>
    );
};

const ProjectTile = ({ title }: { title: string; }) => {
    return (
        <h1 className="block text-3xl lg:text-5xl mb-2 font-bold text-white bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
            {title}
        </h1>
    );
};

const LinkedBadge = ({ name, url }: { name: string; url: string; }) => {
    return (
        <Link href={url} target="_blank" rel="noopener noreferrer">
            <Badge className="bg-neutral-800/50 text-neutral-300 backdrop-blur-sm transition-colors duration-300 hover:bg-neutral-700">
                {name}
            </Badge>
        </Link>
    );
};

const GithubBadge = ({ url }: { url: string; }) => {
    return (
        <Link href={url} target="_blank" rel="noopener noreferrer" aria-label="Project's GitHub repository">
            <Github className="h-6 w-6 text-neutral-200 hover:scale-110 duration-200" />
        </Link>
    );
};

const MainCardDescription = ({ description, technologies, url }: { description: string; technologies: Technology[]; url: string; }) => {
    return (
        <>
            <p className="block lg:hidden truncate text-wrap line-clamp-[24] text-xs lg:text-sm mb-2">
                {description}
            </p>
            <div className="lg:hidden flex flex-row justify-between">
                <div className="flex gap-2 flex-wrap">
                    {technologies.flatMap(({ name, url }, i) => (
                        <LinkedBadge key={i} name={name} url={url} />
                    ))}
                </div>
                <GithubBadge url={url} />
            </div>
        </>
    );
};

const CoverImage = ({ src }: { src: string; }) => {
    return (
        <div className="group relative w-full h-full overflow-hidden rounded-t-xl min-h-[8rem]">
            <Image
                src={src}
                alt="Project cover image"
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                fill
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
    );
};
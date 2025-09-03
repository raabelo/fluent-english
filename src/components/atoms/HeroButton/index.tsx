"use client";
import { FluentColor } from "@/types/FluentColor";
import { getFluentClassColor } from "@/utils/functions/getFluentClassColor";
import { ArrowUpRightIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

interface HeroButtonProps {
    text: string;
    href: string;
    color: FluentColor;
}

export default function HeroButton({ text, href, color }: HeroButtonProps) {
    return (
        <Link
            href={href}
            className={`text-white flex flex-row p-2 items-center gap-4 rounded-full pl-8 w-fit 
                transition-all hover:translate-x-2
                ${getFluentClassColor(color)}`}
        >
            {text}
            <ArrowUpRightIcon
                className={`bg-white p-4 rounded-full size-14
                    ${getFluentClassColor(color, "text")}`}
            />
        </Link>
    );
}

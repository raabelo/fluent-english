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
            className={`${getFluentClassColor(
                color
            )} text-white flex flex-row p-2 items-center gap-4 rounded-full pl-8 w-fit`}
        >
            {text}
            <ArrowUpRightIcon
                className={`bg-white p-4 rounded-full ${getFluentClassColor(
                    color,
                    "text"
                )} size-14`}
            />
        </Link>
    );
}

import { FluentColor } from "@/types/FluentColor";
import { getFluentClassColor } from "@/utils/functions/getFluentClassColor";
import { ReactNode } from "react";

interface Tag {
    children: ReactNode;
    color?: FluentColor;
}

type TagProps = Tag & React.HTMLAttributes<HTMLParagraphElement>;

export default function Tag({ children: text, color = "blue", ...props }: TagProps) {
    return (
        <p
            {...props}
            className={`p-2 rounded-md w-fit text-white font-bold ${getFluentClassColor(color)} ${
                props.className
            }`}
        >
            {text}
        </p>
    );
}

import { FluentColor } from "@/types/IColor";
import { ReactNode } from "react";

interface Tag {
    children: ReactNode;
    color?: FluentColor;
}

type TagProps = Tag & React.HTMLAttributes<HTMLParagraphElement>;

const colorMap: Record<FluentColor, string> = {
    red: "bg-fluent-red",
    blue: "bg-fluent-blue",
    orange: "bg-fluent-orange",
};

export default function Tag({ children: text, color = "blue", ...props }: TagProps) {
    return (
        <p
            {...props}
            className={`p-2 rounded-md w-fit text-white font-bold ${colorMap[color]} ${props.className}`}
        >
            {text}
        </p>
    );
}

import { FluentColor } from "@/types/FluentColor";

type Prefix = "bg" | "text";

const classMap: Record<Prefix, Record<FluentColor, string>> = {
    bg: {
        red: "bg-fluent-red",
        blue: "bg-fluent-blue",
        orange: "bg-fluent-orange",
    },
    text: {
        red: "text-fluent-red",
        blue: "text-fluent-blue",
        orange: "text-fluent-orange",
    },
};

export const getFluentClassColor = (color: FluentColor, prefix: Prefix = "bg"): string => {
    return classMap[prefix][color];
};

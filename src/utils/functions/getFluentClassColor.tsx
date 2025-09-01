import { FluentColor } from "@/types/FluentColor";

type Prefix = "bg" | "text" | "border";

export const getFluentClassColor = (color: FluentColor, prefix: Prefix = "bg"): string => {
    return `${prefix}-fluent-${color}`;
};

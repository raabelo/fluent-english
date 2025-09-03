import Link from "next/link";

interface HeaderLinkProps {
    label?: string;
    children?: React.ReactNode;
}

export default function HeaderLink({ label, children }: HeaderLinkProps) {
    return (
        <Link href={`#`}>
            {children}
            <span>{label}</span>
        </Link>
    );
}

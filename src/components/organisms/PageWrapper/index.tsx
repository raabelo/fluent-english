import React, { ReactNode } from "react";
import Header from "../Header";

interface PageWrapperProps {
    children: ReactNode;
}

export default function PageWrapper({ children }: PageWrapperProps) {
    return (
        <div className="flex flex-col items-center justify-center min-h-svh overflow-x-hidden bg-fluent-orange text-white">
            <Header />
            <div className="flex flex-col w-full">{children}</div>
        </div>
    );
}

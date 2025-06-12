import React, { ReactNode } from "react";
// import Header from "../Header";

interface PageWrapperProps {
    children: ReactNode;
}

export default function PageWrapper({ children }: PageWrapperProps) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen min-w-screen max-w-svw overflow-x-hidden">
            {/* <Header /> */}
            {children}
        </div>
    );
}

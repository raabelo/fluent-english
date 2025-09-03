"use client";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { FluentColor } from "@/types/FluentColor";
import { getFluentClassColor } from "@/utils/functions/getFluentClassColor";

export interface QuestionAccordionProps {
    question: string;
    answer: string;
    color?: FluentColor;
}

export default function QuestionAccordion({
    question,
    answer,
    color = "red",
}: QuestionAccordionProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-left font-medium focus:outline-none rounded-full p-4 pl-8 bg-black/10"
            >
                <span className="font-bold text-lg">{question}</span>
                <div className={`p-2 rounded-full ${getFluentClassColor(color)}`}>
                    <ChevronDownIcon
                        className={`size-6 text-white transform transition-transform duration-300 ${
                            isOpen ? "rotate-180" : "rotate-0"
                        }`}
                    />
                </div>
            </button>

            <div
                className={`overflow-hidden transition-all duration-300 text-gray-700 ${
                    isOpen ? "max-h-40 mt-2" : "max-h-0"
                }`}
            >
                <p className="text-sm">{answer}</p>
            </div>
        </div>
    );
}

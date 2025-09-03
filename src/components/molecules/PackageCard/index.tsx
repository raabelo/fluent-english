"use client";

import { FluentColor } from "@/types/FluentColor";
import { formattedPrice } from "@/utils/functions/formattedPrice";
import { getFluentClassColor } from "@/utils/functions/getFluentClassColor";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export interface PackageCardProps {
    number: number;
    title: string;
    students: string;
    price: {
        mode: "12X" | "MENSALIDADE";
        initialValue: number;
        discountedValue: number;
    };
    description: string[];
    image: string;
    color?: FluentColor;
}

export default function PackageCard({
    number,
    title,
    students,
    price,
    description,
    image,
    color = "red",
}: PackageCardProps) {
    const [flipped, setFlipped] = useState(false);

    return (
        <div
            className="w-full aspect-square cursor-pointer"
            onMouseEnter={() => setFlipped(true)}
            onMouseLeave={() => setFlipped(false)}
            onClick={() => setFlipped((prev) => !prev)}
        >
            <motion.div
                className="relative w-full h-full"
                animate={{ rotateY: flipped ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                style={{
                    transformStyle: "preserve-3d",
                }}
            >
                <div
                    className="absolute inset-0 bg-black/10 rounded-xl p-6"
                    style={{
                        backfaceVisibility: "hidden",
                        WebkitBackfaceVisibility: "hidden",
                    }}
                >
                    <div className="flex flex-row items-center gap-4">
                        <p
                            className={`p-2 bg-white aspect-square size-10 flex items-center justify-center rounded-full ${getFluentClassColor(
                                color,
                                "text"
                            )}`}
                        >
                            {(number < 10 ? "0" : "") + number}
                        </p>
                        <div className="flex flex-col">
                            <p className="font-bold text-xl">{title}</p>
                            <p>{students}</p>
                        </div>
                    </div>

                    <div className="mt-2 flex flex-col">
                        <p className="uppercase text-sm">{price.mode} de:</p>
                        <p className="uppercase text-sm line-through">
                            {formattedPrice(price.initialValue)}
                        </p>
                        <p className="uppercase text-sm mt-1">
                            por
                            <span className="font-bold text-base">
                                {" "}
                                {formattedPrice(price.discountedValue)}{" "}
                            </span>
                            *
                        </p>
                    </div>

                    <Image
                        className="absolute bottom-8 -right-4 object-cover"
                        src={image}
                        alt={`${title} icon`}
                        height={500}
                        width={200}
                        priority
                    />
                </div>

                <div
                    className="absolute inset-0 bg-black/10 rounded-xl p-10 flex items-center justify-center text-center"
                    style={{
                        transform: "rotateY(180deg)",
                        backfaceVisibility: "hidden",
                        WebkitBackfaceVisibility: "hidden",
                    }}
                >
                    <ul>
                        {description?.map((item, index) => (
                            <li key={index} className="text-sm list-disc text-left">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </motion.div>
        </div>
    );
}

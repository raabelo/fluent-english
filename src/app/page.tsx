import ConveyorBelt from "@/components/atoms/CoveyorBelt";
import Tag from "@/components/atoms/Tag";
import { IColor } from "@/types/IColor";
import Image from "next/image";

export default function Home() {
    return (
        <div className="flex flex-col min-h-svh w-full">
            <main className="w-full bg-fluent-orange pt-20 flex flex-col-reverse items-center justify-center h-fit min-h-svh lg:flex-row lg:px-40">
                <Image
                    className="object-contain mb-0 mt-auto"
                    src="/images/pic-gabs.png"
                    alt="Fluent English logo"
                    priority
                    width={500}
                    height={200}
                    draggable={false}
                />
                <div className="m-auto">
                    <Tag className="text-4xl">mon cœur est déjà à toi</Tag>
                </div>
            </main>
            <section>
                <article className="min-h-[50svh]">
                    <div className="p-20 flex flex-row flex-wrap gap-x-2 gap-y-4">
                        {`Site in development in order to study Next.js, practice French, and comme cadeau d'anniversaire de la femme la plus incroyable que j'ai rencontrée récemment 🫶🏽`
                            .split(" ")
                            .map((item, i) => {
                                const colors: IColor[] = ["red", "blue", "orange"];
                                const color = colors[i % colors.length];

                                return (
                                    <Tag key={i} color={color} className="text-xl">
                                        {item}
                                    </Tag>
                                );
                            })}
                    </div>

                    <ConveyorBelt />
                </article>
            </section>
        </div>
    );
}

import ConveyorBelt from "@/components/atoms/CoveyorBelt";
import Tag from "@/components/atoms/Tag";
import Image from "next/image";

export default function Home() {
    return (
        <div className="flex flex-col min-h-svh w-full">
            <main className="w-full bg-fluent-orange flex flex-col items-center justify-center h-svh lg:flex-row px-40">
                <Image
                    className="object-contain mb-0 mt-auto"
                    src="/images/pic-gabs.png"
                    alt="Fluent English logo"
                    priority
                    width={500}
                    height={200}
                    draggable={false}
                />
                <div>
                    <Tag className="text-4xl">mon cœur est déjà à toi</Tag>
                </div>
            </main>
            <section>
                <article className="min-h-[50svh]">
                    <p className="p-20">
                        {`Site developed to study Next.js, practice French, and comme cadeau d'anniversaire de la femme la plus incroyable que j'ai rencontrée récemment 🫶🏽`}
                    </p>
                    <ConveyorBelt />
                </article>
            </section>
        </div>
    );
}

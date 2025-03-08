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
                    <Tag className="text-4xl">Olá gabs linda</Tag>
                </div>
            </main>
            <section>
                <article className="min-h-[50svh]">
                    <p>teste</p>
                    <ConveyorBelt />
                </article>
            </section>
        </div>
    );
}

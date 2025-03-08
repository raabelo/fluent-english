import Image from "next/image";

export default function Header() {
    return (
        <div className="w-full overflow-hidden flex flex-row items-center justify-center absolute bg-transparent top-0 p-4 z-50">
            <Image
                className="object-cover mx-auto invert" //mr-auto ml-0
                src="/images/logo-fluent.svg"
                alt="Fluent English logo"
                width={80}
                height={80}
                priority
            />
        </div>
    );
}

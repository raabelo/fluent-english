import HeaderLink from "@/components/atoms/HeaderLink";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const LOGO = "/images/logo-fluent.svg";

export default function Header() {
    const sections = ["Vantagens", "Modalidades", "Feedbacks", "FAQ"];

    return (
        <div className="w-full overflow-hidden flex flex-row items-center justify-between p-4 -mb-20 z-10">
            <Image
                className="object-cover invert"
                src={LOGO}
                alt="Fluent English logo"
                width={80}
                height={40}
                priority
            />
            <div className="text-white flex flex-row gap-20">
                {sections.map((section) => (
                    <HeaderLink key={section} label={section} />
                ))}
            </div>
            <div className="text-white text-lg flex flex-row gap-4">
                <HeaderLink>
                    <FontAwesomeIcon icon={faInstagram} />
                </HeaderLink>
                <HeaderLink>
                    <FontAwesomeIcon icon={faWhatsapp} />
                </HeaderLink>
            </div>
        </div>
    );
}

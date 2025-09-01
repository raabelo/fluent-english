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
                    <span key={section}>{section}</span>
                ))}
            </div>
            <div className="text-white">
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faWhatsapp} />
            </div>
        </div>
    );
}

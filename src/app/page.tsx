import HeroButton from "@/components/atoms/HeroButton";
import PackageCard, { PackageCardProps } from "@/components/molecules/PackageCard";
import QuestionAccordion, {
    QuestionAccordionProps,
} from "@/components/molecules/QuestionAccordion";
import Image from "next/image";

const PICTURE = "/images/pic-gabs.png";
const PKG_GROUP = "/images/package-group.png";
const PKG_PAIR = "/images/package-pair.png";
const PKG_INDIVIDUAL = "/images/package-individual.png";

export default function Home() {
    // const labels = [
    //     "Básico ao Avançado",
    //     "Estudos da Gramática",
    //     "Conversação",
    //     "Inglês para Negócios",
    //     "Inglês para Viagens",
    //     "Produção textual em Inglês",
    //     "Preparatório IELTS",
    //     "Phrasal Verbs",
    // ];

    const packages: PackageCardProps[] = [
        {
            number: 1,
            title: "Turma",
            students: "Entre 3 a 5 alunos",
            price: { mode: "12X", initialValue: 260, discountedValue: 234 },
            description: [
                "Duas horas de aula por semana com dias e horários fixos",
                "Acesso a gravação das aulas em caso de falta como forma de reposição",
                "Material didático incluso",
                "Plano de estudo diário personalizado",
                "Envio de atividades on-line complementares",
                "Suporte por WhatsApp",
                "Contrato anual",
            ],
            image: PKG_GROUP,
        },
        {
            number: 2,
            title: "Dupla",
            students: "Somente 2 alunos",
            price: { mode: "12X", initialValue: 335, discountedValue: 301.5 },
            description: [
                "Duas horas de aula por semana com dias e horários mais flexíveis com até dez reposições ao vivo gratuitas (desde que a falta seja notificada com seis horas de antecedência) ",
                "Material didático incluso",
                "Plano de estudo diário personalizado",
                "Envio de atividades on-line complementares",
                "Suporte por WhatsApp",
                "Contrato anual",
            ],
            image: PKG_PAIR,
        },
        {
            number: 3,
            title: "Individual",
            students: "Aulas particulares",
            price: { mode: "MENSALIDADE", initialValue: 445, discountedValue: 400.5 },
            description: [
                "Aulas semanais de uma hora à uma hora e meia",
                "Dias e horários mais flexíveis",
                "Reposição ao vivo gratuita (desde que a falta seja notificada com antecedência)",
                "Contrato trimestral, semestral ou anual, de acordo com a demanda do(a) aluno(a)",
                "Material didático físico incluso (enviamos para todo o Brasil)",
                "Plano de estudo diário personalizado",
                "Envio de atividades on-line complementares",
                "Suporte por WhatsApp",
            ],
            image: PKG_INDIVIDUAL,
        },
    ];

    const faq: QuestionAccordionProps[] = [
        {
            question: "Como funcionam as aulas?",
            answer: "",
        },
        {
            question: "A aula é toda em inglês?",
            answer: "",
        },
        {
            question: "O curso tem material didático?",
            answer: "",
        },
        {
            question: "Como funciona o envio do material didático?",
            answer: "",
        },
    ];

    return (
        <>
            <div className="h-svh flex items-end justify-end">
                <div>
                    {/* <p className="font-bold text-9xl uppercase font-[arial]">Te ajudo destravar seu ✨Fluent English✨</p> */}
                    <Image
                        className="object-cover absolute bottom-0 left-20"
                        src={PICTURE}
                        alt="Teacher Gabs picture"
                        height={100}
                        width={300}
                        priority
                    />
                </div>
                <div className="m-10">
                    <HeroButton href="" color="blue" text="Agendar aula anamnese" />
                </div>
            </div>
            <div className="h-svh flex flex-col items-center justify-around p-10 px-40 bg-fluent-red">
                <p className="uppercase font-bold text-4xl">PACOTES DAS AULAS DE INGLÊS</p>
                <div className="grid grid-cols-3 gap-10  w-full">
                    {packages.map((pkg) => (
                        <PackageCard key={pkg.number} color={"red"} {...pkg} />
                    ))}
                </div>
                <p className="text-xs">*Acertando a mensalidade até o dia 10 de cada mês</p>
            </div>
            <div className="h-svh flex items-center bg-fluent-blue">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 m-10 mx-40 w-full">
                    {[0, 1].map((col) => (
                        <div key={col} className="flex flex-col space-y-4">
                            {faq
                                .slice(
                                    col === 0 ? 0 : Math.ceil(faq.length / 2),
                                    col === 0 ? Math.ceil(faq.length / 2) : faq.length
                                )
                                .map((qst) => (
                                    <QuestionAccordion key={qst.question} {...qst} />
                                ))}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

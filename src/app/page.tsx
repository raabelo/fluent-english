import HeroButton from "@/components/atoms/HeroButton";

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

    return (
        <div className="h-svh flex items-end justify-end p-10">
            <HeroButton href="anamnese" color="blue" text="Agendar aula anamnese" />
        </div>
    );
}

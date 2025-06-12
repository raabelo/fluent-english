import Tag from "@/components/atoms/Tag";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen w-full bg-fluent-orange text-zinc-800 font-serif">
            <main className="flex flex-col items-center justify-center w-full px-6 py-16 lg:px-40 gap-12">
                {/* Título com animação suave e destaque */}
                <div className="text-center animate-fade-in-up">
                    <Tag className="text-4xl lg:text-5xl drop-shadow-md transition-all duration-700">
                        mon cœur est déjà à toi, ma chérie <span className="animate-pulse">❤️</span>
                    </Tag>
                </div>

                {/* Corpo do texto com decoração */}
                <article className="max-w-2xl text-lg leading-relaxed bg-white/75 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-orange-300 transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl">
                    <p className="mb-4">
                        Queria te dar algo que fosse a nossa cara (adorei quando você deu a ideia,
                        pois já era algo que eu pensava) — ou melhor, duas coisas.
                    </p>
                    <p className="mb-4">
                        A primeira é essa <strong>Polaroid</strong>. Pra gente eternizar nossos
                        momentos, nossos sorrisos, nossos olhares (principalmente o modo como eu te
                        olho -nessa foto-)… Que seja uma lembrança do que a gente vive junto e do
                        que ainda vem por aí.
                    </p>
                    <p className="mb-4">
                        A segunda, bom… é pra quando eu não puder estar aí contigo. Um presente pra
                        você se divertir, e lembrar de mim de um jeitinho mais... <em>intenso</em> 🫦
                    </p>
                    <p>
                        Porque você merece <strong>prazer</strong>, <strong>presença</strong> e{" "}
                        <strong>lembrança</strong> — mesmo quando eu estiver longe.
                        <br />
                        Você é <strong>vista</strong>, <strong>sentida</strong> e{" "}
                        <strong>amanda</strong>.
                        <br />
                        <span className="italic">
                            Com carinho, saudade e um pouco de <s>safadeza</s>.
                        </span>
                        <center className="pt-2">EU TE AMO, MEU BENZINHO</center>
                        <center className="pt-2 italic">Quer namorar comigo?</center>
                    </p>
                </article>

                {/* Coração decorativo pulsando */}
                <div className="text-3xl animate-pulse text-pink-400 select-none">💌</div>
            </main>
        </div>
    );
}

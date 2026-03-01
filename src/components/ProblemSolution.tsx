import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ProblemSolution() {
    const containerRef = useRef<HTMLDivElement>(null);
    const leftColRef = useRef<HTMLDivElement>(null);
    const rightColRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Pinning the problem section while the solution items fade in
            gsap.from(leftColRef.current, {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 70%',
                    toggleActions: 'play none none reverse',
                },
                opacity: 0,
                x: -50,
                duration: 1,
                ease: 'power3.out'
            });

            const items = gsap.utils.toArray('.solution-item');
            gsap.from(items, {
                scrollTrigger: {
                    trigger: rightColRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                },
                opacity: 0,
                y: 30,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power3.out'
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-24 md:py-40 px-6 max-w-7xl mx-auto border-t border-dark/10 relative z-10 w-full" id="about">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start">
                {/* Left Column - Problem */}
                <div ref={leftColRef} className="sticky top-40 space-y-8 max-w-md">
                    <span className="text-gold font-sans font-bold tracking-widest uppercase text-sm">El Status Quo</span>
                    <h2 className="text-4xl md:text-6xl font-serif text-dark leading-tight">
                        La mediocridad de lo <span className="italic">genÃ©rico</span>.
                    </h2>
                    <ul className="space-y-6 text-dark/70 font-sans text-lg md:text-xl">
                        <li className="flex items-center gap-4">
                            <span className="w-8 h-[1px] bg-dark/30 font-light block"></span>
                            AstrologÃ­a estandarizada en revistas.
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="w-8 h-[1px] bg-dark/30 font-light block"></span>
                            Falta de propÃ³sito y claridad direccional.
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="w-8 h-[1px] bg-dark/30 font-light block"></span>
                            DesconexiÃ³n con tu esencia profunda.
                        </li>
                    </ul>
                </div>

                {/* Right Column - Solution */}
                <div ref={rightColRef} className="space-y-16 lg:mt-32">
                    {solutions.map((item, i) => (
                        <div key={i} className="solution-item space-y-4">
                            <h3 className="text-2xl md:text-3xl font-serif text-dark bg-ivory p-6 border-l-2 border-gold shadow-[0_4px_30px_rgba(0,0,0,0.03)] backdrop-blur-md transition-all hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(0,0,0,0.05)] cursor-default">
                                {item.title}
                            </h3>
                            <p className="text-dark/60 font-sans leading-relaxed text-lg pl-8">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

const solutions = [
    {
        title: 'Algoritmo de precisiÃ³n astronÃ³mica',
        desc: 'InterpretaciÃ³n de cartas natales validada por datos efemeridales de la NASA.'
    },
    {
        title: 'Descubrimiento del Animal Astral',
        desc: 'Un arquetipo bestial que define tu verdadera naturaleza y proyecciÃ³n relacional.'
    },
    {
        title: 'Identidad Visual & Objetos de Poder',
        desc: 'Artefactos y grÃ¡ficos que materializan tu mapa astral en el plano fÃ­sico.'
    }
];

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Features() {
    const containerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);
    const terminalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Baraja diagnÃ³stica rotation
            const cards = gsap.utils.toArray('.astro-card');
            gsap.fromTo(cards,
                { rotateZ: () => gsap.utils.random(-15, 15), y: 50, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: cardsRef.current,
                        start: 'top 80%',
                    },
                    stagger: 0.15,
                    rotateZ: (i) => [-8, 0, 8][i],
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'back.out(1.7)'
                }
            );

            // Terminal Typing Effect
            const lines = gsap.utils.toArray('.terminal-line');
            gsap.set(lines, { opacity: 0, x: -10 });
            gsap.to(lines, {
                scrollTrigger: {
                    trigger: terminalRef.current,
                    start: 'top 75%',
                },
                opacity: 1,
                x: 0,
                stagger: 0.8,
                duration: 0.1,
                ease: 'steps(1)'
            });

        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} id="features" className="py-32 px-6 max-w-7xl mx-auto relative z-10 border-t border-dark/10">
            <div className="text-center mb-24">
                <span className="text-gold font-sans font-bold tracking-widest uppercase text-sm">El Sistema</span>
                <h2 className="text-5xl md:text-7xl font-serif text-dark mt-4">Artefactos <span className="italic">Astrales</span></h2>
            </div>

            <div className="flex flex-col gap-32">
                {/* Feature 1: Baraja DiagnÃ³stica */}
                <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="order-2 md:order-1 relative h-80 md:h-[400px] flex justify-center items-center perspective-[1000px]">
                        {['Planetas', 'Casas', 'Aspectos'].map((title, i) => (
                            <div key={title} className={`astro-card absolute w-48 md:w-64 h-72 md:h-96 bg-ivory border-2 border-gold rounded-xl p-6 shadow-2xl flex flex-col justify-between origin-bottom ${i === 1 ? 'z-10' : i === 2 ? 'z-20' : ''}`}>
                                <div className="text-xs font-sans tracking-widest text-dark/50 uppercase">{`0${i + 1}`}</div>
                                <div className="text-center font-serif text-3xl italic">{title}</div>
                                <div className="w-full h-[1px] bg-gold"></div>
                            </div>
                        ))}
                    </div>
                    <div className="order-1 md:order-2 space-y-6">
                        <h3 className="text-3xl font-serif text-dark">Baraja DiagnÃ³stica</h3>
                        <p className="text-dark/70 font-sans text-lg leading-relaxed">
                            Analizamos las posiciones planetarias, la domificaciÃ³n exacta, y los aspectos geomÃ©tricos en tu momento de origen.
                        </p>
                    </div>
                </div>

                {/* Feature 2: TelemetrÃ­a en vivo */}
                <div ref={terminalRef} className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6">
                        <h3 className="text-3xl font-serif text-dark">TelemetrÃ­a de PrecisiÃ³n</h3>
                        <p className="text-dark/70 font-sans text-lg leading-relaxed">
                            Nuestro motor de cÃ¡lculo procesa efemÃ©rides en tiempo real para extraer el dato cÃ³smico mÃ¡s puro posible.
                        </p>
                    </div>
                    <div className="bg-[#111] p-8 rounded-lg shadow-[inset_0_2px_15px_rgba(0,0,0,0.8)] border border-[#333] font-mono text-sm h-64 flex flex-col justify-center overflow-hidden">
                        <div className="space-y-4 text-ivory/80">
                            <div className="terminal-line"><span className="text-green-500">{'> '}</span>Calculando efemÃ©rides heliocÃ©ntricas...</div>
                            <div className="terminal-line"><span className="text-green-500">{'> '}</span>Sincronizando sistema de domificaciÃ³n Placidus...</div>
                            <div className="terminal-line"><span className="text-gold">{'> '}</span>Mapeando arquetipo: <span className="text-white font-bold animate-pulse">Animal Astral Encontrado [Lobo]</span>.</div>
                        </div>
                    </div>
                </div>

                {/* Feature 3: Protocolo y Productos */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative overflow-hidden h-[400px]">
                    <div className="order-2 md:order-1 relative w-full h-full flex items-center justify-center p-8 bg-ivory/50 border border-gold/20 rounded-3xl overflow-hidden" ref={(el) => {
                        if (!el) return;
                        const cursor = el.querySelector('.mock-cursor');
                        const signCard = el.querySelector('.sign-card');
                        const catalog = el.querySelector('.catalog-reveal');

                        gsap.timeline({
                            scrollTrigger: {
                                trigger: el,
                                start: 'top 60%',
                            }
                        })
                            .to(cursor, { x: 40, y: -20, duration: 1, ease: 'power2.inOut' })
                            .to(cursor, { scale: 0.8, duration: 0.1 })
                            .to(signCard, { scale: 0.95, duration: 0.1 }, '<')
                            .to(cursor, { scale: 1, duration: 0.1 })
                            .to(signCard, { scale: 1, duration: 0.1 }, '<')
                            .to(catalog, { height: 'auto', opacity: 1, duration: 0.6, ease: 'power3.out', stagger: 0.1 })
                            .to(cursor, { x: 120, y: 80, duration: 1, ease: 'power2.inOut', delay: 0.2 });

                    }}>
                        <div className="relative z-10 w-full max-w-sm bg-white p-6 shadow-2xl rounded-2xl flex flex-col gap-4 border border-dark/5">
                            <div className="flex justify-between items-center border-b border-dark/10 pb-4">
                                <div className="text-xl font-serif italic text-dark">SelecciÃ³n Zodiacal</div>
                            </div>

                            <div className="sign-card p-4 rounded-xl border border-gold bg-ivory flex items-center justify-between cursor-pointer">
                                <span className="font-serif text-lg tracking-widest text-dark">Sagitario (Ascendente)</span>
                                <span className="w-4 h-4 rounded-full border border-gold"></span>
                            </div>

                            <div className="catalog-reveal overflow-hidden opacity-0 h-0">
                                <div className="text-xs uppercase font-sans tracking-widest text-dark/50 mb-3 mt-4">CatÃ¡logo Asignado</div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="h-28 bg-dark/5 rounded-lg border border-dark/10 flex flex-col items-center justify-center relative overflow-hidden group">
                                        <div className="text-xs text-dark font-bold z-10">TÃ³tem Textil</div>
                                        <div className="text-[10px] text-dark/60 z-10">Lobo de Fuego</div>
                                        <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    </div>
                                    <div className="h-28 bg-dark/5 rounded-lg border border-dark/10 flex flex-col items-center justify-center relative overflow-hidden group">
                                        <div className="text-xs text-dark font-bold z-10">Libro Astral</div>
                                        <div className="text-[10px] text-dark/60 z-10">EdiciÃ³n FÃ­sica</div>
                                        <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="mock-cursor absolute text-dark z-50 transform -translate-x-32 translate-y-32 filter drop-shadow-md">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M13.64,21.97C13.14,22.21 12.54,22 12.31,21.5L10.13,16.76L7.62,18.78C7.45,18.92 7.24,19 7,19C6.45,19 6,18.55 6,18V3C6,2.6 6.24,2.23 6.6,2.08C6.96,1.93 7.37,2.04 7.62,2.32L17.75,13.67C18.12,14.07 18.06,14.7 17.65,15.06C17.47,15.22 17.25,15.31 17,15.31H13.71L15.93,20.1C16.14,20.57 15.94,21.12 15.47,21.32L13.64,21.97Z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 md:order-2 space-y-6">
                        <h3 className="text-3xl font-serif text-dark">Colecciones Exclusivas</h3>
                        <p className="text-dark/70 font-sans text-lg leading-relaxed">
                            Descubierto tu Animal Astral, se despliega ante ti un catÃ¡logo fÃ­sico diseÃ±ado meticulosamente: prints de arte, indumentaria y libros de vida orgÃ¡nicos.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

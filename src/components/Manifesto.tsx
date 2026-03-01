import { useRef } from 'react';
import type { MouseEvent } from 'react';
import gsap from 'gsap';

export default function Manifesto() {
    const btnRef = useRef<HTMLAnchorElement>(null);

    const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
        if (!btnRef.current) return;
        const { left, top, width, height } = btnRef.current.getBoundingClientRect();
        const x = e.clientX - left - width / 2;
        const y = e.clientY - top - height / 2;
        gsap.to(btnRef.current, {
            x: x * 0.3,
            y: y * 0.3,
            duration: 0.8,
            ease: 'power3.out',
        });
    };

    const handleMouseLeave = () => {
        if (!btnRef.current) return;
        gsap.to(btnRef.current, {
            x: 0,
            y: 0,
            duration: 0.8,
            ease: 'elastic.out(1, 0.3)',
        });
    };

    return (
        <section id="manifesto" className="relative w-full py-40 bg-dark flex flex-col items-center justify-center text-center px-4 overflow-hidden border-t-8 border-gold/30">
            {/* Background texture via mix-blend / opacity */}
            <div className="absolute inset-0 bg-[#0a0a0a] mix-blend-multiply opacity-50 z-0 pointer-events-none"
                style={{ backgroundImage: 'url("data:image/svg+xml;utf8,<svg viewBox=\\"0 0 200 200\\" xmlns=\\"http://www.w3.org/2000/svg\\"><filter id=\\"noise\\"><feTurbulence type=\\"fractalNoise\\" baseFrequency=\\"0.8\\" numOctaves=\\"4\\" stitchTiles=\\"stitch\\"/></filter><rect width=\\"100%\\" height=\\"100%\\" filter=\\"url(%23noise)\\" opacity=\\"0.15\\"/></svg>")' }}>
            </div>

            <div className="relative z-10 max-w-4xl space-y-16">
                <h2 className="text-4xl md:text-6xl text-ivory font-serif leading-tight">
                    Â¿Lo normal? <span className="opacity-50">Leer el horÃ³scopo.</span> <br className="hidden md:block" />
                    Â¿Lo premium? <span className="italic text-gold">Poseer tu Identidad Astral.</span>
                </h2>

                <div className="pt-10 flex justify-center">
                    <a
                        href="#generator"
                        ref={btnRef}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        className="group relative inline-block px-12 py-5 bg-gold border border-gold/20 rounded-full text-dark font-sans font-bold text-lg uppercase tracking-[0.2em] shadow-[0_0_50px_rgba(212,175,55,0.4)] overflow-hidden transition-shadow hover:shadow-[0_0_80px_rgba(212,175,55,0.6)]"
                    >
                        <div className="absolute inset-0 bg-ivory scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] z-0"></div>
                        <span className="relative z-10">Generar mi identidad</span>
                    </a>
                </div>
            </div>
        </section>
    );
}

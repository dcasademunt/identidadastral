import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const title1Ref = useRef<HTMLHeadingElement>(null);
    const title2Ref = useRef<HTMLHeadingElement>(null);
    const badgeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            tl.from(badgeRef.current, {
                y: 20,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out',
                delay: 0.2
            })
                .from(title1Ref.current, {
                    y: 30,
                    opacity: 0,
                    duration: 0.8,
                    ease: 'power3.out'
                }, '-=0.5')
                .from(title2Ref.current, {
                    y: 40,
                    opacity: 0,
                    duration: 1,
                    ease: 'expo.out'
                }, '-=0.6');
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative w-full h-[100dvh] flex flex-col justify-center items-center text-center px-4 overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=2600&auto=format&fit=crop")' }}
            >
                <div className="absolute inset-0 bg-ivory/80 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-ivory/40 via-ivory/80 to-ivory"></div>
            </div>

            <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
                {/* Badge */}
                <div ref={badgeRef} className="py-2 px-6 rounded-full border border-gold/40 bg-ivory/50 backdrop-blur-sm mb-12 shadow-sm inline-flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse shadow-[0_0_8px_rgba(212,175,55,0.8)]"></span>
                    <span className="text-sm font-semibold tracking-wide text-dark/80 uppercase">
                        +25,000 perfiles astrales analizados con precisiÃ³n de laboratorio
                    </span>
                </div>

                {/* Hero Typography */}
                <h1 className="flex flex-col items-center select-none cursor-default">
                    <span ref={title1Ref} className="text-xl md:text-3xl font-sans font-bold tracking-widest text-dark uppercase mb-4 opacity-90">
                        Tu historia estÃ¡ escrita en el
                    </span>
                    <span ref={title2Ref} className="text-7xl md:text-9xl lg:text-[12rem] font-serif italic text-dark leading-none tracking-tight">
                        Firmamento
                    </span>
                </h1>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center gap-2 text-dark/60 z-10">
                <span className="text-xs uppercase tracking-widest font-semibold">Descubrir</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 4L12 20M12 20L6 14M12 20L18 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
        </section>
    );
}

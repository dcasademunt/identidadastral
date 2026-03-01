import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function Navbar() {
    const navRef = useRef<HTMLDivElement>(null);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (scrollY > 50 && !isScrolled) {
                setIsScrolled(true);
                gsap.to(navRef.current, {
                    backgroundColor: 'rgba(242, 240, 233, 0.85)', // Ivory semi-transparent
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(26, 26, 26, 0.05)',
                    duration: 0.4,
                    ease: 'power2.out',
                });
            } else if (scrollY <= 50 && isScrolled) {
                setIsScrolled(false);
                gsap.to(navRef.current, {
                    backgroundColor: 'transparent',
                    backdropFilter: 'blur(0px)',
                    border: '1px solid transparent',
                    duration: 0.4,
                    ease: 'power2.out',
                });
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isScrolled]);

    return (
        <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
            <nav
                ref={navRef}
                className="flex items-center justify-between px-6 py-3 rounded-full w-full max-w-3xl transition-colors"
            >
                <div className="font-serif font-bold text-xl text-dark tracking-wide">
                    Identidad Astral
                </div>
                <div className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide text-dark/80">
                    <a href="#about" className="hover:text-gold transition-colors">Experiencia</a>
                    <a href="#features" className="hover:text-gold transition-colors">Artefactos</a>
                    <a href="#manifesto" className="hover:text-gold transition-colors">Manifiesto</a>
                </div>
                <a href="#generator" className="bg-dark text-ivory px-5 py-2 rounded-full text-sm font-medium hover:bg-gold hover:text-dark transition-all duration-300 transform hover:scale-[1.02] shadow-lg">
                    Generar mi identidad
                </a>
            </nav>
        </div>
    );
}

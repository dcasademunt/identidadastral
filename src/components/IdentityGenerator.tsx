import { useState, useRef, useEffect } from 'react';
import type { FormEvent } from 'react';
import gsap from 'gsap';

export default function IdentityGenerator() {
    const [step, setStep] = useState<'form' | 'calculating' | 'result'>('form');
    const [loadingText, setLoadingText] = useState('');

    const [formData, setFormData] = useState({
        name: '',
        date: '',
        time: '',
        location: ''
    });

    const [result, setResult] = useState<{
        name: string;
        animalDesc: string;
        image: string;
        personality: string;
        challenges: string;
        strengths: string;
    } | null>(null);

    const resultRef = useRef<HTMLDivElement>(null);

    const animals = [
        {
            name: 'Lobo de Éter',
            animalDesc: 'Guía intuitivo, leal a su manada pero con una profunda conexión con el vacío y el misterio.',
            image: '/images/lobo_eter.png',
            personality: 'Posees una naturaleza dual: eres un estratega nato en el plano material, pero tu mundo interior está gobernado por una intensa intuición. Hay una nobleza salvaje en tu forma de amar y crear.',
            challenges: 'Tu principal reto es la polarización. A veces oscilas entre el aislamiento absoluto y la entrega total, quemándote en el proceso. Aprender a transitar los matices grises es tu tarea kármica.',
            strengths: 'Visión penetrante. Puedes ver las motivaciones ocultas de las personas y tienes una capacidad de regeneración emocional envidiable.'
        },
        {
            name: 'Ciervo Coronal',
            animalDesc: 'Símbolo de gracia y percepción sutil, atraviesa el bosque de las ilusiones con una visión majestuosa.',
            image: '/images/ciervo_coronal.png',
            personality: 'Tu energía es elegante, magnética y profundamente receptiva. Tiendes a liderar desde la serenidad en lugar de la imposición. Tienes un don innato para armonizar espacios caóticos.',
            challenges: 'Hiper-sensibilidad a los retornos kármicos de otros. Tiendes a cargar con la densidad emocional de quienes amas, olvidando proteger tus propias fronteras energéticas.',
            strengths: 'Diplomacia instintiva, gusto estético extraordinario y la habilidad de canalizar ideas complejas en formas creativas simples y bellas.'
        },
        {
            name: 'Águila Solar',
            animalDesc: 'Visión cenital, autoridad natural y una voluntad que no se dobla ante los vientos cruzados.',
            image: '/images/aguila_solar.png',
            personality: 'Vives desde una perspectiva de "macrovista". No te interesan los detalles mundanos temporales, estás aquí para construir un legado. Tu presencia impone respeto de forma silenciosa.',
            challenges: 'Impaciencia con el ritmo de los demás. A veces puedes parecer inalcanzable o frío, lo que dificulta la intimidad real con aquellos que caminan en la tierra.',
            strengths: 'Foco inquebrantable, ejecución precisa bajo presión y una mente brillante para identificar oportunidades donde otros ven colapso.'
        }
    ];

    const handleGenerate = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!formData.name || !formData.date || !formData.time || !formData.location) return;

        setStep('calculating');

        // Simulate calculation process
        const phrases = [
            'Sintetizando domificación de Placidus...',
            'Revelando arquetipo natal en el plano astral...',
            'Iniciando motor de renderización visual...',
            'Conectando pipeline con la red neuronal densa...',
            'Invocando a Nano Banana para la generación fotográfica de la entidad...'
        ];

        let currentPhrase = 0;
        const interval = setInterval(() => {
            setLoadingText(phrases[currentPhrase]);
            currentPhrase++;
            if (currentPhrase === phrases.length) {
                clearInterval(interval);
                setTimeout(() => {
                    // Picks an animal based on the length of the name strictly for this mock
                    const index = formData.name.length % animals.length;
                    setResult(animals[index]);
                    setStep('result');
                }, 1500);
            }
        }, 1200);
    };

    useEffect(() => {
        if (step === 'result' && resultRef.current) {
            gsap.fromTo(resultRef.current,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out' }
            );
        }
    }, [step]);

    return (
        <section id="generator" className="py-32 px-6 max-w-5xl mx-auto relative z-10 min-h-[80vh] flex flex-col justify-center">

            {step === 'form' && (
                <div className="max-w-2xl mx-auto w-full bg-white p-10 md:p-16 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-dark/5 transition-all duration-500">
                    <div className="text-center mb-12">
                        <span className="text-gold font-sans font-bold tracking-widest uppercase text-xs">Singularidad</span>
                        <h2 className="text-4xl font-serif text-dark mt-2 italic">Descubre tu Identidad</h2>
                        <p className="text-dark/50 mt-4 font-sans text-sm">Los astros requieren precisión absoluta. Introduce tus coordenadas de origen.</p>
                    </div>

                    <form onSubmit={handleGenerate} className="space-y-8">
                        <div>
                            <label className="block text-xs uppercase tracking-widest font-bold text-dark/70 mb-2">Nombre de pila</label>
                            <input
                                type="text"
                                required
                                className="w-full bg-transparent border-b border-dark/20 pb-2 text-xl font-serif text-dark focus:outline-none focus:border-gold transition-colors"
                                placeholder="Ej. Isabella Windsor"
                                value={formData.name}
                                onChange={e => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <label className="block text-xs uppercase tracking-widest font-bold text-dark/70 mb-2">Fecha de encarnación</label>
                                <input
                                    type="date"
                                    required
                                    className="w-full bg-transparent border-b border-dark/20 pb-2 text-lg font-sans font-light text-dark focus:outline-none focus:border-gold transition-colors"
                                    value={formData.date}
                                    onChange={e => setFormData({ ...formData, date: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-xs uppercase tracking-widest font-bold text-dark/70 mb-2">Hora exacta</label>
                                <input
                                    type="time"
                                    required
                                    className="w-full bg-transparent border-b border-dark/20 pb-2 text-lg font-sans font-light text-dark focus:outline-none focus:border-gold transition-colors"
                                    value={formData.time}
                                    onChange={e => setFormData({ ...formData, time: e.target.value })}
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs uppercase tracking-widest font-bold text-dark/70 mb-2">Punto geográfico</label>
                            <input
                                type="text"
                                required
                                className="w-full bg-transparent border-b border-dark/20 pb-2 text-xl font-serif text-dark focus:outline-none focus:border-gold transition-colors"
                                placeholder="Ciudad, País"
                                value={formData.location}
                                onChange={e => setFormData({ ...formData, location: e.target.value })}
                            />
                        </div>

                        <button type="submit" className="w-full mt-10 py-5 bg-dark text-ivory text-sm font-bold uppercase tracking-widest hover:bg-gold hover:text-dark transition-colors duration-500 rounded-lg shadow-lg">
                            Iniciar Decodificación
                        </button>
                    </form>
                </div>
            )}

            {step === 'calculating' && (
                <div className="flex flex-col items-center justify-center space-y-8 h-64">
                    <div className="w-16 h-16 border-t-2 border-r-2 border-gold rounded-full animate-spin"></div>
                    <div className="font-mono text-dark/70 animate-pulse text-lg tracking-widest text-center">
                        {loadingText || 'Iniciando protocolo...'}
                    </div>
                </div>
            )}

            {step === 'result' && result && (
                <div ref={resultRef} className="w-full max-w-5xl mx-auto bg-white rounded-[2rem] shadow-[0_30px_100px_rgba(0,0,0,0.08)] border border-dark/5 overflow-hidden flex flex-col md:flex-row min-h-[600px]">

                    {/* Left Column: Image & Animal */}
                    <div className="md:w-2/5 relative min-h-[300px] md:min-h-full bg-dark flex flex-col justify-end p-10 overflow-hidden group">
                        <div
                            className="absolute inset-0 bg-cover bg-center opacity-60 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
                            style={{ backgroundImage: `url(${result.image})` }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent"></div>
                        </div>
                        <div className="relative z-10">
                            <span className="text-gold text-xs font-bold tracking-[0.3em] uppercase mb-2 block">Tu Animal Astral</span>
                            <h3 className="text-4xl font-serif italic text-ivory mb-4">{result.name}</h3>
                            <p className="text-ivory/70 font-sans text-sm leading-relaxed border-l border-gold/50 pl-4">
                                {result.animalDesc}
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Reading */}
                    <div className="md:w-3/5 p-10 md:p-16 flex flex-col justify-center bg-[#FAFAFA]">
                        <div className="mb-10 pb-6 border-b border-dark/10">
                            <span className="text-xs font-sans tracking-widest uppercase text-dark/40">Reporte Astrológico para</span>
                            <h2 className="text-3xl font-serif text-dark capitalize mt-2">{formData.name}</h2>
                            <div className="text-xs text-dark/60 mt-2 font-mono">
                                {formData.date} · {formData.time} · {formData.location}
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h4 className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-dark mb-3">
                                    <span className="w-2 h-2 rounded-full bg-gold"></span>
                                    Configuración Esencial
                                </h4>
                                <p className="text-dark/70 font-sans leading-relaxed">
                                    {result.personality}
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="bg-white p-6 rounded-xl border border-dark/5 shadow-sm">
                                    <h4 className="text-xs font-bold uppercase tracking-widest text-dark/50 mb-3">Retos Kármicos</h4>
                                    <p className="text-dark/80 font-sans text-sm leading-relaxed">
                                        {result.challenges}
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-xl border border-dark/5 shadow-sm border-l-2 border-l-gold">
                                    <h4 className="text-xs font-bold uppercase tracking-widest text-dark/50 mb-3">Dones Manifiestos</h4>
                                    <p className="text-dark/80 font-sans text-sm leading-relaxed">
                                        {result.strengths}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 pt-8 border-t border-dark/10 flex justify-between items-center">
                            <button
                                onClick={() => setStep('form')}
                                className="text-xs font-bold uppercase tracking-widest text-dark/50 hover:text-dark transition-colors"
                            >
                                ← Iniciar nuevo análisis
                            </button>
                            <button className="px-6 py-3 bg-dark text-ivory text-xs font-bold uppercase tracking-widest hover:bg-gold hover:text-dark transition-colors rounded-full">
                                Obtener reporte físico
                            </button>
                        </div>
                    </div>

                </div>
            )}

        </section>
    );
}

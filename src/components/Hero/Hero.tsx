import { useTypingEffect } from '../../hooks/useTypingEffect';

export const Hero = () => {
  const { displayText, showCursor } = useTypingEffect({
    text: 'Welton Kellyson',
    typingSpeed: 150,
    deletingSpeed: 100,
    pauseDuration: 2000,
    loop: false,
  });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center section-padding pt-24 overflow-hidden"
    >
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="hero-title-glow" aria-hidden="true" />
          {/* Greeting */}
          <div className="mb-6 animate-fade-in-down">
            <span className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 rounded-full text-sm font-medium hover:scale-110 transition-transform duration-300 animate-float">
              {'Ol\u00E1, eu sou'}
            </span>
          </div>

          {/* Name with typing effect */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-scale-in min-h-[5rem] md:min-h-[7rem] lg:min-h-[8rem] flex items-center justify-center">
            <span className="text-gray-900 dark:text-white font-mono">
              {displayText}
              <span
                className={`inline-block w-1 h-[0.9em] bg-primary-600 ml-1 align-middle ${
                  showCursor ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ transition: 'opacity 0.1s' }}
              />
            </span>
          </h1>

          {/* Title */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 text-gray-700 dark:text-gray-300 animate-fade-in-up animation-delay-200">
            Desenvolvedor{' '}
            <span className="heading-gradient inline-block hover:scale-105 transition-transform duration-300">
              Front-end
            </span>
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in-up animation-delay-400">
            {'Desenvolvo interfaces modernas e perform\u00E1ticas com React, TypeScript e Tailwind. Tamb\u00E9m atuo com integra\u00E7\u00F5es de APIs, automa\u00E7\u00F5es com n8n e solu\u00E7\u00F5es com IA quando o produto pede.'}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-600">
            <a
              href="#projects"
              className="group px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden"
            >
              <span className="relative z-10">Ver Projetos</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-fuchsia-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a
              href="#contact"
              className="group px-8 py-4 bg-transparent border-2 border-gray-300 dark:border-gray-700 hover:border-primary-600 dark:hover:border-primary-400 text-gray-900 dark:text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl relative overflow-hidden"
            >
              <span className="relative z-10 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                Entre em Contato
              </span>
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-20 animate-bounce">
            <a
              href="#about"
              className="inline-block text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 hover:scale-125"
              aria-label="Scroll to about section"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="hero-circuit absolute inset-0" aria-hidden="true">
          <svg viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.35" />
                <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#34d399" stopOpacity="0.35" />
              </linearGradient>
            </defs>

            <g className="circuit-glow">
              <path
                className="circuit-path thick"
                style={{ animationDelay: '0s' }}
                d="M -60 40 H 120 L 200 90 H 320 L 400 40 H 560 L 720 110 H 1260"
                stroke="url(#circuitGradient)"
              />
              <path
                className="circuit-path"
                style={{ animationDelay: '2.2s' }}
                d="M -60 70 H 140 L 210 140 H 340 L 420 90 H 600 L 760 150 H 1260"
                stroke="url(#circuitGradient)"
              />
              <path
                className="circuit-path thin"
                style={{ animationDelay: '1.5s' }}
                d="M -80 180 H 120 L 200 120 H 340 L 430 190 H 620 L 760 130 H 1260"
                stroke="url(#circuitGradient)"
              />
              <path
                className="circuit-path"
                style={{ animationDelay: '0.8s' }}
                d="M -40 250 H 200 L 260 200 H 420 L 520 270 H 720 L 860 230 H 1260"
                stroke="url(#circuitGradient)"
              />
              <path
                className="circuit-path thin"
                style={{ animationDelay: '2.8s' }}
                d="M -60 280 H 200 L 260 220 H 420 L 520 300 H 720 L 860 240 H 1260"
                stroke="url(#circuitGradient)"
              />
              <path
                className="circuit-path thick"
                style={{ animationDelay: '2.2s' }}
                d="M -100 380 H 160 L 260 440 H 440 L 520 360 H 740 L 880 420 H 1260"
                stroke="url(#circuitGradient)"
              />
              <path
                className="circuit-path thin"
                style={{ animationDelay: '1.1s' }}
                d="M -60 450 H 160 L 240 400 H 420 L 520 460 H 700 L 820 420 H 1260"
                stroke="url(#circuitGradient)"
              />
              <path
                className="circuit-path"
                style={{ animationDelay: '1.8s' }}
                d="M -60 480 H 180 L 260 420 H 420 L 520 500 H 700 L 860 440 H 1260"
                stroke="url(#circuitGradient)"
              />
            </g>

            <g className="circuit-static">
              <path d="M -120 140 H 180 L 260 210 H 420 L 520 180 H 760 L 920 210 H 1260" />
              <path d="M -80 320 H 220 L 300 360 H 520 L 620 320 H 900 L 1020 350 H 1260" />
              <path d="M -120 520 H 140 L 240 480 H 420 L 540 520 H 820 L 940 480 H 1260" />
            </g>

            <g>
              <circle className="circuit-node pulse" cx="200" cy="90" r="3" />
              <circle className="circuit-node" cx="440" cy="120" r="3" />
              <circle className="circuit-node pulse" cx="210" cy="140" r="3" />
              <circle className="circuit-node" cx="420" cy="90" r="3" />
              <circle className="circuit-node pulse" cx="520" cy="270" r="3" />
              <circle className="circuit-node" cx="260" cy="200" r="3" />
              <circle className="circuit-node pulse" cx="520" cy="300" r="3" />
              <circle className="circuit-node" cx="260" cy="220" r="3" />
              <circle className="circuit-node pulse" cx="520" cy="360" r="3" />
              <circle className="circuit-node" cx="260" cy="440" r="3" />
              <circle className="circuit-node pulse" cx="700" cy="460" r="3" />
              <circle className="circuit-node" cx="240" cy="400" r="3" />
              <circle className="circuit-node pulse" cx="780" cy="370" r="3" />
              <circle className="circuit-node" cx="820" cy="420" r="3" />
            </g>
          </svg>
        </div>

        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-200 dark:bg-primary-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-fuchsia-200 dark:bg-fuchsia-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-violet-200 dark:bg-violet-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>
    </section>
  );
};

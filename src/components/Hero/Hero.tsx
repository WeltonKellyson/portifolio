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
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <div className="mb-6 animate-fade-in-down">
            <span className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 rounded-full text-sm font-medium hover:scale-110 transition-transform duration-300 animate-float">
              Olá, eu sou
            </span>
          </div>

          {/* Name com efeito de digitação */}
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
            Desenvolvo interfaces modernas e performáticas com React, TypeScript
            e Tailwind. Também atuo com integrações de APIs, automações com n8n e
            soluções com IA quando o produto pede.
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
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-200 dark:bg-primary-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-fuchsia-200 dark:bg-fuchsia-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-violet-200 dark:bg-violet-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
    </section>
  );
};

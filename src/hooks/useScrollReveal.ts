import { useEffect, useRef } from 'react';

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

/**
 * Hook customizado para revelar elementos ao fazer scroll
 * Usa Intersection Observer para detectar quando elementos entram na viewport
 */
export const useScrollReveal = (options: ScrollRevealOptions = {}) => {
  const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = options;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Cria observer para detectar quando elemento entra na viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Adiciona classe para ativar animação
            entry.target.classList.add('is-visible');
            if (triggerOnce) {
              // Para de observar após primeira aparição
              observer.unobserve(entry.target);
            }
          } else if (!triggerOnce) {
            // Remove classe quando sai da viewport (se triggerOnce = false)
            entry.target.classList.remove('is-visible');
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    // Cleanup: para de observar quando componente desmonta
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin, triggerOnce]);

  return ref;
};

import { useState, useEffect } from 'react';

interface UseTypingEffectOptions {
  text: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  loop?: boolean;
}

/**
 * Hook customizado para criar efeito de digitação.
 * Quando loop = false, escreve apenas uma vez e não apaga.
 */
export const useTypingEffect = ({
  text,
  typingSpeed = 150,
  deletingSpeed = 100,
  pauseDuration = 2000,
  loop = true,
}: UseTypingEffectOptions) => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    // Cursor piscando
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    const handleTyping = () => {
      if (!isDeleting) {
        // Modo digitando
        if (displayText.length < text.length) {
          setDisplayText(text.slice(0, displayText.length + 1));
          timeout = setTimeout(handleTyping, typingSpeed);
          return;
        }

        if (!loop) {
          return;
        }

        // Terminou de digitar, pausa antes de começar a apagar
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
        return;
      }

      // Modo apagando
      if (displayText.length > 0) {
        setDisplayText(text.slice(0, displayText.length - 1));
        timeout = setTimeout(handleTyping, deletingSpeed);
        return;
      }

      // Terminou de apagar, pausa antes de começar a digitar novamente
      timeout = setTimeout(() => {
        setIsDeleting(false);
      }, 500);
    };

    timeout = setTimeout(handleTyping, typingSpeed);

    return () => {
      clearTimeout(timeout);
      clearInterval(cursorInterval);
    };
  }, [displayText, isDeleting, text, typingSpeed, deletingSpeed, pauseDuration, loop]);

  return { displayText, showCursor };
};

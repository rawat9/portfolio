import type { TransitionConfig } from 'svelte/transition';

type TypewriterParams = { speed?: number; delay?: number };
type Typewriter = (node: Element, params?: TypewriterParams) => TransitionConfig;

export const typewriter: Typewriter = (node, { speed = 100, delay = 0 } = {}) => {
  const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;

  if (!valid) {
    throw new Error('This transition only works on elements with a single text node child');
  }

  const text = node.textContent || '';
  const duration = text.length * speed;

  return {
    duration,
    delay,
    tick: (t: number) => {
      const i = Math.trunc(text.length * t);
      node.textContent = text.slice(0, i);
    }
  };
};

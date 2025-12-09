import { forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useState } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';



function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

const RotatingText = forwardRef((props, ref) => {
  const {
    texts,
    transition = { type: 'spring', damping: 25, stiffness: 300 },
    initial = { y: '100%', opacity: 0 },
    animate = { y: 0, opacity: 1 },
    exit = { y: '-120%', opacity: 0 },
    animatePresenceMode = 'wait',
    animatePresenceInitial = false,
    rotationInterval = 2000,
    staggerDuration = 0,
    staggerFrom = 'first',
    loop = true,
    auto = true,
    splitBy = 'characters',
    // onNext,
    mainClassName,
    splitLevelClassName,
    elementLevelClassName,
    ...rest
  } = props;

  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const splitIntoCharacters = text => {
    if (typeof Intl !== 'undefined' && Intl.Segmenter) {
      const segmenter = new Intl.Segmenter('en', { granularity: 'grapheme' });
      return Array.from(segmenter.segment(text), seg => seg.segment);
    }
    return Array.from(text);
  };

  const elements = useMemo(() => {
    const currentText = texts[currentTextIndex];
    if (splitBy === 'characters') {
      const words = currentText.split(' ');
      return words.map((word, i) => ({
        characters: splitIntoCharacters(word),
        needsSpace: i !== words.length - 1
      }));
    }
    if (splitBy === 'words') {
      return currentText.split(' ').map((word, i, arr) => ({
        characters: [word],
        needsSpace: i !== arr.length - 1
      }));
    }
    return currentText.split(splitBy).map((part, i, arr) => ({
      characters: [part],
      needsSpace: i !== arr.length - 1
    }));
  }, [texts, currentTextIndex, splitBy]);

  const getStaggerDelay = useCallback(
    (index, total) => {
      if (staggerFrom === 'first') return index * staggerDuration;
      if (staggerFrom === 'last') return (total - 1 - index) * staggerDuration;
      if (staggerFrom === 'center') {
        const center = Math.floor(total / 2);
        return Math.abs(center - index) * staggerDuration;
      }
      return 0;
    },
    [staggerFrom, staggerDuration]
  );

  const next = useCallback(() => {
    setCurrentTextIndex(prev =>
      loop ? (prev + 1) % texts.length : Math.min(prev + 1, texts.length - 1)
    );
  }, [texts.length, loop]);

  useImperativeHandle(ref, () => ({ next }));

  useEffect(() => {
    if (!auto) return;
    const timer = setInterval(next, rotationInterval);
    return () => clearInterval(timer);
  }, [next, rotationInterval, auto]);

  return (
    <Motion.span
      className={cn('inline-flex whitespace-pre-wrap relative w-auto', mainClassName)}
      {...rest}
      layout
      transition={transition}
    >
      <span className="sr-only">{texts[currentTextIndex]}</span>

      <AnimatePresence mode={animatePresenceMode} initial={animatePresenceInitial}>
        <Motion.span
          key={currentTextIndex}
          className="flex flex-wrap whitespace-pre-wrap relative"
          layout
          aria-hidden="true"
        >
          {elements.map((word, wordIndex, arr) => {
            const prevCount = arr.slice(0, wordIndex).reduce((s, w) => s + w.characters.length, 0);
            const totalChars = arr.reduce((s, w) => s + w.characters.length, 0);

            return (
              <span key={wordIndex} className={cn('inline-flex', splitLevelClassName)}>
                {word.characters.map((char, idx) => (
                  <Motion.span
                    key={idx}
                    initial={initial}
                    animate={animate}
                    exit={exit}
                    transition={{
                      ...transition,
                      delay: getStaggerDelay(prevCount + idx, totalChars),
                    }}
                    className={cn('inline-block', elementLevelClassName)}
                  >
                    {char}
                  </Motion.span>
                ))}

                {word.needsSpace && <span className="whitespace-pre"> </span>}
              </span>
            );
          })}
        </Motion.span>
      </AnimatePresence>
    </Motion.span>
  );
});

RotatingText.displayName = 'RotatingText';
export default RotatingText;

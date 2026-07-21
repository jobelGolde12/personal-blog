import { useId, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const TOOLTIP_OFFSET = 14;
const VIEWPORT_PADDING = 12;

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function GitHubIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12.02c0 4.42 2.87 8.18 6.84 9.54.5.09.68-.22.68-.49 0-.24-.01-.88-.01-1.72-2.78.6-3.37-1.34-3.37-1.34-.46-1.17-1.12-1.48-1.12-1.48-.92-.63.07-.62.07-.62 1.02.07 1.56 1.05 1.56 1.05.91 1.57 2.39 1.12 2.97.86.09-.66.35-1.11.64-1.37-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.26.1-2.62 0 0 .84-.27 2.75 1.03a9.6 9.6 0 0 1 5 0c1.9-1.3 2.74-1.03 2.74-1.03.55 1.36.2 2.37.1 2.62.64.7 1.03 1.59 1.03 2.68 0 3.85-2.35 4.7-4.59 4.95.36.31.68.92.68 1.86 0 1.34-.01 2.42-.01 2.75 0 .27.18.59.69.49A10.03 10.03 0 0 0 22 12.02C22 6.48 17.52 2 12 2z" />
    </svg>
  );
}

export default function ProjectLink({
  title,
  href,
  description,
  tooltip,
  ariaLabel,
}) {
  const id = useId();
  const shouldReduceMotion = useReducedMotion();
  const anchorRef = useRef(null);
  const tooltipRef = useRef(null);
  const closeTimerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [tooltipState, setTooltipState] = useState({
    top: 0,
    left: 0,
    arrowLeft: 0,
    placement: 'top',
  });

  const tooltipContent = {
    repoName: tooltip?.repoName ?? title,
    description: tooltip?.description ?? description,
    cta: tooltip?.cta ?? 'Click to view source code on GitHub.',
  };

  const clearCloseTimer = () => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const openTooltip = () => {
    clearCloseTimer();
    setIsOpen(true);
  };

  const closeTooltip = () => {
    clearCloseTimer();
    closeTimerRef.current = window.setTimeout(() => {
      setIsOpen(false);
    }, 80);
  };

  useLayoutEffect(() => {
    if (!isOpen || !anchorRef.current || !tooltipRef.current) {
      return undefined;
    }

    const updatePosition = () => {
      const anchorRect = anchorRef.current?.getBoundingClientRect();
      const tooltipRect = tooltipRef.current?.getBoundingClientRect();

      if (!anchorRect || !tooltipRect) {
        return;
      }

      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const centerX = anchorRect.left + anchorRect.width / 2;
      const spaceAbove = anchorRect.top - TOOLTIP_OFFSET;
      const spaceBelow = viewportHeight - anchorRect.bottom - TOOLTIP_OFFSET;
      const placement = spaceAbove >= tooltipRect.height || spaceAbove >= spaceBelow ? 'top' : 'bottom';
      const desiredTop =
        placement === 'top'
          ? anchorRect.top - TOOLTIP_OFFSET - tooltipRect.height
          : anchorRect.bottom + TOOLTIP_OFFSET;

      const left = clamp(
        centerX,
        VIEWPORT_PADDING + tooltipRect.width / 2,
        viewportWidth - VIEWPORT_PADDING - tooltipRect.width / 2,
      );
      const leftEdge = left - tooltipRect.width / 2;
      const arrowLeft = clamp(centerX - leftEdge - 8, 20, tooltipRect.width - 20);

      setTooltipState({
        top: clamp(desiredTop, VIEWPORT_PADDING, viewportHeight - VIEWPORT_PADDING - tooltipRect.height),
        left,
        arrowLeft,
        placement,
      });
    };

    updatePosition();

    window.addEventListener('resize', updatePosition);
    window.addEventListener('scroll', updatePosition, true);

    return () => {
      window.removeEventListener('resize', updatePosition);
      window.removeEventListener('scroll', updatePosition, true);
    };
  }, [isOpen]);

  useLayoutEffect(() => {
    return () => {
      clearCloseTimer();
    };
  }, []);

  const anchorClasses = [
    'relative group inline-flex items-center gap-2 rounded-sm text-accent outline-none transition-all duration-300 ease-out',
    'cursor-pointer hover:text-[#e6c98a] focus-visible:text-[#e6c98a]',
    'hover:drop-shadow-[0_0_14px_rgba(213,178,106,0.18)] focus-visible:drop-shadow-[0_0_14px_rgba(213,178,106,0.18)]',
    'after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 after:content-[""]',
    'hover:after:scale-x-100 focus-visible:after:scale-x-100',
    shouldReduceMotion ? 'hover:scale-100 focus-visible:scale-100' : 'hover:scale-[1.02] focus-visible:scale-[1.02]',
  ].join(' ');

  const tooltipNode = typeof document === 'undefined'
    ? null
    : createPortal(
        <AnimatePresence>
          {isOpen ? (
            <motion.div
              ref={tooltipRef}
              role="tooltip"
              id={id}
              initial={{
                opacity: 0,
                y: tooltipState.placement === 'top' ? 10 : -10,
                scale: 0.98,
              }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{
                opacity: 0,
                y: tooltipState.placement === 'top' ? 6 : -6,
                scale: 0.98,
              }}
              transition={{
                duration: shouldReduceMotion ? 0.01 : 0.22,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="fixed z-[80] w-[min(22rem,calc(100vw-1.5rem))] pointer-events-none"
              style={{
                top: `${tooltipState.top}px`,
                left: `${tooltipState.left}px`,
                transform: 'translateX(-50%)',
              }}
            >
              <div className="relative overflow-hidden rounded-sm border border-border bg-card/95 p-4 shadow-[0_18px_50px_rgba(0,0,0,0.45)] backdrop-blur-xl">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-sm border border-border bg-bg text-accent shadow-sm">
                    <GitHubIcon className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-text">
                      {tooltipContent.repoName}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-text-secondary">
                      {tooltipContent.description}
                    </p>
                    <p className="mt-3 text-xs font-medium uppercase tracking-[0.18em] text-accent">
                      {tooltipContent.cta}
                    </p>
                  </div>
                </div>
                <span
                  className="absolute h-3 w-3 rotate-45 border-l border-t border-border bg-card/95 shadow-[0_8px_20px_rgba(0,0,0,0.2)]"
                  style={{
                    left: `${tooltipState.arrowLeft}px`,
                    [tooltipState.placement === 'top' ? 'bottom' : 'top']: '-6px',
                  }}
                />
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>,
        document.body,
      );

  return (
    <>
      <motion.a
        ref={anchorRef}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel ?? `Open ${title} source code on GitHub in a new tab`}
        aria-describedby={isOpen ? id : undefined}
        className={anchorClasses}
        onMouseEnter={openTooltip}
        onMouseLeave={closeTooltip}
        onFocus={openTooltip}
        onBlur={closeTooltip}
        onPointerEnter={(event) => {
          if (event.pointerType !== 'touch') {
            openTooltip();
          }
        }}
        onPointerLeave={(event) => {
          if (event.pointerType !== 'touch') {
            closeTooltip();
          }
        }}
        whileTap={shouldReduceMotion ? undefined : { scale: 0.99 }}
      >
        <span className="relative inline-flex items-center gap-1.5">
          <span>{title}</span>
          <ExternalLink
            size={16}
            strokeWidth={2}
            className="translate-y-0.5 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0.5 group-hover:opacity-100 group-focus-visible:translate-x-0.5 group-focus-visible:opacity-100"
          />
        </span>
      </motion.a>
      {tooltipNode}
    </>
  );
}

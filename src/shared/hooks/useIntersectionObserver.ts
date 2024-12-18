import { useEffect, useState } from "react";

interface UseIntersectionObserverProps {
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
}

export function useIntersectionObserver(
  elementRef: React.RefObject<HTMLDivElement | null>,
  {
    threshold = 0,
    root = null,
    rootMargin = "0%",
  }: UseIntersectionObserverProps = {}
) {
  const [isIntersecting, setIntersecting] = useState(true);

  useEffect(() => {
    const element = elementRef?.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      {
        threshold,
        root,
        rootMargin,
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [elementRef, threshold, root, rootMargin]);

  return { isIntersecting };
}

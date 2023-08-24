import { useCallback, useEffect, useRef } from "react";

// useIntersect는 observer가 콜백시 실행시킬 함수(onintersect)를 parameter로 받습니다.
const useIntersect = (
  onintersect: (
    entry: IntersectionObserverEntry,
    observer: IntersectionObserver
  ) => void
) => {
  const ref = useRef<HTMLDivElement>(null);
  // 콜백시 entry.isIntersecting이 true일 시 onintersect를 실행합니다.
  const callback = useCallback(
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) onintersect(entry, observer);
      });
    },
    [onintersect]
  );
  // ref.current가 존재할 시 IntersectionObserver를 생성합니다.
  useEffect(() => {
    if (!ref.current) {
      return;
    }
    const observer = new IntersectionObserver(callback);
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref.current, callback]);

  return ref;
};

export default useIntersect;

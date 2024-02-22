import { ReactNode, useRef, useEffect } from "react";
import { gsap } from "gsap";

type Props = {
  title: string;
  children: ReactNode;
};

export default function GrayBento({ title, children }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(entry.target, {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power4.out",
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="bg-ctagray rounded-2xl p-8 font-satoshi lg:max-w-[450px] lg:min-h-[450px] max-w-[350px] max-h-full"
      style={{ opacity: 0, transform: "translateY(20px)" }}
    >
      <p className="text-white text-[17px] mb-6">{title}</p>
      {children}
    </div>
  );
}

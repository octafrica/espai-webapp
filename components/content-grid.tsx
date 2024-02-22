import gsap from "gsap";
import Image from "next/image";
import React, { Suspense, useLayoutEffect, useRef } from "react";

type Props = {
  title: string;
  text: string;
  gif_src: string;
  hasBorder?: boolean;
  reverse?: boolean;
};

export default function ContentGrid({
  gif_src,
  text,
  title,

  hasBorder = true,
  reverse,
}: Props) {
  const gridRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const gridTimeline = gsap.timeline({ paused: true });
    const gridContent = gridRef.current?.children;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (gridContent) {
            gridTimeline
              .set(gridContent, {
                y: 20,
                opacity: 0,
              })
              .to(gridContent, {
                y: 0,
                opacity: 1,
                stagger: 0.2,
                ease: "circ",
                delay: 0.5,
              });
            gridTimeline.play();
          }
          observer.unobserve(entry.target);
        }
      });
    });

    if (gridRef.current) {
      observer.observe(gridRef.current);
    }

    return () => {
      if (gridRef.current) {
        observer.unobserve(gridRef.current);
      }
    };
  }, []);

  return (
    <section
      className={`text-white flex flex-wrap justify-between my-24 lg:bg-transparent bg-[#171717] py-8 px-4 rounded-lg ${
        hasBorder ? "lg:border-b border-[#171717]" : ""
      }`}
      ref={gridRef}
    >
      <div
        className={`lg:max-w-lg ${
          reverse ? "lg:order-1" : ""
        }  flex mx-auto lg:text-left text-center flex-col  lg:mb-0 justify-center lg:w-5/12`}
      >
        <p className="font-satoshi md:text-[20px] text-[13px]">Features</p>
        <h3 className="font-bold md:text-[28px] text-[18px]">{title}</h3>
        <p className="font-satoshi md:text-[18px] max-w-2xl mt-4 text-[15px]">
          {text}
        </p>
      </div>
      <div className="lg:w-6/12 w-full mx-auto">
        <div className="w-full lg:p-8 max-h-full flex mx-auto  justify-center bg-[#171717] rounded-xl">
          <Suspense fallback={<p>Loading...</p>}>
            <video autoPlay loop width={480} height={400} className="max-h-fit" muted>
              <source src={gif_src} type="video/webm" />
            </video>
          </Suspense>
        </div>
      </div>
    </section>
  );
}

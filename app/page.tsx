"use client";
import AppBadge from "@/components/app-badge";
import GrayBento from "@/components/gray-bento";
import HeaderTitle from "@/components/header-title";
import Image from "next/image";
import Link from "next/link";
import ContentGrid from "@/components/content-grid";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);
  const logoRef = useRef(null);
  const heroRef = useRef<HTMLDivElement | null>(null);
  const howEspaiWorksRef = useRef<HTMLDivElement | null>(null);
  const footerRef = useRef<HTMLDivElement | null>(null);
  useLayoutEffect(() => {
    const logo = logoRef.current;
    const logoTimeline = gsap.timeline();
    logoTimeline
      .set(logo, {
        y: 20,
        opacity: 0,
        ease: "elastic.in",
        duration: 0.3,
      })
      .to(logo, { y: 0, opacity: 1 });
  }, []);

  useLayoutEffect(() => {}, []);
  useLayoutEffect(() => {
    let heroTimeline = gsap.timeline();
    let heroContent = heroRef.current?.children;
    if (heroContent) {
      heroTimeline
        .set(heroContent, {
          y: 20,
          opacity: 0,
        })
        .to(heroContent, {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          ease: "circ",
          delay: 1,
        });
    }
  }, []);

  useLayoutEffect(() => {
    const bentoGrid = howEspaiWorksRef.current;
    gsap.fromTo(
      bentoGrid,
      {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: bentoGrid,
        },
      },
      {
        opacity: 1,
        y: 0,
      }
    );
  }, []);

  useLayoutEffect(() => {
    const footerTimeline = gsap.timeline({ paused: true });
    const footerContent = footerRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            footerTimeline
              .set(footerContent, {
                y: 50,
              })
              .to(footerContent, {
                y: 0,
                stagger: 0.2,
                ease: "circ",
              })
              .play();

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    ); 

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <main className="relative bg-default">
      <Image
        src={"/led-one.svg"}
        alt=""
        width={1000}
        height={1000}
        className="absolute top-0 left-0 "
      />
      <div>
        <div className="w-11/12 mx-auto pt-5 md:pt-20">
          <div className=" bg-[url('/starry-bg.svg')] bg-cover">
            <div className="flex justify-between relative">
              <Link
                href={"/"}
                className="flex gap-2 items-center"
                ref={logoRef}
              >
                <Image
                  src={"/app_logo.svg"}
                  alt="Espai"
                  width={80}
                  height={80}
                />`
              </Link>
            </div>
            <div
              className="mx-auto max-w-4xl flex flex-col items-center text-center mt-32 lg:mt-48"
              ref={heroRef}
            >
              <HeaderTitle title="Introducing Espai" />
              <h1 className="font-bold text-[28px] md:text-5xl lg:leading-tight">
                Explore the Art of Interior Design With a Touch of Magic
              </h1>
              <p className="mt-5 md:mt-3 font-satoshi text-[14px] md:text-base">
                Discover the Ultimate DIY Interior Design Experience with Espai 
              </p>
              <div className=" relative">
                <AppBadge />
              </div>
            </div>
          </div>
          <div
            ref={howEspaiWorksRef}
            className=" md:p-5 lg:p-8 p-2 shadow-deeppurple shadow-inner pb-6 md:border-container rounded-2xl md:mt-36 mt-24 lg:mt-72"
          >
            <div className="w-11/12  mx-auto mt-20">
              <div className="w-fit mx-auto md:ml-0">
                <HeaderTitle title="How Espai works" />
              </div>
              <div className="xl:grid-cols-3 md:grid-cols-2  gap-5 sm:place-content-center md:grid   mx-auto flex flex-col items-center">
                <GrayBento title="Upload your own space or find interior inspiration our vast collection of room types and styles">
                  <div className="p-4 bg-lightgray grid grid-cols-2 gap-3">
                    <Image
                      src={"/bento-one-img-two.svg"}
                      className="w-full h-full rounded-2xl hover:shadow-md hover:shadow-purple transition-shadow duration-300"
                      width={144}
                      height={150}
                      alt=""
                    />
                    <Image
                      src={"/bento-one-img.svg"}
                      width={144}
                      className="w-full h-full rounded-2xl hover:shadow-md hover:shadow-purple transition-shadow duration-300"
                      height={150}
                      alt=""
                    />
                  </div>
                </GrayBento>
                <GrayBento title="Let our AI redesign your space and make suggestions on improvements">
                  <div className="p-4 bg-lightgray rounded-2xl">
                    <Image
                      src={"/bento-two-img.svg"}
                      className="w-full h-full rounded-2xl"
                      width={144}
                      height={150}
                      alt=""
                    />
                    <p className="my-4"> Tips</p>
                    <div className="grid grid-cols-3 gap-3">
                      <button className="bg-lightergray md:p-3 p-2 text-xs md:text-base rounded-3xl hover:bg-purple transition-colors duration-300">
                        Furniture
                      </button>
                      <button className="bg-lightergray md:p-3 p-2 text-xs md:text-base rounded-3xl hover:bg-purple transition-colors duration-300">
                        Lighting
                      </button>
                      <button className="bg-lightergray md:p-3 p-2 text-xs md:text-base rounded-3xl hover:bg-purple transition-colors duration-300">
                        Colour
                      </button>
                    </div>
                  </div>
                </GrayBento>
                <GrayBento title="Extract, Find and shop the items you need with ease from your new designs">
                  <div className="p-4 bg-lightgray grid grid-cols-3 gap-2">
                    <Image
                      src={"/amazon.svg"}
                      className="w-full h-full rounded-2xl hover:shadow-lg duration-300 transition-shadow hover:shadow-purple"
                      width={68}
                      height={68}
                      alt=""
                    />
                    <Image
                      src={"/wayfair.svg"}
                      className="w-full h-full rounded-2xl hover:shadow-lg duration-300 transition-shadow hover:shadow-purple"
                      width={68}
                      height={68}
                      alt=""
                    />
                    <Image
                      src={"/ikea.svg"}
                      className="w-full h-full rounded-2xl hover:shadow-lg duration-300 transition-shadow hover:shadow-purple"
                      width={68}
                      height={68}
                      alt=""
                    />
                    <Image
                      src={"/west-elm.svg"}
                      className="w-full h-full rounded-2xl hover:shadow-lg duration-300 transition-shadow hover:shadow-purple"
                      width={68}
                      height={68}
                      alt=""
                    />
                    <Image
                      src={"/etsy.svg"}
                      className="w-full h-full rounded-2xl hover:shadow-lg duration-300 transition-shadow hover:shadow-purple"
                      width={68}
                      height={68}
                      alt=""
                    />
                    <Image
                      src={"/soho.svg"}
                      className="w-full h-full rounded-2xl hover:shadow-lg duration-300 transition-shadow hover:shadow-purple"
                      width={68}
                      height={68}
                      alt=""
                    />
                  </div>
                </GrayBento>
              </div>
            </div>
          </div>
          <div className="mt-32 mx-auto text-center w-fit flex flex-col  items-center">
            <HeaderTitle title="Explore the features of Espai" />
            <h1 className="font-bold text-[24px] md:text-4xl leading- max-w-2xl mt-4 md:mt-10 ">
              Transform your space into a masterpiece of style & comfort with
              just a few taps!
            </h1>
          </div>

          <div className="lg:w-10/12 w-[95%] mx-auto mt-10">
            <ContentGrid
              gif_src="/gif-one.webm"
              text="Dive into a world of exquisite interior design ideas. From minimalist to bohemian, Espai brings you a curated collection of stunning spaces. Find inspiration for your next DIY project, whether it’s revamping a cozy corner or transforming an entire room."
              title="Seamless Interior Design Inspirations 🏡"
            />
            <ContentGrid
              reverse
              gif_src="/gif-two.webm"
              text="Beyond pictures of beautiful spaces, Espai offers valuable DIY tips and tricks. Learn from experts on how to execute your design projects efficiently, from selecting the right materials to mastering the art of layout and decoration. Your journey to becoming a DIY pro starts here!"
              title="Expert Tips and Tricks ✨"
            />
            <ContentGrid
              gif_src="/gif-two.webm"
              text="See something you love? Espai provides direct shopping links for furniture and decor items featured in our designs. From chic sofas to elegant vases, getting the look for your home is now just a click away. DIY interior design has never been this easy!"
              title="Shopping Links at Your Fingertips 🛍"
            />
            <ContentGrid
              gif_src="/gif-four.webm"
              reverse
              text="Unleash the power of AI to explore new possibilities for your space. Our advanced algorithms generate unique design variants, offering fresh perspectives and creative ideas for your DIY projects. Redesign, reimagine, and reinvent with Espai."
              title="AI-Powered Custom Design Variants 🤖"
            />
          </div>
        </div>
      </div>
      <footer className="relative min-h-screen bg-[url('/starry-bg.svg')] bg-cover">
        <div
          className="text-center w-fit pt-64 mx-auto flex justify-center items-center"
          ref={footerRef}
        >
          <Image
            src={"/led-two.svg"}
            className="absolute object-center top-0 md:-top-20 -z-1"
            width={600}
            height={600}
            alt=""
          />
          <div className="flex flex-col justify-center">
            <Image
              src={"/app_logo.svg"}
              className="mx-auto mb-6"
              width={120}
              height={120}
              alt=""
            />
            <p className="text-center text-[32px] md:text-5xl font-bold mb-10">
              Be The First To Experience Espai
            </p>
            <p className="max-w-sm   md:max-w-md text-center mx-auto w-[90%] text-sm  md:text-base font-satoshi mb-10">
              Stay ahead of the curve and get notified the moment we go live.
              Join our community of design enthusiasts
            </p>
            <div className="w-11/12 mx-auto relative">
              <AppBadge />
            </div>
          </div>
        </div>
        <p className="font-satoshi md:mt-64 text-[12px] md:text-sm text-center mt-20 w-fit mx-auto max-w-lg mb-4">
          Explore the Art of Interior Design With a Touch of Magic
        </p>

        <div className='flex text-xs font-satoshi items-center justify-center space-x-8 my-14'>
          <Link href='/privacy' className='hover:underline'>Privacy Policy</Link>
          <Link href='/terms' className='hover:underline'>Terms Of Use</Link>
          <Link href='mailto:hello@espai.co' className='hover:underline'>Contact Us</Link>
        </div>
      </footer>
    </main>
  );
}

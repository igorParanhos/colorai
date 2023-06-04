"use client";
import Input from "@/components/Input/Input";
import style from "./Main.module.scss";
import React, { forwardRef, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Section } from "./Section";

import {
  initialBubblePosition,
  initialYellowBubblePosition,
  initialEvilBubblePosition,
} from "./bubblePosition";

gsap.registerPlugin(ScrollTrigger);

export const Main = () => {
  const bubbleContainerRef = useRef<HTMLDivElement>(null);
  const bubblesRef = useRef<HTMLDivElement[]>([]);
  const yellowBubblesRef = useRef<HTMLDivElement[]>([]);
  const evilBubblesRef = useRef<HTMLDivElement[]>([]);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const mainRef1 = useRef<HTMLDivElement>(null);
  const mainRef2 = useRef<HTMLDivElement>(null);
  const mainRef3 = useRef<HTMLDivElement>(null);

  const text1 = useRef<HTMLHeadingElement>(null);
  const text2 = useRef<HTMLHeadingElement>(null);
  const text3 = useRef<HTMLHeadingElement>(null);
  const text4 = useRef<HTMLHeadingElement>(null);

  const [input, setInput] = useState("#");
  const onInputChange = (e: any) => {
    let value: string = e.target.value;
    value = value.replaceAll(/[g-z#!%^&*()@.,?$]/gi, "");
    if (value.at(0) !== "#") value = "#" + value;
    if (value.length > 7) value = value.slice(0, 7);
    setInput(value);
    if (value.length === 7) {
      updateColor(value);
    }
  };

  const updateColor = (color: string) => {
    const tl = gsap.timeline();
    tl.to(bubblesRef.current, {
      duration: 1,
      backgroundColor: color,
    });
  };

  useEffect(() => {
    const tl0 = gsap.timeline({
      scrollTrigger: {
        trigger: mainRef2.current,
        start: "top bottom",
        end: "bottom 90%",
        scrub: 1,
        snap: {
          snapTo: "labels",
          duration: { min: 0.2, max: 1 },
          delay: 0.1,
          ease: "power1.inOut",
        },
      },
    });
    tl0
      .addLabel("start")
      .to(bubblesRef.current, {
        duration: 1,
        stagger: 0.1,
        ease: "power1.inOut",
        y: "+=20vh",
        backgroundColor: "#FBFDA1",
      })
      .to(yellowBubblesRef.current, {
        duration: 1.5,
        stagger: 0.1,
        ease: "power1.inOut",
        y: "-=10vh",
        backgroundColor: "#FBFDA1",
      })
      .addLabel("bubbles2");

    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: mainRef3.current,
        start: "top bottom",
        end: "bottom 90%",
        scrub: 1,
        snap: {
          snapTo: "labels",
          duration: { min: 0.2, max: 1 },
          delay: 0.2,
          ease: "power1.inOut",
        },
      },
    });
    tl1
      .addLabel("start")
      .to(evilBubblesRef.current, {
        duration: 1,
        stagger: 0.1,
        ease: "power1.inOut",
        y: "-=40vh",
        backgroundColor: "#EF9771",
      })
      .addLabel("bubbles2");

    gsap.to(text1.current, {
      scrollTrigger: {
        trigger: text1.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
      duration: 1,
      opacity: 1,
    });
    gsap.to(text2.current, {
      scrollTrigger: {
        trigger: text2.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
      duration: 1,
      opacity: 1,
    });
  }, []);

  return (
    // <article ref={wrapperRef} className={style.wrapper}>
    <>
      <div ref={mainRef1} className={style.main}>
        <div className={style.container}>
          <h1 className={style.title}>LET ME HELP YOU NAMING THIS COLOR</h1>
          <Input value={input} onChange={onInputChange} />
        </div>
      </div>
      <div ref={mainRef2} className={style.main}>
        <div className={style.mainContent}>
          <h2 className={style.heading} ref={text1}>
            YOU&apos;RE UNDERWATER
            <br />
            THERE&apos;S NOTHING HERE.
          </h2>
        </div>
      </div>
      <div ref={mainRef3} className={style.main}>
        <div className={style.mainContent}>
          <h2 className={style.heading} ref={text2}>
            OKAY, YOU&apos;VE FOUND ME
            <br />
            YAAY!
          </h2>
          <h2 className={style.heading} ref={text3}>
            WAIT... WAH!
          </h2>
          <h2 className={style.heading} ref={text4}>
            THINK YOU&apos;VE GOT ME
            <br />
            TRY AGAIN...
          </h2>
        </div>
      </div>
      {/* <div className={style.bubbleContainer} ref={bubbleContainerRef}> */}
      {initialBubblePosition.map((position, index) => (
        <div
          key={index}
          ref={(el) => (bubblesRef.current[index] = el!)}
          className={style.bubble}
          style={position}
        />
      ))}
      {initialYellowBubblePosition.map((position, index) => (
        <div
          key={index}
          ref={(el) => (yellowBubblesRef.current[index] = el!)}
          className={style.bubble}
          style={position}
        />
      ))}
      {initialEvilBubblePosition.map((position, index) => (
        <div
          key={index}
          ref={(el) => (evilBubblesRef.current[index] = el!)}
          className={style.bubble}
          style={position}
        />
      ))}
      {/* </div> */}
    </>
    // </article>
  );
};

export default Main;

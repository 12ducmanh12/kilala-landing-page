"use client";

import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "./components/EmblaCarouselDotButton";
import useEmblaCarousel from "embla-carousel-react";
import carouselImage from "../../assets/carousel.png";
import "./embla.css";
import "./base.css";

type PropType = {
  slides?: any;
  options?: EmblaOptionsType;
};

const Carousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);
  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          <div
            className="embla__slide"
          >
            <h1>WE ARE KILALA DESIGN</h1>
            <h3>SUPER EASY TO BUILD YOUR DESIGN</h3>
            <button>PURCHASE NOW</button>
          </div>
          <div
            className="embla__slide"
          >
            <h1>WE ARE KILALA DESIGN</h1>
            <h3>SUPER EASY TO BUILD YOUR DESIGN</h3>
            <button>PURCHASE NOW</button>
          </div>
          <div
            className="embla__slide"
          >
            <h1>WE ARE KILALA DESIGN</h1>
            <h3>SUPER EASY TO BUILD YOUR DESIGN</h3>
            <button>PURCHASE NOW</button>
          </div>
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;

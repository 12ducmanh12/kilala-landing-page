import React from "react";
import Carousel from "./section/carousel-image/Carousel";
import { EmblaOptionsType } from "embla-carousel";
import carouselImage from "./assets/carousel.png";
import AboutUs from "./section/about-us/AboutUs";

const OPTIONS: EmblaOptionsType = {};

export default function Home() {
  return (
    <main>
      <Carousel options={OPTIONS} />
      <AboutUs />
    </main>
  );
}

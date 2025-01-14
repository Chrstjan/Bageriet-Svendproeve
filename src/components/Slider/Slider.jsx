import { useEffect, useState } from "react";
import { Icon } from "../Icon/Icon";
import s from "./Slider.module.scss"

import slide1 from "/images/slide1.jpg"
import slide2 from "/images/slide2.jpg"
import slide3 from "/images/slide3.jpg"

export const Slider = () => {
  const imageArray = [slide1, slide2, slide3]
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    if (slideIndex === imageArray.length - 1) {
        setSlideIndex(0);
    }
    else {
        setSlideIndex(slideIndex + 1);
    }
  }

  const prevSlide = () => {
    if (slideIndex === 0) {
        setSlideIndex(imageArray.length - 1)
    }
    else {
        setSlideIndex(slideIndex - 1);
    }
  }

  useEffect(() => {
    let timer = setTimeout(() => {
        nextSlide();
    }, 3500);
    return () => {
        clearTimeout(timer);
    }
  }, [slideIndex])
  

  return (
    <div className={s.sliderStyling}>
        <img src={imageArray[slideIndex]}/>
        <span className={s.arrowContainer}>
            <Icon action={() => prevSlide()} src="/images/chevron.png" type="slideArrowRev"/>
            <Icon action={() => nextSlide()} src="/images/chevron.png" type="slideArrow"/>
        </span>
        <h2>Vi elsker at lave brød</h2>
        <div className={s.circleContainer}>
            <span onClick={() => setSlideIndex(0)} className={`${s.circleStyling}`}></span>
            <span onClick={() => setSlideIndex(1)} className={`${s.circleStyling}`}></span>
            <span onClick={() => setSlideIndex(2)} className={`${s.circleStyling}`}></span>
        </div>
    </div>
  )
}
import React from 'react'
import Img1 from "../../assets/images/img/asset1.png";
import Img2 from "../../assets/images/img/asset3.png";
import Img3 from "../../assets/images/img/asset5.png";
import Img4 from "../../assets/images/img/asset7.png";
// import { ImageData } from "../slider/data";
// import Slider from '../slider/Slider';
import Slider1 from '../slider/Slider1';
const slides = [
  {
    imageUrl: Img4,
    caption: 'Slide 3',
  },
  {
    imageUrl: Img1,
    caption: 'Slide 3',
  },
  {
    imageUrl: Img2,
    caption: 'Slide 3',
  },
  {
    imageUrl: Img3,
    caption: 'Slide 4',
  },
];

function Header() {
  return (
    <>
      {/* <Slider ImageData={ImageData} SlideInterValTime={2000} /> */}
      {/* <Slider /> */}
      <Slider1 slides={slides} interval={2000} />
    </>
  )
}

export default Header

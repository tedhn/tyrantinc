import React from "react";
import { Carousel } from "antd";

import { WinterCollection, Image2, Image3 } from "./index.style";

const CarouselComponent = () => {
  return (
    <Carousel autoplay>
      <div>
        <WinterCollection />
      </div>
      <div>
        <Image2 />
      </div>
      <div>
        <Image3 />
      </div>
    </Carousel>
  );
};

export default CarouselComponent;

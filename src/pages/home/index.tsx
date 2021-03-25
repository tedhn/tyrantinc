import React from "react";
import CarouselComponent from "../../components/carousel";
import NavComponent from "../../components/navbar";

import { HomeWrapper } from "./index.style";

function HomePage() {
  return (
    <HomeWrapper>
      <NavComponent />
      <CarouselComponent />
    </HomeWrapper>
  );
}

export default HomePage;

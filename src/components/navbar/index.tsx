import React from "react";

import {
  CatergoriesWrapper,
  SVG,
  Catergories,
  SvgWrapper,
  Title,
  NavWrapper,
} from "./index..style";

import { ReactComponent as Search } from "../../svg/search.svg";
import { ReactComponent as Cart } from "../../svg/cart.svg";
import DropDownComponent from "../dropdown";
import anime from "animejs";

const NavComponent = () => {
  const [clicked, setClicked] = React.useState(false);
  const [section, setSection] = React.useState(0);
  const timeline = anime.timeline({ easing: "easeInOutExpo", duration: 400 });

  React.useEffect(() => {
    timeline.add({
      targets: ".test",
      height: clicked ? "250px" : "0",
      opacity: clicked ? 1 : 0,
    });
  }, [clicked, timeline]);

  const handleNavClick = (s: number) => {
    if (s === section) {
      setClicked(!clicked);
    } else {
      setClicked(true);
      setSection(s);
    }
  };

  return (
    <NavWrapper>
      <Title>Tyrant</Title>

      <CatergoriesWrapper>
        <Catergories
          onClick={() => {
            handleNavClick(1);
          }}
        >
          New Arrivals
        </Catergories>
        <Catergories
          onClick={() => {
            handleNavClick(2);
          }}
        >
          Men
        </Catergories>
        <Catergories
          onClick={() => {
            handleNavClick(3);
          }}
        >
          Women
        </Catergories>
      </CatergoriesWrapper>

      <div
        style={{
          pointerEvents: clicked ? "auto" : "none",
        }}
      >
        <DropDownComponent section={section} />
      </div>

      <SvgWrapper>
        <SVG>
          <Search />
        </SVG>
        <SVG>
          <Cart />
        </SVG>
      </SvgWrapper>
    </NavWrapper>
  );
};

export default NavComponent;

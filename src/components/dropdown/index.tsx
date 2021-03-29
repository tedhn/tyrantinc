import React from "react";
import { Dropdown, DropdownWrapper } from "./index.style";
import "./index.scss";

import anime from "animejs";

interface Props {
  section: { name: string; number: number };
}

const DropDownComponent: React.FC<Props> = ({ section }) => {
  const [previousSection, setPreviousSection] = React.useState({
    number: 0,
    name: ".",
  });

  React.useEffect(() => {
    const { number, name } = previousSection;

    if (number === 0) {
      anime({ targets: section.name, opacity: 1 });
      setPreviousSection({ number: section.number, name: section.name });
    } else {
      switch (section.number) {
        case 1:
          anime({ targets: name, opacity: 0, translateX: 100 });
          anime({
            targets: section.name,
            translateX: [-100, 0],
            opacity: 1,
            duration: 500,
            easing: "easeInOutExpo",
          });
          break;

        case 2:
          if (number === 1) {
            anime({ targets: name, opacity: 0, translateX: -100 });
            anime({
              targets: section.name,
              opacity: 1,
              translateX: [100, 0],
              duration: 500,
              easing: "easeInOutExpo",
            });
          } else {
            anime({ targets: name, opacity: 0, translateX: 100 });
            anime({
              targets: section.name,
              translateX: [-100, 0],
              opacity: 1,
              duration: 500,
              easing: "easeInOutExpo",
            });
          }

          break;
        case 3:
          anime({ targets: name, opacity: 0, translateX: -100 });
          anime({
            targets: section.name,
            translateX: [100, 0],
            opacity: 1,
            duration: 500,
            easing: "easeInOutExpo",
          });
          break;
      }
      setPreviousSection({ number: section.number, name: section.name });
    }
  }, [section]);

  return (
    <DropdownWrapper className="test">
      <Dropdown
        className="newArrivals"
        style={{
          pointerEvents: section.number === 1 ? "auto" : "none",
        }}
      >
        asdf
      </Dropdown>
      <Dropdown
        className="men"
        style={{
          pointerEvents: section.number === 2 ? "auto" : "none",
        }}
      >
        asdf1
      </Dropdown>
      <Dropdown
        className="women"
        style={{
          pointerEvents: section.number === 3 ? "auto" : "none",
        }}
      >
        asdf2
      </Dropdown>
    </DropdownWrapper>
  );
};

export default DropDownComponent;

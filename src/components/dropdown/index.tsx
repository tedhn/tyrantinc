import React from "react";
import { Dropdown, DropdownWrapper } from "./index.style";
import "./index.scss";

import anime from "animejs";

interface Props {
  section: number;
}

const DropDownComponent: React.FC<Props> = ({ section }) => {
  React.useEffect(() => {
    switch (section) {
      case 1:
        anime({ targets: ".newArrivals", opacity: 1 });
        anime({ targets: ".men", opacity: 0 });
        anime({ targets: ".women", opacity: 0 });
        break;
      case 2:
        anime({ targets: ".newArrivals", opacity: 0 });
        anime({ targets: ".men", opacity: 1 });
        anime({ targets: ".women", opacity: 0 });
        break;
      case 3:
        anime({ targets: ".newArrivals", opacity: 0 });
        anime({ targets: ".men", opacity: 0 });
        anime({ targets: ".women", opacity: 1 });
    }
  }, [section]);

  return (
    <DropdownWrapper className="test">
      <Dropdown
        className="newArrivals"
        style={{
          pointerEvents: section === 1 ? "auto" : "none",
        }}
      >
        asdf
      </Dropdown>
      <Dropdown
        className="men"
        style={{
          pointerEvents: section === 2 ? "auto" : "none",
        }}
      >
        asdf1
      </Dropdown>
      <Dropdown
        className="women"
        style={{
          pointerEvents: section === 3 ? "auto" : "none",
        }}
      >
        asdf2
      </Dropdown>
    </DropdownWrapper>
  );
};

export default DropDownComponent;

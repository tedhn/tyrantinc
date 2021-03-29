import styled from "styled-components";

import image from "../../images/mcjo-sy-mSOIqZ1Dlkw-unsplash.jpg";
import image2 from "../../images/goh-rhy-yan-XgsVB9Uwpq8-unsplash.jpg";
import image3 from "../../images/marco-xu-x2tnHqvWYB0-unsplash.jpg";

export const ItemWrapper = styled.div`
  position: absolute;
`;

export const WinterCollection = styled.div`
  background: url(${image});
  height: 100vh;
  line-height: 160px;
  text-align: center;
  color: white;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
export const Image2 = styled.div`
  background: url(${image2});
  height: 100vh;
  line-height: 160px;
  text-align: center;
  color: white;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
export const Image3 = styled.div`
  background: url(${image3});
  height: 100vh;
  line-height: 160px;
  text-align: center;
  color: white;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
export const Back = styled.div`
  position: absolute;
  left: 0;
  z-index: 3;
  background-color: white;
  opacity: 0.65;
  top: 50%;
  width: 200px;
  text-align: center;
`;

export const Next = styled.div`
  position: absolute;
  right: 0;
  z-index: 3;
  background-color: white;
  opacity: 0.65;
  top: 50%;
  width: 200px;
  text-align: center;
`;

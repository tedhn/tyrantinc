import styled from "styled-components";

export const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px 50px;
  user-select: none;
  z-index: 2;
  width: 100vw;
  background: white;
  position: absolute;
`;

export const Title = styled.div`
  font-size: 36px;
  margin-right: 50px;
  cursor: pointer;
`;

export const CatergoriesWrapper = styled.div`
  font-size: 18px;
  display: flex;
  flex-direction: row;
`;

export const Catergories = styled.div`
  margin: 0 10px;
  padding: 0 10px;
  cursor: pointer;
`;

export const SvgWrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  right: 50px;
`;

export const SVG = styled.div`
  height: 40px;
  width: 35px;
  margin-right: 15px;
  cursor: pointer;
`;

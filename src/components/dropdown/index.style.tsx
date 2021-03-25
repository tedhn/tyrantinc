import styled from "styled-components";

export const DropdownWrapper = styled.div`
  position: absolute;
  top: 65px;
  background: #f5f5f5;
  width: 100vw;
  height: 0;
  left: 0;
  opacity: 0;
  z-index: 4;
`;

export const Dropdown = styled.div`
  display: flex;
  cursor: pointer;
  position: absolute;
  margin: 30px 50px;
  font-size: 16px;
  padding: 5px 10px;

  :hover {
    background: black;
  }
`;

import styled from "styled-components";

export const NavbarStyle = styled.nav`
  align-items: center;
  background: #131020;
  column-gap: 10px;
  display: flex;
  height: 3em;
  justify-content: space-evenly;
  left: 0;
  position: fixed;
  padding: 0 30px;
  opacity: 0.7;
  top: 0;
  text-align: center;
  width: 100%;
  @media (max-width: 768px) {
    padding: 0 0;
  }
`;

export const NavbarText = styled.h2`
  cursor: pointer;
  color: #cbd1da;
  font-weight: 600;
  letter-spacing: 4px;
  text-transform: uppercase;
  &:hover {
    color: #e8ebee;
  }
  @media (max-width: 1200px) {
    font-size: 18px;
  }
  @media (max-width: 950px) {
    letter-spacing: 0;
    font-size: 12px;
  }
`;

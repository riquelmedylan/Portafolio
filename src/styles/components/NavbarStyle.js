import styled from "styled-components";

export const NavbarStyle = styled.nav`
     align-items: center;
     background: #131020;
     display: flex;
     height: 3em;
     justify-content: space-evenly;
     left: 0;
     position: fixed;
     padding: 0 30px;
     opacity: 0.7;
     top: 0;
     width: 100%;
     @media (max-width: 768px) {
          padding: 0 0;
     }
`;

export const NavbarText = styled.h2`
     cursor: pointer;
     color: #cbd1da;
     font-weight: 600;
     letter-spacing: 6px;
     text-transform: uppercase;

     &:hover {
          color: #e8ebee;
     }
     @media (max-width: 768px) {
          letter-spacing: 0;
          font-size: 16px;
     }
`;

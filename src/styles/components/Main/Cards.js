import styled from "styled-components";
import { Device } from "../../Breakpoints";

export const CardContainer = styled.div`
     width: 100%;
     @media ${Device.mls} {
          &:nth-last-child(1) {
               grid-column: 1/3;
          }
     }
`;

export const CardImg = styled.img`
     width: 100%;
`;

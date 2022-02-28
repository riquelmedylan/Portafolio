import styled from "styled-components";
import { Device } from "../Breakpoints";

export const TextStyleHeaderName = styled.h1`
     color: #cbd1da;
     text-align: center;
     user-select: none;
`;
export const TextStyleHeaderEmployee = styled.h2`
     color: #a4a8ae;
     text-align: center;
     user-select: none;
`;

export const TextStyleHeaderLocation = styled.p`
     color: #cbd1da;
     text-align: center;
     user-select: none;
`;

export const TextStyleMainTitle = styled.h2`
     color: #cbd1da;
     font-size: 2.25em;
     font-weight: 600;
     letter-spacing: 15px;
     text-align: center;
     text-transform: uppercase;
     @media ${Device.sml} {
          letter-spacing: 6px;
     }
     &:nth-last-child(3) {
          font-size: 2em;
     }
`;

export const TextStyleMainAboutChild = styled.p`
     color: #a4a8ae;
     font-size: 18px;
     text-align: center;
`;

export const TextStyleLabel = styled.label`
     display: block;
     font-size: 18px;
     color: #a4a8ae;
     margin-bottom: 8px;
`;

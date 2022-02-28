import styled from "styled-components";
import { Device } from "../../Breakpoints";
export const MainContainerComponent = styled.section`
     margin: 0 auto;
     width: 80%;
`;

export const MainContainerGridProjects = styled.section`
     display: grid;
     grid-template-columns: 1fr;
     @media ${Device.mls} {
          column-gap: 20px;
          grid-template-columns: 1fr 1fr;
     }
`;

export const MainContainerSvg = styled.div`
     display: grid;
     grid-template-columns: repeat(4, 1fr);
     grid-template-rows: 50px 50px;
     @media ${Device.sm} {
          grid-template-columns: repeat(5, 1fr);
     }
     margin-bottom: 12px;
`;

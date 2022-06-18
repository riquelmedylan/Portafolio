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
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  width: 100%;
`;

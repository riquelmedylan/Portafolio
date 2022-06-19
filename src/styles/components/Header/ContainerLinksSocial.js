import styled from "styled-components";

export const ContainerLinksSocial = styled.section`
  display: flex;
  justify-content: space-evenly;
`;
export const SvgLinks = styled.svg`
  cursor: pointer;
  fill: white;
  height: 3em;
  transition: fill 0.5s ease;
  width: 3rem;
  &:hover {
    fill: #644c71;
  }
`;

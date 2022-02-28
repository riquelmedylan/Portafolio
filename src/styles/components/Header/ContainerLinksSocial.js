import styled from "styled-components";

export const ContainerLinksSocial = styled.section`
     display: flex;
     justify-content: space-evenly;
`;
export const SvgLinks = styled.svg`
     cursor: pointer;
     fill: white;
     height: 3em;
     width: 3rem;
     transition: fill 0.5s ease;

     &:hover {
          fill: #644c71;
     }
`;

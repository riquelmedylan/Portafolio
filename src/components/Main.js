import React from "react";

import {
  MainContainerComponent,
  MainContainerGridProjects,
} from "../styles/components/Main/MainComponentsContainer";
import { MainStyle } from "../styles/components/MainStyle";

import { TextStyleMainTitle } from "../styles/components/TextStyle";
import { About } from "./About";
import { Form } from "./Form";
import { GridCards } from "./GridCards";
import { SvgMain } from "./SvgMain";
import { WhereWorked } from "./WhereWorked";

export const Main = () => {
  return (
    <MainStyle>
      <MainContainerComponent>
        <About />

        <TextStyleMainTitle id="projects">Proyectos</TextStyleMainTitle>

        <MainContainerGridProjects>
          <GridCards />
        </MainContainerGridProjects>

        <TextStyleMainTitle id="skills">Habilidades</TextStyleMainTitle>

        <SvgMain />

        <TextStyleMainTitle id="whereWorked">Donde trabajé</TextStyleMainTitle>
        <WhereWorked />

        <TextStyleMainTitle id="contact">Contacto</TextStyleMainTitle>

        <Form />
      </MainContainerComponent>
    </MainStyle>
  );
};

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

export const Main = () => {
     return (
          <MainStyle>
               <MainContainerComponent>
                    <About />
                    <TextStyleMainTitle>Proyectos</TextStyleMainTitle>
                    <MainContainerGridProjects>
                         <GridCards />
                    </MainContainerGridProjects>
                    <TextStyleMainTitle>Habilidades</TextStyleMainTitle>
                    <SvgMain />
                    <Form />
               </MainContainerComponent>
          </MainStyle>
     );
};

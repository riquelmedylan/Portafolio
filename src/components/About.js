import React from "react";
import {
     TextStyleMainTitle,
     TextStyleMainAboutChild,
} from "../styles/components/TextStyle";

export const About = () => {
     return (
          <>
               <TextStyleMainTitle id="aboutMe">
                    Acerca de mí
               </TextStyleMainTitle>

               <TextStyleMainAboutChild>
                    Dylan es un programador autodidacta, apasionado del código y
                    desarrollador Front-end developer
               </TextStyleMainAboutChild>
               <TextStyleMainAboutChild>
                    Me considero un desarrollador entusiasta con una gran
                    capacidad para ser autodidacta. Siempre capaz de compartir
                    conocimientos con quien lo necesite. Siempre estoy
                    interesado en aprender nuevas tecnologías.
               </TextStyleMainAboutChild>
          </>
     );
};

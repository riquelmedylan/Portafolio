import React from "react";
import { NavbarStyle, NavbarText } from "../styles/components/NavbarStyle";

export const Navbar = () => {
     return (
          <NavbarStyle>
               <a href="#aboutMe">
                    <NavbarText>Acerca de Mí</NavbarText>
               </a>
               <a href="#projects">
                    <NavbarText>Proyectos</NavbarText>
               </a>
               <a href="#skills">
                    <NavbarText>Habilidades</NavbarText>
               </a>
               <a href="#contact">
                    <NavbarText>Contacto</NavbarText>
               </a>
          </NavbarStyle>
     );
};

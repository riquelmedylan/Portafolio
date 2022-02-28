import React from "react";
import { CardContainer, CardImg } from "../styles/components/Main/Cards";
import {
     TextStyleHeaderEmployee,
     TextStyleHeaderLocation,
} from "../styles/components/TextStyle";

export const GridCards = () => {
     return (
          <>
               <CardContainer>
                    <a href="https://riquelmedylan.github.io/ProyectoApiRickAndMorty/">
                         <CardImg src="https://firebasestorage.googleapis.com/v0/b/portafolio-d78d1.appspot.com/o/RickAndMorty.png?alt=media&amp;token=81b804ab-e20e-4295-89c1-6f207305315c" />
                    </a>

                    <TextStyleHeaderEmployee>
                         Rick And Morty
                    </TextStyleHeaderEmployee>
                    <TextStyleHeaderLocation>
                         Hecho con HTML, Css y Javascript
                    </TextStyleHeaderLocation>
               </CardContainer>
               <CardContainer>
                    <a href="https://riquelmedylan.github.io/GifApp/">
                         <CardImg
                              src="https://firebasestorage.googleapis.com/v0/b/portafolio-d78d1.appspot.com/o/GifApp.png?alt=media&amp;token=7be873b2-20e1-4757-9baf-c107fa7c6000"
                              alt="GifApp"
                         />
                    </a>
                    <TextStyleHeaderEmployee>Gif App</TextStyleHeaderEmployee>
                    <TextStyleHeaderLocation>
                         Hecho con React y Css
                    </TextStyleHeaderLocation>
               </CardContainer>
               <CardContainer>
                    <a href="https://weather-app-rd.netlify.app/">
                         <CardImg
                              src="https://firebasestorage.googleapis.com/v0/b/portafolio-d78d1.appspot.com/o/WeatherApp.jpg?alt=media&amp;token=b8e36f3e-c2e0-4cb5-8f1f-b9fdd20d4b4f"
                              alt="Weather App"
                         />
                    </a>
                    <TextStyleHeaderEmployee>
                         Weather App
                    </TextStyleHeaderEmployee>
                    <TextStyleHeaderLocation>
                         Hecho con Sass y React
                    </TextStyleHeaderLocation>
               </CardContainer>
               <CardContainer>
                    <a href="https://journalapp-rd.netlify.app/">
                         <CardImg
                              src="https://firebasestorage.googleapis.com/v0/b/portafolio-d78d1.appspot.com/o/journal-app.png?alt=media&amp;token=0436443f-9181-4747-8155-735bf98dcb00"
                              alt="Journal App"
                         />
                    </a>
                    <TextStyleHeaderEmployee>
                         Journal App
                    </TextStyleHeaderEmployee>
                    <TextStyleHeaderLocation>
                         Hecho con Sass, React y Firebase
                    </TextStyleHeaderLocation>
               </CardContainer>
               <CardContainer>
                    <a href="https://app-music-rd.netlify.app/">
                         <CardImg
                              src="https://firebasestorage.googleapis.com/v0/b/portafolio-d78d1.appspot.com/o/App%20Music.png?alt=media&token=11d0f9db-e21d-4c89-bb75-1c134c27cd42"
                              alt="App Music"
                         />
                    </a>
                    <TextStyleHeaderEmployee>
                         Ecommerce de instrumentos
                    </TextStyleHeaderEmployee>
                    <TextStyleHeaderLocation>
                         Hecho con Sass, React, NodeJs y MongoDb
                    </TextStyleHeaderLocation>
               </CardContainer>
          </>
     );
};

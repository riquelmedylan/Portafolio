import React, { useState } from "react";
import { sendForm } from "../helpers/SendForm";
import {
     ButtonForm,
     InputForm,
     TextareaForm,
} from "../styles/components/Main/Form";
import { TextStyleLabel } from "../styles/components/TextStyle";

export const Form = () => {
     const [email, setEmail] = useState();
     const [text, setText] = useState();
     const [name, setName] = useState();

     const submitHandleSend = (e) => {
          e.preventDefault();
          sendForm(email, text, name);
     };

     return (
          <form onSubmit={submitHandleSend}>
               <TextStyleLabel htmlFor="name">Nombre</TextStyleLabel>
               <InputForm
                    onChange={(e) => setName(e.target.value)}
                    name="name"
                    type="text"
                    placeholder="Jorge"
                    required
               />
               <TextStyleLabel htmlFor="email">
                    Correo Electronico
               </TextStyleLabel>
               <InputForm
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                    type="email"
                    placeholder="example@example.com"
                    required
               />
               <TextStyleLabel htmlFor="message">Mensaje</TextStyleLabel>
               <TextareaForm
                    onChange={(e) => setText(e.target.value)}
                    name="message"
                    cols="30"
                    rows="20"
                    required
               />
               <ButtonForm type="submit">Enviar</ButtonForm>
          </form>
     );
};

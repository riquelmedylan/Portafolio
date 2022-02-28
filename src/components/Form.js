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
     const submitHandleSend = (e) => {
          e.preventDefault();
          sendForm(email, text);
     };

     return (
          <form onSubmit={submitHandleSend}>
               <TextStyleLabel htmlFor="email">
                    Correo Electronico
               </TextStyleLabel>
               <InputForm
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                    type="text"
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

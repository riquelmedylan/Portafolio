import React, { useState } from "react";
import { sendForm } from "../helpers/SendForm";
import { FooterMainComponent } from "../styles/components/Footer/FooterMain";
import {
  ButtonForm,
  InputForm,
  TextareaForm,
} from "../styles/components/Main/Form";
import { SnackbarComponent } from "../styles/components/Snackbar/Snackbar";
import { TextStyleLabel } from "../styles/components/TextStyle";

export const Form = () => {
  const [email, setEmail] = useState();
  const [text, setText] = useState();
  const [name, setName] = useState();
  const [showSend, setShowSend] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const submitHandleSend = (e) => {
    e.preventDefault();
    const data = Array.from(new FormData(e.target));
    console.log(Object.fromEntries(data));
    // sendForm(email, text, name);
    // setIsDisabled(true);
    // setShowSend(true);
  };

  return (
    <FooterMainComponent>
      <form onSubmit={submitHandleSend}>
        <TextStyleLabel htmlFor="name">Nombre</TextStyleLabel>
        <InputForm
          onChange={(e) => setName(e.target.value)}
          name="name"
          type="text"
          placeholder="Jorge"
          required
        />
        <TextStyleLabel htmlFor="email">Correo Electronico</TextStyleLabel>
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
          rows="10"
          required
        />
        <ButtonForm disabled={isDisabled} type="submit">
          Enviar
        </ButtonForm>
      </form>
      {showSend ? (
        <SnackbarComponent>Se envió correctamente</SnackbarComponent>
      ) : null}
    </FooterMainComponent>
  );
};

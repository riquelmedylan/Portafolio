import axios from "axios";
export const sendForm = (email, text) => {
     axios.post("https://send-form-rad.herokuapp.com/send-email", {
          mode: "no-cors",
          headers: {
               "Access-Control-Allow-Origin": "*",
               Accept: "application/json",
               "Content-Type": "application/json",
          },
          data: { email, text },
     });
};

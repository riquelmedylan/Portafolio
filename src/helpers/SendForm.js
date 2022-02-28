import axios from "axios";
export const sendForm = (email, text) => {
     axios.post("https://send-form-rad.herokuapp.com/send-email", {

          data: { email, text },
     });
};

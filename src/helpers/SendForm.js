export const sendForm = (email, text) => {
     fetch("https://send-form-rad.herokuapp.com/send-email/", {
          mode: "no-cors",
          method: "POST",
          headers: {
               Accept: "application/json",
               "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, text }),
     });
};

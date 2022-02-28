export const sendForm = (email, text) => {
     fetch("https://send-form-rad.herokuapp.com/send-email", {
          method: "POST",
          headers: {
               Accept: "application/json",
               "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, text }),
     });
};

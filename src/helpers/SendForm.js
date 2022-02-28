export const sendForm = (email, text) => {
     fetch("http://localhost:3030/send-email", {
          method: "POST",
          headers: {
               Accept: "application/json",
               "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, text }),
     });
};

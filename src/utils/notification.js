import { store } from "react-notifications-component";

const showNotification = (title, message, type) => {
  store.addNotification({
    title,
    message,
    type,
    insert: "top",
    container: "top-right",
    animationIn: ["animate__animated", "animate__backInRight"],
    animationOut: ["animate__animated", "animate__fadeOutRight"],
    dismiss: {
      duration: 3500,
    },
  });
};

export default showNotification;

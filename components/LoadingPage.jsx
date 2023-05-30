import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import loadingPage from "../public/assets/loading_page_lottie.json";
const messages = [
  "Estamos preparando algo fantástico para ti...",
  "Colocando los mejores talleres, añadiendo un poco de color",
  "Ya casi está listo...",
  "Estamos demorando más de lo habitual... :(",
];

const LoadingPage = () => {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 3000);

    return () => {
      clearInterval(messageInterval);
    };
  }, []);

  useEffect(() => {
    setCurrentMessage(messages[messageIndex]);
  }, [messageIndex]);

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex justify-center items-center flex-col p-20">
        <Lottie animationData={loadingPage} loop={true} />
        <p className="loading-message text-[#b5597e] text-center">
          {currentMessage}
        </p>
      </div>
    </div>
  );
};

export default LoadingPage;

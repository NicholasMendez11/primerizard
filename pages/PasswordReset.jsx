import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useStateContext } from "../context/StateContext";
import { useRouter } from "next/router";

const ForgotPassword = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const { handleResetPassword } = useStateContext();

  const handlePasswordRest = async (e) => {
    e.preventDefault();
    if (email === "") {
      toast.error("Porfavor, introduce to correo", {
        duration: 4000,
        position: "top-center",
      });
      return;
    }

    await handleResetPassword(email);
    toast.success("Correo de confirmacion enviado a tu correo", {
      duration: 4000,
      position: "top-center",
    });
    setEmail("");
    router.back();
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#f3eeef] to-[#efc6d6]">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="max-w-md px-6 py-8 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl mb-4 text-gray-800">Olvidé mi contraseña</h2>
        <form onSubmit={(e) => handlePasswordRest(e)}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ingresa tu correo electrónico"
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full py-2 px-4 text-white bg-[#B5597E] rounded-md hover:bg-[#c8638b] focus:outline-none focus:ring-2 focus:ring-pink-500"
          >
            Restablecer Contraseña
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;

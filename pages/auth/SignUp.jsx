import React from "react";
import { FcGoogle } from "react-icons/fc";
import { GrFacebook, GrTwitter } from "react-icons/gr";
import logoPrincipal from "../../public/assets/logoPrincipal.png";
import { useStateContext } from "../../context/StateContext";
import Image from "next/image";
import { useRouter } from "next/router";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import Link from "next/link";
function SignUp() {
  const router = useRouter();
  const { userState, signIn, user } = useStateContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = async (event) => {
    event.preventDefault();
    if (!email || !password || !confirmPassword) {
      toast.error("Por favor, rellene todos los campos.");
      return;
    }

    // Verificar que la contraseña tenga al menos 6 caracteres
    if (password.length < 6) {
      toast.error("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    // Verificar que la contraseña contenga al menos una mayúscula y un caracter especial
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      toast.error(
        "La contraseña debe contener al menos una letra mayúscula, un caracter especial y un número."
      );
      return;
    }

    // Verificar que las contraseñas coincidan
    if (password !== confirmPassword) {
      toast.error("Las contraseñas no coinciden.");
      return;
    }
    try {
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Usuario registrado correctamente");
      router.push("/");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        toast.error("El correo electrónico ya está en uso.");
      } else {
        toast.error(
          "Error al registrar el usuario. Por favor intenta de nuevo."
        );
      }
    }
  };

  const { paymentRequest, slug } = router.query;
  const signInRoute = router.query;
  //   console.log("Comming from payment?", paymentRequest);

  //   console.log(router.query);
  return (
    <div className="h-full bg-gradient-to-tl from-[#60b2e6] to-[#ffabbc] w-full py-16 px-4">
      <div className="flex flex-col items-center justify-center">
        {/* Puedes poner la imagen del logo aca */}
        <div className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-16">
          <p
            tabIndex={0}
            role="heading"
            aria-label="Login to your account"
            className="text-2xl font-extrabold leading-6 text-[#ff6c89]"
          >
            Unete a la comunidad de{" "}
            <span className="text-[#79B7E6]">primeriza!</span>
          </p>
          <p className="text-sm mt-4 font-medium leading-none text-gray-500">
            Ya tienes una cuenta?{" "}
            <Link href={"/auth/Login"}>
              <span
                tabIndex={0}
                role="link"
                aria-label="Sign up here"
                className="text-sm font-medium leading-none underline text-gray-800 cursor-pointer"
              >
                {" "}
                Inicia sesion aqui
              </span>
            </Link>
          </p>
          <button
            onClick={() => signIn(signInRoute)}
            aria-label="Continue with google"
            role="button"
            className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-10"
          >
            <svg
              width={19}
              height={20}
              viewBox="0 0 19 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.9892 10.1871C18.9892 9.36767 18.9246 8.76973 18.7847 8.14966H9.68848V11.848H15.0277C14.9201 12.767 14.3388 14.1512 13.047 15.0812L13.0289 15.205L15.905 17.4969L16.1042 17.5173C17.9342 15.7789 18.9892 13.221 18.9892 10.1871Z"
                fill="#4285F4"
              />
              <path
                d="M9.68813 19.9314C12.3039 19.9314 14.4999 19.0455 16.1039 17.5174L13.0467 15.0813C12.2286 15.6682 11.1306 16.0779 9.68813 16.0779C7.12612 16.0779 4.95165 14.3395 4.17651 11.9366L4.06289 11.9465L1.07231 14.3273L1.0332 14.4391C2.62638 17.6946 5.89889 19.9314 9.68813 19.9314Z"
                fill="#34A853"
              />
              <path
                d="M4.17667 11.9366C3.97215 11.3165 3.85378 10.6521 3.85378 9.96562C3.85378 9.27905 3.97215 8.6147 4.16591 7.99463L4.1605 7.86257L1.13246 5.44363L1.03339 5.49211C0.37677 6.84302 0 8.36005 0 9.96562C0 11.5712 0.37677 13.0881 1.03339 14.4391L4.17667 11.9366Z"
                fill="#FBBC05"
              />
              <path
                d="M9.68807 3.85336C11.5073 3.85336 12.7344 4.66168 13.4342 5.33718L16.1684 2.59107C14.4892 0.985496 12.3039 0 9.68807 0C5.89885 0 2.62637 2.23672 1.0332 5.49214L4.16573 7.99466C4.95162 5.59183 7.12608 3.85336 9.68807 3.85336Z"
                fill="#EB4335"
              />
            </svg>
            <p className="text-base font-medium ml-4 text-gray-700">
              Registrarme con mi cuenta de Google
            </p>
          </button>

          <div className="w-full flex items-center justify-between py-5">
            <hr className="w-full bg-gray-400" />
            <p className="text-base font-medium leading-4 px-2.5 text-gray-400">
              OR
            </p>
            <hr className="w-full bg-gray-400  " />
          </div>

          {/* Email input */}
          <div className="mb-6">
            <input
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#79B7E6] focus:outline-none"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Correo Electronico"
            />
          </div>
          {/* Password input */}
          <div className="mb-6">
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#79B7E6] focus:outline-none"
              placeholder="Contraseña"
            />
          </div>
          {/* Confirm Password input */}
          <div className="mb-6">
            <input
              type="password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#79B7E6] focus:outline-none"
              placeholder="Confirmar Contraseña"
            />
          </div>
          <div className="mt-8">
            <button
              type="submit"
              onClick={(e) => handleSignUp(e)}
              className="inline-block px-7 py-3 bg-[#ff6c89] text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-[#ff6c899b] hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
            >
              Crear mi cuenta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

import React from "react";
import { FcGoogle } from "react-icons/fc";
import { GrFacebook, GrTwitter } from "react-icons/gr";
import logoPrincipal from "../../public/assets/logoPrincipal.png";
import { useStateContext } from "../../context/StateContext";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

function Login() {
  const router = useRouter();
  const { userState, signIn, user } = useStateContext();

  const { paymentRequest, slug } = router.query;
  const signInRoute = router.query;

  return (
    <section className="h-screen mb-10">
      <div className="container px-6 py-12 h-full">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="md:w-8/12 lg:w-6/12 md:mb-0">
            <Image src={logoPrincipal} className="w-full" alt="Phone image" />
          </div>
          <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
            <h1 className="text-center text-[#ff6c89] mb-10 text-xl animate-pulse">
            Inicia sesión con tu cuenta primeriza
            </h1>
            {/* Email input */}
            <div className="mb-6">
              <input
                type="text"
                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Correo Electrónico"
              />
            </div>
            {/* Password input */}
            <div className="mb-6">
              <input
                type="password"
                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Contraseña"
              />
            </div>
            <div className="flex justify-between items-center mb-6">
              <div className="form-group form-check">
                <input
                  type="checkbox"
                  className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-[#ff6c89] checked:border-[#ff6c89] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  id="exampleCheck3"
                  defaultChecked
                />
                <label
                  className="form-check-label inline-block text-gray-800"
                  htmlFor="exampleCheck2"
                >
                  Recuerdame
                </label>
              </div>
              <Link
                href="/PasswordReset"
                className="text-[#ff6c89] hover:text-[#ff6c899b] focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
              >
                Olvide mi contraseña
              </Link>
            </div>
            {/* Submit button */}
            <button
              type="submit"
              className="inline-block px-7 py-3 bg-[#ff6c89] text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-[#ff6c899b] hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
            >
              Iniciar sesión
            </button>
            <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
              <p className="text-center font-semibold mx-4 mb-0">O</p>
            </div>

            <div className="flex justify-between">
              <button
                onClick={() => signIn(signInRoute)}
                aria-label="Continue with google"
                role="button"
                className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 hover:border rounded-lg border-[#83C0EC] flex items-center w-full mt-10 bg-white"
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
                  Iniciar con mi cuenta de Google
                </p>
              </button>
            </div>
            <div>
              <p className="flex justify-center mt-10 ">
              ¿No tienes una cuenta?&nbsp;{" "}
                <Link href={"/auth/SignUp"}>
                  <span className="text-[#ff6c89] hover:text-[#ff6c899b] hover:cursor-pointer">
                  ¡Creala!
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;

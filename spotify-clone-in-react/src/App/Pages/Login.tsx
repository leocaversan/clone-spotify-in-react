import Header from "../Components/Header";
import LoginWith from "../Components/LoginWith";
import PasswordRevealer from "../Components/PasswordReveler";
import RememberMe from "../Components/RememberMe";
import { Link } from "react-router-dom";


function validateCredentials(): any {

    const inputElementEmail = document.getElementById("inputMail") as HTMLInputElement;
    const inputElementPassword = document.getElementById("inputPassword") as HTMLInputElement;

    const email = inputElementEmail.value;
    const password = inputElementPassword.value;
    try {
        console.log(email, password);
    }
    catch(e){
        console.log(e)
    }

}

const Login = () => {

    return (
        <div className="bg-gray-800">
            <div>
                <Header />
            </div>
            <div className=" bg-black mt-20 mx-48 rounded-xl text-gray-50">
                <div className="mt-28">
                    <h1
                        className="flex flex-col text-[90px] font-bold text-center"
                    >
                        Entrar no Spotify</h1>

                    <div className="space-y-5 mt-20 flex flex-col mb-20">
                        <LoginWith plataform={"google"} />
                        <LoginWith plataform={"facebook"} />
                        <LoginWith plataform={"apple"} />
                    </div>
                    <hr className="bg-gray-500 mx-36" />
                    <div className="flex flex-col justify-center space-y-4 mt-10 mx-auto">
                        <div className="flex flex-col mx-auto w-1/2 space-y-3 text-2xl font-bold">
                            <label>
                                E-mail ou login
                            </label>
                            <input className="h-20 bg-gray-800 hover:border-gray-50" id="inputMail" />
                        </div>
                        <div className="flex flex-col mx-auto w-1/2 space-y-3 text-2xl font-bold">
                            <PasswordRevealer />
                            <RememberMe />
                            <div className="flex text-center">
                                {/* <Link className="bg-green-500 rounded-full w-2/3 mx-auto h-16 mt-2 hover:w-4/5 text-4xl text-center justify-center my-auto" to={"/home"}> */}
                                <button className="bg-green-500 rounded-full w-2/3 mx-auto h-16 mt-2 hover:w-4/5 text-4xl text-center justify-center my-auto"
                                    onClick={
                                        validateCredentials
                                    }
                                >
                                    Log In
                                </button>

                                {/* </Link> */}
                            </div>
                        </div>
                        <div className="text-center text-3xl underline pt-12 pb-10 hover:text-green-500">
                            <Link to={"/recoveryPassword"}>
                                Esqueceu a senha?
                            </Link>
                        </div>
                        <hr className="bg-gray-500 mx-36" />
                        <div className="text-3xl text-center pt-10 pb-32">
                            <h1 className="text-gray-200">
                                Não tem conta ainda?{' '}
                                <Link
                                    className="font-bold underline text-gray-50 hover:text-green-500"
                                    to={"/createdAccount"}>
                                    Inscrever no Spotify
                                </Link>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
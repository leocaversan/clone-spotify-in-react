import { useState } from "react";
const imgView = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSELxJ6BeII7kqIAmpHpUAW5fXjYX2p_Eg9flBTGNGlYgDy_yyA402ctjPUX9P9AYQgKW0&usqp=CAU";
const imgNotView = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTUsYXZuHu9c5CzU72rHowPjHcMp6jZ4Zq5auDDnDAV4eKRFxHOAY2HrMTb-h2sgZEZLQ&usqp=CAU";


const PasswordRevealer = () => {
    const [shown, setShown] = useState(false);

    return (
        <>
            <div className="flex flex-row justify-between">
                <label>
                    Senha
                </label>
                <div className="my-auto">
                    <button className="flex justify-center"
                        onClick={
                            () => {
                                setShown(!shown);
                            }
                        }>
                        <img
                            className="h-8 w-8     rounded-full"
                            src={shown ? imgNotView : imgView}
                            alt="" />
                    </button>
                </div>
            </div>
            <div className="flex flex-row">
                <input className="h-20 bg-gray-800 w-full hover:border-gray-50" type={shown ? "text" : "password"} id="inputPassword"/>
            </div>
        </>
    );
};

export default PasswordRevealer;

const infoPlataform = {
    google: {
        name: "Google",
        img: "https://sanantoniotreesurgeons.com/wp-content/uploads/2021/05/Illustration-of-Google-icon-on-transparent-background-PNG.png",
    },
    facebook: {
        name: "Facebook",
        img: "data:image/png;base64,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",
    },
    apple: {
        name: "Apple",
        img: "https://p7.hiclipart.com/preview/276/120/854/dell-logo-apple-computer-software-apple-inc.jpg",
    }
}

type props = {
    plataform: string
}

const LoginWith = ({ plataform }: props) => {

    if (plataform === "google") {
        return (
            <div className="flex flex-row justify-center rounded-2xl">
                <div className=" flex flex-row border-2 rounded-full w-1/2 hover:border-gray-50">
                    <div className="flex flex-row my-4 ml-20 space-x-10">
                        <div className="">
                            <img
                                className="w-10 h-10 rounded-full my-auto"
                                src={infoPlataform.google.img}
                                alt={infoPlataform.google.name} />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold my-auto">
                                Login with {infoPlataform.google.name}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    else if (plataform === "facebook") {
        return (
            <div className="flex flex-row justify-center rounded-2xl">
                <div className=" flex flex-row w-1/2 border-2 rounded-full hover:border-gray-50">
                    <div className="flex flex-row my-4 ml-20 space-x-10">
                        <div className="">
                            <img
                                className="w-10 h-10 rounded-full my-auto"
                                src={infoPlataform.facebook.img}
                                alt={infoPlataform.facebook.name} />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold my-auto">
                                Login with {infoPlataform.facebook.name}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    else if (plataform === "apple") {
        return (
            <div className="flex flex-row justify-center rounded-2xl">
                <div className=" flex flex-row w-1/2 border-2 rounded-full hover:border-gray-50">
                    <div className="flex flex-row my-4 ml-20 space-x-10">
                        <div className="">
                            <img
                                className="w-10 h-10 rounded-full my-auto"
                                src={infoPlataform.apple.img}
                                alt={infoPlataform.apple.name} />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold my-auto">
                                Login with {infoPlataform.apple.name}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    else {
        return (
            <div className="flex flex-row justify-center rounded-2xl">
                <div className=" flex flex-row w-1/2 border-2 rounded-full hover:border-gray-50">
                    <div className="flex flex-row my-4 mx-20 space-x-10">
                        <div className="">
                            <img
                                className="w-10 h-10 rounded-full my-auto"
                                src={infoPlataform.google.img}
                                alt={infoPlataform.google.img} />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold my-auto">
                                Login with {infoPlataform.google.name}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default LoginWith;
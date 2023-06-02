const imgLogoSpotify = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR75OOUcbqLXpn4J3GiKrdoqB3vLwG1HRjGDw&usqp=CAU";

const Home = () => {
    return (
        <div className="bg-black">
            <div className="flex flex-row space-x-[10px]">
                <img
                    className="w-16 h-16 rounded-full my-14 ml-24"
                    src={imgLogoSpotify}
                    alt="imgLogo" />
                <h1 className="my-auto text-gray-50 text-[46px] font-semibold"
                >
                    Spotify
                </h1>
            </div>
        </div>
    );
};
export default Home;
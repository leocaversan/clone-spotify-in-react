const imgOn = "";
const imgOff = "";

const RememberMe = () => {
    return (
        <div className="flex ml-10">
            <div className="flex flex-row">
                <input  className="h-24 w-10" type="checkbox"/>
                <p className="my-auto text-gray-400">Remember-me</p>
            </div>
        </div>
    );
};

export default RememberMe;
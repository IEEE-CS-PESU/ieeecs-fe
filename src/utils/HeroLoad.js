import Lottie from "react-lottie";
import load from '../assets/Load_Hero.json'
const loadOptions = {
    loop: true,
    autoplay: true,
    animationData: load,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
    },
};
const HeroLoad = () => {
    console.log("heheheh");
    return (
        <div className="load bg-white text-yellow-400 text-8xl min-h-full min-w-full flex justify-center pt-44">

            <Lottie options={loadOptions} height={250} width={250} />

        </div>
    );
}

export default HeroLoad;
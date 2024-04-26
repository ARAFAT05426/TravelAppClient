import Lottie from "lottie-react";
import loader  from './loader.json'
const Loader = () => {
    return (
        <div className="h-[calc(100vh-64px)] flex items-center justify-center">
            <Lottie className="h-3/5" animationData={loader} />
        </div>
    );
};

export default Loader;

import { useNavigate } from "react-router-dom";
const Coc = () => {
    const navi = useNavigate();
    return (
        <div className="h-screen border-2 border-orange-200">

            <button className="text-4xl text-white bg-blue-300 mt-44" onClick={() => {
                navi('/events');
            }}>Click me</button>

        </div>
    );
}

export default Coc;
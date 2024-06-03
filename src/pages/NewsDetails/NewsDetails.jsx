import { useParams } from "react-router-dom";
import RightBar from "../Home/RightBar";
import Header from "../Shared/Header/Header";
import NaveBar from "../Shared/NaveBar/NaveBar";


const NewsDetails = () => {
    const {id} = useParams();
    return (
        <div className="container mx-auto">
            <Header></Header>
            <NaveBar></NaveBar>
            <div className="grid grid-cols-4 gap-5">
                <div className=" col-span-3 border rounded-lg">
                    <h2 className="text-2xl">News Details</h2>
                    <p>{id}</p>
                </div>
                <div>
                    <RightBar></RightBar>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;
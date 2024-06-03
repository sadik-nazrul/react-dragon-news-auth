import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import NaveBar from "../Shared/NaveBar/NaveBar";
import BreakingNews from "./BreakingNews";
import LeftBar from "./LeftBar";
import RightBar from "./RightBar";
import NewsCard from "./NewsCard";


const Home = () => {
    const news = useLoaderData();

    return (
        <div className="container mx-auto">
            <Header></Header>
            <BreakingNews></BreakingNews>
            <NaveBar></NaveBar>

            {/* Content */}
            <div className="grid lg:grid-cols-4 md:grid-cols-4 gap-4">
                <div className="border">
                    <LeftBar></LeftBar>
                </div>
                <div className="col-span-2 border">
                    {
                        news.map(singleNews => <NewsCard key={singleNews._id} singleNews={singleNews}></NewsCard>)
                    }
                </div>
                <div className="border">
                    <RightBar></RightBar>
                </div>
            </div>
        </div>
    );
};

export default Home;
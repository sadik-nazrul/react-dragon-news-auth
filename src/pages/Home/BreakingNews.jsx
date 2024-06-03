import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div className="flex">
            <button className="btn btn-secondary">Latest</button>
            <Marquee pauseOnHover>
                <p className="mr-4 border-r pr-2 border-black">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p className="mr-4 border-r pr-2 border-black">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p className="mr-4 border-r pr-2 border-black">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p className="mr-4 border-r pr-2 border-black">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </Marquee>
        </div>
    );
};

export default BreakingNews;
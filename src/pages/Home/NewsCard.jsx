/* eslint-disable react/prop-types */
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";


const NewsCard = ({singleNews}) => {
    const {title, thumbnail_url, details, rating, _id} = singleNews;
    
    return (
        <div>
            <h2 className="text-xl font-semibold">{title}</h2>
            <img src={thumbnail_url} alt={title} />
            {details.length > 200 ? <p>{details.slice(0,200)} <Link to={`/news/${_id}`} className="text-orange-500 font-medium">Read More...</Link></p> : <p>{details}</p>}
            <div>
                <div className="flex items-center gap-2">
                    {rating.number >= 4 ? <>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    </>: <FaStar></FaStar>}{
                        rating.number
                    }
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
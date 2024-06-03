import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const LeftBar = () => {
    const [catergotirs, setCategories] = useState([]);
    useEffect(() => {
        fetch('/categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div>
            <div className="p-3 mb-5 space-y-2">
                <h2 className="text-lg font-semibold">All Categories</h2>
                {
                    catergotirs.map(category => <NavLink key={category.id} className='flex flex-col' to={`/category/${category.id}`}>{category.name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default LeftBar;
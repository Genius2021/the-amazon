import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar} from "react-icons/fa";

function Rating(props) {
    const {rating, numReviews} = props;
    return (
        <div className="rating">
            {
                rating >= 1 ? <span><i><FaStar /></i></span> : rating >= 0.5 ? <span><i><FaStarHalfAlt /></i></span> : <span><i><FaRegStar /></i></span> 
            }
            {
                rating >= 2 ? <span><i><FaStar /></i></span> : rating >= 1.5 ? <span><i><FaStarHalfAlt /></i></span> : <span><i><FaRegStar /></i></span> 
            }
            {
                rating >= 3 ? <span><i><FaStar /></i></span> : rating >= 2.5 ? <span><i><FaStarHalfAlt /></i></span> : <span><i><FaRegStar /></i></span> 
            }
            {
                rating >= 4 ? <span><i><FaStar /></i></span> : rating >= 3.5 ? <span><i><FaStarHalfAlt /></i></span> : <span><i><FaRegStar /></i></span> 
            }
            {
                rating >= 5 ? <span><i><FaStar /></i></span> : rating >= 4.5 ? <span><i><FaStarHalfAlt /></i></span> : <span><i><FaRegStar /></i></span> 
            }
            <span>{`${numReviews} reviews`}</span>
        </div>
    )
}

export default Rating;

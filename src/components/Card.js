import { useState } from "react";


function Card({id ,image ,info , price ,name , removeTour}) {

    const[readmore , setreadmore] =useState(false);

    const description = readmore ? info :`${info.substring(0, 200)}....`;
    function readMoreHandler(){
        setreadmore(!readmore);
    }

    

    return(
        <div className="card">

            <img src ={image } className="image" alt ="cityImage"></img>

            <div className="tour-details">
                <h4 className="tour-price">₹ {price}</h4>
                <h4 className="tour-name">{name} </h4>
            </div>

            <div className="description">
                {description}
                <span className="read-more" onClick={readMoreHandler}>
                    {readmore ? `Show less` : `Read more`}
                </span>
            </div>

            <button onClick={() => removeTour(id)} className="btn-red">Not Interested</button>


        </div>


    );


}

export default Card;
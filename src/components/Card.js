import React from 'react';
import "./Cards.css";
const Card = ({id, name, email}) => {
    return (
        <div className=' cards tc dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src= {`https://robohash.org/${id}?200x20`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;
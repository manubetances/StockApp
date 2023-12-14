import React from "react";
import "./Card.css";

// Interface that passes the data needed for a card to be created and/or showed
interface Props {
    companyName: string;
    ticker: string;
    price: number;
};

const Card : React.FC<Props> = ({ // React FC to specify a react component with its props being Props
    companyName,
    ticker, 
    price
} : Props) : JSX.Element => { // return type, in this case a react component
    return (
        <div className="card">
            {/* Show the stock Icon */}
            <img 
                src=""
                alt=""
            />
            {/* Details such as name, price, description */}
            <div className="details">
                <h2>
                    {companyName} ({ticker})
                </h2>
                <p>${price}</p>
            </div>
            <p className="info">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
    )
};

export default Card;
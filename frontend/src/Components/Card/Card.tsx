import React, { SyntheticEvent } from "react";
import "./Card.css";
import { CompanySearch } from "../../company";
import AddPortfolio from "../Portfolio/AddPortfolio/AddPortfolio";

// Interface that passes the data needed for a card to be created and/or showed
interface Props {
    id: string;
    searchResult: CompanySearch;
    onPortfolioCreate: (e: SyntheticEvent) => void;
};

// React FC to specify a react component with its props being Props
const Card : React.FC<Props> = ({ id, searchResult, onPortfolioCreate } : Props) : JSX.Element => { // return type, in this case a react component
    return (
        <div className="card">
            {/* Show the stock Icon */}
            <img alt="company logo"/>
            {/* Details such as name, price, description */}
            <div className="details">
                <h2>
                    {searchResult.name} ({searchResult.symbol})
                </h2>
                <p>${searchResult.currency}</p>
            </div>
            <p className="info">
                {searchResult.exchangeShortName} - {searchResult.stockExchange}
            </p>
            <AddPortfolio 
                onPortfolioCreate={onPortfolioCreate} 
                symbol={searchResult.symbol}
            />
        </div>
    )
};

export default Card;
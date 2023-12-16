import React, { SyntheticEvent } from "react";
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
        <div 
            className="flex flex-col items-center justify-between w-full p-6 bg-slate-200 rounded-lg md:flex-row m-2"
            key={id}
            id={id}
        >
            {/* Details such as name, price, description */}
            <h2 className="font-bold text-center text-black md:text-left mr-3">
                {searchResult.name} ({searchResult.symbol})
            </h2>
            <p className="text-black mr-4">${searchResult.currency}</p>
            <p className="font-bold text-black">
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
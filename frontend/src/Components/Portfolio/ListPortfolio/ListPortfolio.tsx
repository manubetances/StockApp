import React from 'react'
import CardPortfolio from '../CardPortfolio/CardPortfolio';

interface Props {
    portfolioValues: string[];
}

const ListPortfolio = ({ portfolioValues }: Props) => {
  return (
    <>
        <h3>My Portfolio</h3>
        <ul>
            {/* Map the portfolio values to create the list of stocks saved by the user */}
            {portfolioValues && 
                portfolioValues.map((portfolioValue) => {
                    return <CardPortfolio portfolioValue={portfolioValue}/>;
                })}
        </ul>
    </>
  )
}

export default ListPortfolio;
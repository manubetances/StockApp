import React, { SyntheticEvent } from 'react'
import CardPortfolio from '../CardPortfolio/CardPortfolio';

interface Props {
    portfolioValues: string[];
    onPortfolioDelete: (e: SyntheticEvent) => void;
}

const ListPortfolio = ({ portfolioValues, onPortfolioDelete }: Props) => {
  return (
    <>
        <h3 className="mb-3 mt-3 text-3xl font-semibold text-center md:text-4xl">
            My Portfolio
        </h3>
        <div className="relative flex flex-col items-center max-w-5xl mx-auto space-y-10 px-10 mb-5 md:px-6 md:space-y-0 md:space-x-7 md:flex-row">
            <>
                {/* Map the portfolio values to create the list of stocks saved by the user 
                    And also delete any item we want */}
                {portfolioValues.length > 0 ? ( 
                    portfolioValues.map((portfolioValue) => {
                        return (
                            <CardPortfolio 
                                portfolioValue={portfolioValue} 
                                onPortfolioDelete={onPortfolioDelete}
                            />
                        );
                    })
                ) : (
                    <h3 className="mb-3 mt-3 text-xl font-semibold text-center md:text-xl">
                        Your Portfolio is empty
                    </h3>
                )}
            </>
        </div>
    </>
  )
}

export default ListPortfolio;
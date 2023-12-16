import { ChangeEvent, SyntheticEvent, useState } from 'react';
import './App.css';
import CardList from './Components/CardList/CardList';
import Search from './Components/Search/Search';
import { CompanySearch } from './company';
import { searchCompanies } from './api';
import ListPortfolio from './Components/Portfolio/ListPortfolio/ListPortfolio';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';

function App() {
    //useState is used to track data or properties in our app
    // use state works similar to a (get; set;)
    const [search, setSearch] = useState<string>("");
	const [portfolioValues, setPortfolioValues] = useState<string[]>([]);
	const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
	const [serverError, setServerError] = useState<string>("");

    //Handle change on search bar (Change values as user types them)
    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

	// Function to create portfolio
	const onPortfolioCreate = (e: any) => {
		e.preventDefault();
		// Check for duplicates, if a portfolio item value is the same as one already exists dont add it
		const exists = portfolioValues.find((value) => value === e.target[0].value);
		if(exists) return;

		// Create new array of portfolios, adding the stocks we select
		const updatedPortfolio = [...portfolioValues, e.target[0].value];
		setPortfolioValues(updatedPortfolio);
	}

	// 
	const onPortfolioDelete = (e: any) => {
		e.preventDefault();
		// Get all the values from the portfolio
		const removed = portfolioValues.filter((value) => {
			return value !== e.target[0].value;
		});
		setPortfolioValues(removed);
	}

	// Function to hanfle on click events
    const onSearchSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
		const result = await searchCompanies(search);
		// If the function returns a string show us the data returned as an error
		if(typeof result === "string") {
			setServerError(result);
		}
		// If it returns an array (what we want) set the search result to that array
		else if(Array.isArray(result.data)) {
			setSearchResult(result.data);
		}
    };

	return (
		<div className="App">
			<Navbar />

			<Search 
				onSearchSubmit={onSearchSubmit} 
				search={search} 
				handleSearchChange={handleSearchChange} 
			/>

			<ListPortfolio 
				portfolioValues={portfolioValues} 
				onPortfolioDelete={onPortfolioDelete}
			/>
			
			<CardList 
				searchResults={searchResult} 
				onPortfolioCreate={onPortfolioCreate}
			/>

			{serverError && <h1>{serverError}</h1>}
			{/*	 */}
		</div>
  	);
}

export default App;

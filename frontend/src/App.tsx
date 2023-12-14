import { ChangeEvent, SyntheticEvent, useState } from 'react';
import './App.css';
import CardList from './Components/CardList/CardList';
import Search from './Components/Search/Search';
import { CompanySearch } from './company';
import { searchCompanies } from './api';

function App() {
    //useState is used to track data or properties in our app
    // use state works similar to a (get; set;)
    const [search, setSearch] = useState<string>("");
	const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
	const [serverError, setServerError] = useState<string>("");

    //Handle change on search bar (Change values as user types them)
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        console.log(e);
    };
	// Function to hanfle on click events
    const onClick = async (e: SyntheticEvent) => {
        const result = await searchCompanies(search);
		// If the function returns a string show us the data returned as an error
		if(typeof result === "string") {
			setServerError(result);
		}
		// If it returns an array (what we want) set the search result to that array
		else if(Array.isArray(result.data)) {
			setSearchResult(result.data);
		}

		console.log(searchResult);
    };

	return (
		<div className="App">
		<Search onClick={onClick} search={search} handleChange={handleChange} />
		<CardList />
		</div>
  	);
}

export default App;

import React, { ChangeEvent, SyntheticEvent } from 'react'

interface Props {
    onSearchSubmit: (e: SyntheticEvent) => void;
    search: string | undefined;
    handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Search : React.FC<Props> = ({onSearchSubmit, search, handleSearchChange}: Props) : JSX.Element => {
    return (
        <>
            <form 
                className="form relative flex flex-col w-full p-10 space-y-4  rounded-lg md:flex-row md:space-y-0 md:space-x-3"
                onSubmit={onSearchSubmit}
            >
                <input 
                    className="flex-1 p-3 border-2 rounded-lg placeholder-black focus:outline-none hover:shadow-sm shadow-[#55BCC9]"
                    id='search-input'
                    placeholder='Search Companies'
                    value={search} 
                    onChange={handleSearchChange} 
                />
            </form>
            {/* ToDO: Add button to submit search too! */}
        </>
    )
}

export default Search;
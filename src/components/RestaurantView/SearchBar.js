import "./SearchBar.css"

const SearchBar = ({ }) => {
    return (
        <div id = "SB-searchbar">
            <div id="SB-bar"> 
                <input type="search" id="SB-query" name="q" placeholder="Search for a restaurant..." />
                <button id = "SB-button">Search</button>
            </div>
        </div>
    )
}

export default SearchBar




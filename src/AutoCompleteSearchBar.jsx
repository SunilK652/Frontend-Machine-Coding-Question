import { useEffect, useState } from "react";

const AutoCompleteSearchBar = () => {
    const [searchData, setSearchData] = useState('');
    const [result, setResult] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [cache, setCache] = useState({});

    const fetchData = async () => {
        if (cache[searchData]) {
            setResult(cache[searchData]);
        }
        const data = await fetch('https://dummyjson.com/recipes/search?q=' + searchData);
        const json = await data.json();
        setResult(json?.recipes);
        setCache((prev => ({ ...prev, [searchData]: json?.recipes })))
    }

    useEffect(() => {
        const timer = setTimeout(fetchData, 300);

        return () => {
            clearTimeout(timer);
        }
    }, [searchData]);
    return (
        <div>AutoComplete Search Bar
            <div>
                <input
                    type="text"
                    className="search-input"
                    value={searchData}
                    onChange={(e) => setSearchData(e.target.value)}
                    onFocus={() => setShowResult(true)}
                    onBlur={() => setShowResult(false)}
                    />
            </div>
            {showResult &&(
            <div className="result-container">
            {result.map((r) => (<span key={r.id} className="result">{r.name}</span>))}
            </div>
            )}
        </div>
    );
}

export default AutoCompleteSearchBar;
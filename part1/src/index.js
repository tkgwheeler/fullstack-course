import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

const Filter = ({ list, search }) => {
  const listFilter = list.filter(country =>
    country.name.toLowerCase().includes(search.toLowerCase())
  );

  if (listFilter.length > 10)
    return <p>Too many matches, please refine your search</p>;
  else if (listFilter.length > 1 && listFilter.length < 10) {
    let results = listFilter.map(country => (
      <p key={country.name}>{country.name}</p>
    ));
    return <p>{results}</p>;
  } else {
    let results = listFilter.map(country => (
      <div>
        <h1>{country.name}</h1>
        <p>Capital: {country.capital}</p>
        <p>Population: {country.population}</p>
        <h2>Languages</h2>
        <ul>
          {country.languages.map(language => (
            <li>{language.name}</li>
          ))}
        </ul>
        <img src={country.flag} style={{ height: "75px" }} />
      </div>
    ));
    return <p>{results}</p>;
  }
};

const Search = ({ term, set }) => {
  const handleChange = event => {
    set(event.target.value);
  };
  return (
    <div>
      <input value={term} onChange={handleChange} />
    </div>
  );
};

const App = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then(response => {
      setCountries(response.data);
    });
  }, []);
  return (
    <div>
      <Search term={search} set={setSearch} />
      <Filter list={countries} search={search} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

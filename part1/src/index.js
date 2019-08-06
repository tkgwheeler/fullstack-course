import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

const Countries = ({ list }) => {
  if (list.length > 1) {
    let result = list.map(country => (
      <CountryStats key={country.name} country={country} />
    ));
    return <>{result}</>;
  } else {
    let result = list.map(country => (
      <CountryStats key={country.name} country={country} singleResult={true} />
    ));
    return <>{result}</>;
  }
};

const CountryStats = ({ country, singleResult }) => {
  const [stats, setStats] = useState("");
  const handleClick = event => {
    setStats(
      <div>
        <h1>{country.name}</h1>
        <p>Capital: {country.capital}</p>
        <p>Population: {country.population}</p>
        <h2>Languages</h2>
        <ul>
          {country.languages.map(language => (
            <li key={language.name}>{language.name}</li>
          ))}
        </ul>
        <img src={country.flag} style={{ height: "75px" }} />
      </div>
    );
  };
  if (singleResult)
    return (
      <div>
        <h1>{country.name}</h1>
        <p>Capital: {country.capital}</p>
        <p>Population: {country.population}</p>
        <h2>Languages</h2>
        <ul>
          {country.languages.map(language => (
            <li key={language.name}>{language.name}</li>
          ))}
        </ul>
        <img src={country.flag} style={{ height: "75px" }} />
      </div>
    );
  else
    return (
      <div>
        <p>{country.name}</p>
        <button onClick={handleClick}>Show</button>
        {stats}
      </div>
    );
};

const Filter = ({ list, search }) => {
  const listFilter = list.filter(country =>
    country.name.toLowerCase().includes(search.toLowerCase())
  );

  if (listFilter.length > 10)
    return <p>Too many matches, please refine your search</p>;
  else return <Countries list={listFilter} />;
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

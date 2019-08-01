import React, { useState } from "react";
import ReactDOM from "react-dom";

const Contacts = ({ persons, filter }) => {
  const rowsToShow = persons.filter(person =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );
  const rows = rowsToShow.map(person => (
    <Contact key={person.id} name={person.name} number={person.number} />
  ));
  return <div>{rows}</div>;
};
const Contact = ({ name, number }) => {
  return (
    <>
      <p>
        {name} : {number}
      </p>
    </>
  );
};

const Filter = ({ term, change }) => {
  const handleFilterChange = event => {
    change(event.target.value);
  };
  return (
    <div>
      Filter contact: <input value={term} onChange={handleFilterChange} />
    </div>
  );
};

const App = () => {
  const [persons, setPersons] = useState(dummyList);
  const [newName, setNewName] = useState("Andy");
  const [newNumber, setNewNumber] = useState("555-555-555");
  const [filter, setFilter] = useState("");
  console.log("filter:", filter);

  const addPerson = event => {
    event.preventDefault();
    const personObject = {
      name: newName,
      id: persons.length + 1,
      number: newNumber
    };
    if (persons.findIndex(item => item.name === personObject.name) === -1) {
      setPersons(persons.concat(personObject));
      setNewName("");
    } else {
      alert(`${personObject.name} already exists in the phonebook.`);
    }
  };

  const handleNameChange = event => {
    setNewName(event.target.value);
  };

  const handleNumberChange = event => {
    setNewNumber(event.target.value);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter term={filter} change={setFilter} />
      <h2>Add a new contact</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      ...
      <Contacts persons={persons} filter={filter} />
    </div>
  );
};

const dummyList = [
  {
    name: "Ally",
    id: 1,
    number: "555-555-123"
  },
  {
    name: "Barry",
    id: 2,
    number: "535-525-123"
  },
  {
    name: "Sally",
    id: 3,
    number: "555-555-191"
  },
  {
    name: "Garry",
    id: 4,
    number: "555-222-123"
  }
];

ReactDOM.render(<App />, document.getElementById("root"));

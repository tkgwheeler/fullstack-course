import React, { useState } from "react";
import ReactDOM from "react-dom";

const Contacts = ({ persons }) =>
  persons.map(person => (
    <Contact key={person.id} name={person.name} number={person.number} />
  ));

const Contact = ({ name, number }) => {
  return (
    <>
      <p>
        {name} : {number}
      </p>
    </>
  );
};

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", id: "1", number: "555-555-123" }
  ]);
  const [newName, setNewName] = useState("Andy");
  const [newNumber, setNewNumber] = useState("555-555-555");

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
      <h2>Phonebook</h2>
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
      <Contacts persons={persons} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

import React, { useState } from "react";
import ReactDOM from "react-dom";
import Contacts from "./components/phonebook/contacts";
import Filter from "./components/phonebook/filter";
import Form from "./components/phonebook/form";

const App = () => {
  const [persons, setPersons] = useState(dummyList);
  const [newName, setNewName] = useState("Andy");
  const [newNumber, setNewNumber] = useState("555-555-555");
  const [filter, setFilter] = useState("");

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
      <Form
        newName={newName}
        persons={persons}
        setPersons={setPersons}
        setNewName={setNewName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />
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

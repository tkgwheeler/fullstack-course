import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Contacts from "./components/phonebook/contacts";
import Filter from "./components/phonebook/filter";
import Form from "./components/phonebook/form";
import axios from "axios";
import contactService from "../src/services/phonenumbers";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("Andy");
  const [newNumber, setNewNumber] = useState("555-555-555");
  const [filter, setFilter] = useState("");

  const handleNameChange = event => {
    setNewName(event.target.value);
  };

  const handleNumberChange = event => {
    setNewNumber(event.target.value);
  };

  useEffect(() => {
    contactService.getAll().then(initialContacts => {
      setPersons(initialContacts);
    });
  }, []);

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
      <Contacts persons={persons} filter={filter} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

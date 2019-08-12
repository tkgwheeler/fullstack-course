import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "../src/index.css";
import Contacts from "./components/phonebook/contacts";
import Filter from "./components/phonebook/filter";
import Form from "./components/phonebook/form";
import Notification from "./components/phonebook/notification";
import axios from "axios";
import contactService from "../src/services/phonenumbers";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("Andy");
  const [newNumber, setNewNumber] = useState("555-555-555");
  const [filter, setFilter] = useState("");
  const [message, setMessage] = useState(null);

  const handleNameChange = event => {
    setNewName(event.target.value);
  };

  const handleNumberChange = event => {
    setNewNumber(event.target.value);
  };

  const handleRemovePerson = id => {
    setPersons(persons.filter(person => person.id !== id));
  };

  useEffect(() => {
    contactService.getAll().then(initialContacts => {
      setPersons(initialContacts);
    });
  }, []);

  return (
    <div>
      <Notification message={message} />
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
        setMessage={setMessage}
      />
      <h2>Numbers</h2>
      <Contacts
        persons={persons}
        filter={filter}
        removePerson={handleRemovePerson}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

import React, { useState } from "react";
import Axios from "axios";

const Form = props => {
  const {
    newName,
    persons,
    setPersons,
    setNewName,
    newNumber,
    handleNameChange,
    handleNumberChange
  } = props;
  const addPerson = event => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber
    };
    if (persons.findIndex(item => item.name === personObject.name) === -1) {
      Axios.post("http://localhost:3001/persons", personObject).then(
        response => {
          setPersons(persons.concat(response.data));
          setNewName("");
        }
      );
    } else {
      alert(`${personObject.name} already exists in the phonebook.`);
    }
  };

  return (
    <form onSubmit={addPerson}>
      <div>
        name: <input value={newName} onChange={handleNameChange} />
        number: <input value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default Form;

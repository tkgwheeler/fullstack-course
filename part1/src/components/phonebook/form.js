import React, { useState } from "react";

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

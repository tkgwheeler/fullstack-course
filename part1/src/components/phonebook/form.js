import React, { useState } from "react";
import Axios from "axios";
import contactService from "../../services/phonenumbers";

const Form = props => {
  const {
    newName,
    persons,
    setPersons,
    setNewName,
    newNumber,
    handleNameChange,
    handleNumberChange,
    setMessage
  } = props;
  const addPerson = event => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber
    };
    // Check for the name in the server. If it exists update it, otherwise add new entry
    if (persons.findIndex(item => item.name === personObject.name) === -1) {
      contactService.create(personObject).then(returnedContact => {
        setPersons(persons.concat(returnedContact));
        setNewName("");
        setMessage(`${personObject.name} was added`);
        setTimeout(() => {
          setMessage(null);
        }, 5000);
      });
    } else if (
      window.confirm(
        `${
          personObject.name
        } already exists. Would you like to update their number?`
      )
    ) {
      const personToUpdateId =
        persons[persons.findIndex(item => item.name === personObject.name)].id;

      contactService
        .update(personToUpdateId, personObject)
        .then(updatedPerson => {
          setPersons(
            persons.map(person =>
              person.id !== updatedPerson.id ? person : updatedPerson
            )
          );
        })
        .catch(error => {
          setMessage(`Error when updating ${personObject.name} entry`);
        });
      setMessage(
        `${personObject.name}'s number was updated to ${personObject.number}`
      );
      setTimeout(() => {
        setMessage(null);
      }, 5000);
    }
  };

  return (
    <form onSubmit={addPerson}>
      <div>
        name: <input value={newName} onChange={handleNameChange} />
        number: <input value={newNumber} onChange={handleNumberChange} />
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default Form;

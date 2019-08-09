import React, { useState } from "react";
import Contact from "./contact";

const Contacts = ({ persons, filter, removePerson }) => {
  const rowsToShow = persons.filter(person =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );
  const rows = rowsToShow.map(person => (
    <Contact
      key={person.id}
      name={person.name}
      number={person.number}
      id={person.id}
      removePerson={removePerson}
    />
  ));
  return <div>{rows}</div>;
};

export default Contacts;

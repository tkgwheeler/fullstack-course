import React, { useState } from "react";
import Contact from "./contact";

const Contacts = ({ persons, filter }) => {
  const rowsToShow = persons.filter(person =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );
  const rows = rowsToShow.map(person => (
    <Contact key={person.id} name={person.name} number={person.number} />
  ));
  return <div>{rows}</div>;
};

export default Contacts;

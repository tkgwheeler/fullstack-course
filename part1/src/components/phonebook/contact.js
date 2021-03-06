import React from "react";
import contactService from "../../services/phonenumbers";

const Contact = ({ name, number, id, removePerson }) => {
  const handleDelete = id => {
    contactService.remove(id);
    removePerson(id);
  };

  return (
    <div>
      <p>
        {name} : {number}
      </p>
      <button onClick={() => handleDelete(id)}>Delete</button>
    </div>
  );
};

export default Contact;

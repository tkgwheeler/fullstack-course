import React, { useState } from "react";

const Contact = ({ name, number }) => {
  return (
    <>
      <p>
        {name} : {number}
      </p>
    </>
  );
};

export default Contact;

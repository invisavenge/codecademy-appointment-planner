import React from "react";

export const ContactPicker = ({contacts, contact, setContact}) => {
  return (
    <>
      <label htmlFor="contacts">Select a Contact:
        <select name="contacts" id="contacts">
          <option value="">No Contact Selected</option>
          {contacts && contacts.map((contact, index) => {
            return <option value={contact}>{contact}</option>;
          })}
        </select>
      </label>
    </>
  );
};

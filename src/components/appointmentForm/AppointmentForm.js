import React from "react";

import { ContactPicker } from '../contactPicker/ContactPicker';

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  name,
  setName,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>

        <ContactPicker
          contacts={contacts}
          contact={contact}
          setContact={setContact}
        />

        <label htmlFor="date">Date:
          <input
            type="date"
            name="date"
            id="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
        </label>

        <label htmlFor="time">Time:
          <input
            type="time"
            name="time"
            id="time"
            value={time}
            onChange={(event) => setTime(event.target.value)}
            min={getTodayString}
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

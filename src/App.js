import React, { useState } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

const App = () => {
  /*
    Define state variables for 
    contacts and appointments 
  */
  const [appointments, setAppointments] = useState([]);
  const [contacts, setContacts] = useState([]);

  /*
    Implement functions to add data to
    contacts and appointments
  */
  const addAppointment = appointment => {
    const { name, contact, date, time } = appointment;

    if (!name || !contact || !date || !time) {
      return;
    }

    setAppointments(prevAppointmentsArray => {
      return [...prevAppointmentsArray, appointment];
    });
  };

  const addContact = contact => {
    const { name, phoneNumber, email } = contact;

    if (!name || !phoneNumber || !email) {
      return;
    }

    setContacts(prevContactsArray => {
      return [...prevContactsArray, contact];
    });
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={ <Root /> }>
        <Route
          index
          element={ <Navigate to={ROUTES.CONTACTS} replace /> }
        />

        <Route
          path={ROUTES.APPOINTMENTS}
          element={ <AppointmentsPage appointments={appointments} addAppointment={addAppointment} /> }
        />

        <Route
          path={ROUTES.CONTACTS}
          element={ <ContactsPage contacts={contacts} addContact={addContact} /> }
        />
      </Route>
    )
  );

  return (
    <RouterProvider router={router}/>
  );
}

export default App;

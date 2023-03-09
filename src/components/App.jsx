import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';

// import {
//   fetchAllContacts,
//   fetchAddContact,
//   fetchDeleteContact,
// } from '.././redux/contacts/contacts-operations';
// import { setFilter } from '../redux/filter/filter-slice';

// import { getFilteredContacts } from '../redux/contacts/contacts-selectors';
// import { getFilter } from '../redux/filter/filter-selectors';

import StartPage from 'pages/StartPage/StartPage';
import PhoneBookPage from 'pages/PhoneBookPage/PhoneBookPage';
import RegisterPage from 'pages/RegisterPage/Registerpage';
import LoginPage from 'pages/LoginPage/LoginPage';

import UserMenu from './UserMenu/UserMenu';
// import PhoneBook from './PhoneBook/PhoneBook';
// import ContactList from './ContactList/ContactList';
// import Filter from './Filter/Filter';
// import ContactForm from './ContactForm/ContactForm';

// import css from './ContactForm/contact-form.module.css';

export const App = () => {
  // const filteredContacts = useSelector(getFilteredContacts);

  // const filter = useSelector(getFilter);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchAllContacts());
  // }, [dispatch]);

  // const handleAddContact = ({ name, number }) => {
  //   dispatch(fetchAddContact({ name, number }));
  // };

  // const handleRemoveContact = id => {
  //   dispatch(fetchDeleteContact(id));
  // };

  // const handleFilter = ({ target }) => dispatch(setFilter(target.value));

  // const isContacts = Boolean(filteredContacts.length);

  return (
    <>
      <BrowserRouter>
        <UserMenu />
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/phonebook" element={<PhoneBookPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        {/* <PhoneBook /> */}
        {/* <div className={css.wrapper}>
          <h2 className={css.title}>Phonebook</h2>
          <ContactForm onSubmit={handleAddContact} />
        </div>
        <div className={css.wrapper}>
          <h2 className={css.title}>Contacts</h2>
          <Filter value={filter} handleChange={handleFilter} />
          {isContacts && (
            <ContactList
              removeContact={handleRemoveContact}
              contacts={filteredContacts}
            />
          )}
          {!isContacts && <p className={css.message}>No contacts in list</p>}
        </div> */}
      </BrowserRouter>
    </>
  );
};

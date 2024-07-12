import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectContactsError,
  selectContactsIsLoading,
} from '../redux/contacts/contacts.selectors';
import {
  addContactThunk,
  deleteContactThunk,
  fetchContactsThunk,
} from '../redux/contacts/contacts.reducer';
import Loader from 'components/Loader/Loader';

const ContactsPage = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectContactsIsLoading);
  const error = useSelector(selectContactsError);

  const formRef = useRef(null);

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  const onAddContact = event => {
    event.preventDefault();

    const name = event.currentTarget.elements.contactName.value;
    const number = event.currentTarget.elements.contactNumber.value;

    const formData = {
      name,
      number,
    };
    dispatch(addContactThunk(formData))
      .unwrap()
      .then(() => formRef.current.reset());
  };

  const onDeleteContact = contactId => {
    dispatch(deleteContactThunk(contactId));
    // console.log('contactId:', contactId);
  };

  const showContacts = Array.isArray(contacts) && contacts.length > 0;

  return (
    <div>
      <form ref={formRef} onSubmit={onAddContact}>
        <h2>Add New Contact</h2>
        <label>
          <p>Name:</p>
          <input
            type="text"
            placeholder="Jacob Mercer"
            required
            name="contactName"
          />
        </label>

        <label>
          <p>Number:</p>
          <input
            type="text"
            placeholder="761-23-96"
            required
            name="contactNumber"
            minLength={3}
          />
        </label>
        <br />
        <button type="submit">Add</button>
      </form>
      {error !== null && <p className="error-bage">{error}</p>}
      {isLoading && <Loader />}
      <ul>
        {showContacts &&
          contacts.map(({ id, name, number }) => (
            <li key={id}>
              <h3>
                <span>{name}</span>
                <button
                  disabled={isLoading}
                  onClick={() => onDeleteContact(id)}
                >
                  🤞
                </button>
              </h3>
              <p>{number}</p>
            </li>
          ))}
        {/* {showContacts &&
          contacts.map((id, name, number) => {
            return (
              <li key={id}>
                <h3>
                  <span>{name}</span>
                  <button>🤞</button>
                </h3>
                <p>{number}</p>
              </li>
            );
          })} */}
      </ul>
    </div>
  );
};

export default ContactsPage;

import React from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { StyledContactForm } from './StyledContactForm';
import { addContact } from '../../redux/contactsSlice';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;

    dispatch(
      addContact({
        id: nanoid(),
        name: form.name.value,
        number: form.number.value,
      })
    );
    form.reset();
  };

  return (
    <StyledContactForm>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          <span>Name</span>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          <span>Number</span>
          <input
            type="text"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    </StyledContactForm>
  );
};

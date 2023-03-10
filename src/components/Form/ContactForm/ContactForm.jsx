import { useSelector, useDispatch } from 'react-redux';

import { selectContacts } from 'redux/contacts/contacts-selectors';
import { addContacts } from 'redux/contacts/contacts-operations';
import { addContactsWarning } from 'components/Toastify/Toastify';

import { Form, Title, TextFieldStyled, Button, IconBtn } from './ContactForm.styled';

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const number = event.target.elements.number.value;

    const isIncludesName = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (!isIncludesName) {
      dispatch(addContacts({ name, number }));
      event.target.reset();
    } else {
      addContactsWarning(name);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>Add your contacts</Title>
      <TextFieldStyled id="name" type="text" label="Name" autoFocus required fullWidth />
      <TextFieldStyled id="number" type="tel" label="Number" required fullWidth />

      <Button type="submit">
        Add contact
        <IconBtn />
      </Button>
    </Form>
  );
};

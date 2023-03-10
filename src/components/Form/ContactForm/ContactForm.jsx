import { useSelector, useDispatch } from 'react-redux';

import { selectContacts } from 'redux/contacts/contacts-selectors';
import { addContacts } from 'redux/contacts/contacts-operations';

import { Form, Title, TextFieldStyled, Button, IconBtn } from './ContactForm.styled';

export const ContactForm = () => {
  const state = useSelector(state => state);
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
      alert(`${name} is already in contacts`);
    }
    console.log(state);
    console.log(contacts);
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

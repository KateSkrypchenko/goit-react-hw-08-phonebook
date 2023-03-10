import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchContacts } from 'redux/contacts/contacts-operations';
import { selectContacts, selectIsLoading, selectError } from 'redux/contacts/contacts-selectors';

import { Wrapper, Title, Caption } from './Contacts.styled';

import { ContactForm } from 'components/Form/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import { ContactList } from 'components/ContactList/ContactList';

const Contacts = () => {
  const dispatch = useDispatch();
  const contactsItems = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Wrapper>
      <Title>Phonebook</Title>

      <ContactForm />

      <Caption>Contacts</Caption>
      {contactsItems.length > 0 && <Filter />}
      {isLoading && !error && <Loader />}
      {contactsItems.length > 0 && <ContactList />}
    </Wrapper>
  );
};

export default Contacts;

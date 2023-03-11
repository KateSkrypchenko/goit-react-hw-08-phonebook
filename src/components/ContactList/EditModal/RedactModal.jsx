import PropTypes from 'prop-types';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { redactContacts } from 'redux/contacts/contacts-operations';
import { selectContacts } from 'redux/contacts/contacts-selectors';

import {
  redactContactsWarning,
  redactContactsSuccess,
  redactContactsError,
  serverError,
} from 'components/Toastify/Toastify';

import {
  BoxStyled,
  Form,
  ButtonClose,
  IconBtnClose,
  Title,
  TextFieldStyled,
  ButtonSubmit,
  IconBtn,
} from './RedactModal.styled';
import { Modal } from '@mui/material';

export const RedactModal = ({ isOpenModal, handleCloseModal, id, name, number }) => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const [redactName, setRedactName] = useState(name);
  const [redactNumber, setRedactNumber] = useState(number);

  const handleSubmit = async event => {
    event.preventDefault();
    const nameForm = event.target.elements.name.value;
    const numberForm = event.target.elements.number.value;
    const isIncludesName = contacts.some(
      contact => contact.name.toLowerCase() === nameForm.toLowerCase()
    );
    if (name === nameForm && number === numberForm) {
      redactContactsWarning();
    } else if (isIncludesName) {
      redactContactsError(nameForm);
    } else {
      const result = await dispatch(redactContacts({ id, name: nameForm, number: numberForm }));
      if (result.error) {
        serverError();
      } else {
        handleCloseModal();
        redactContactsSuccess();
      }
    }
  };

  const handleInputChange = event => {
    if (event.target.id === 'name') {
      setRedactName(event.target.value);
    } else if (event.target.id === 'number') {
      setRedactNumber(event.target.value);
    }
  };

  return (
    <Modal
      open={isOpenModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <BoxStyled>
        <Form onSubmit={handleSubmit}>
          <ButtonClose type="button" onClick={handleCloseModal}>
            <IconBtnClose />
          </ButtonClose>
          <Title>Redact your contact</Title>

          <TextFieldStyled
            id="name"
            type="text"
            label="Name"
            value={redactName}
            onChange={handleInputChange}
            autoFocus
            fullWidth
          />
          <TextFieldStyled
            id="number"
            type="tel"
            label="Number"
            value={redactNumber}
            onChange={handleInputChange}
            fullWidth
          />

          <ButtonSubmit type="submit">
            Redact
            <IconBtn />
          </ButtonSubmit>
        </Form>
      </BoxStyled>
    </Modal>
  );
};

RedactModal.propTypes = {
  isOpenModal: PropTypes.bool.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { redactContacts } from 'redux/contacts/contacts-operations';

import {
  redactContactsWarning,
  redactContactsSuccess,
  serverError,
} from 'components/Toastify/Toastify';

import { BoxStyled, Form, Title, TextFieldStyled, Button, IconBtn } from './RedactModal.styled';
import { Modal } from '@mui/material';

export const RedactModal = ({ isOpenModal, handleCloseModal, id, name, number }) => {
  const dispatch = useDispatch();

  const [redactName, setRedactName] = useState(name);
  const [redactNumber, setRedactNumber] = useState(number);

  const handleSubmit = event => {
    event.preventDefault();
    const nameForm = event.target.elements.name.value;
    const numberForm = event.target.elements.number.value;
    if (name === nameForm && number === numberForm) {
      redactContactsWarning();
    } else {
      dispatch(redactContacts({ id, name: nameForm, number: numberForm }))
        .then(() => {
          handleCloseModal();
          redactContactsSuccess();
        })
        .catch(() => {
          serverError();
        });
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
      onClose={handleCloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <BoxStyled>
        <Form onSubmit={handleSubmit}>
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

          <Button type="submit">
            Redact
            <IconBtn />
          </Button>
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

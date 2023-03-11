import PropTypes from 'prop-types';
import { BsTelephone } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { BsFillPencilFill } from 'react-icons/bs';

import { RedactModal } from '../EditModal/RedactModal';
import { deleteContacts } from 'redux/contacts/contacts-operations';

import { serverError, deleteContactsSuccess } from 'components/Toastify/Toastify';

import { Items, Link, ButtonRedact, ButtonDelete } from './ContactListItem.styled';

export const ContactListItem = ({ id, name, number }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const dispatch = useDispatch();

  const handleOpenModal = () => setIsOpenModal(true);
  const handleCloseModal = () => setIsOpenModal(false);
  const handleDelete = async () => {
    const result = await dispatch(deleteContacts(id));
    if (result.error) {
      serverError();
    } else {
      deleteContactsSuccess(name);
    }
  };

  return (
    <>
      <Items>
        <Link href="tel:{number}">
          <BsTelephone />
        </Link>
        <p>
          {name}: {number}
        </p>
        <div>
          <ButtonRedact type="button" onClick={handleOpenModal}>
            <BsFillPencilFill />
          </ButtonRedact>
          <ButtonDelete type="button" onClick={handleDelete}>
            Delete
          </ButtonDelete>
        </div>
      </Items>
      {isOpenModal && (
        <RedactModal
          isOpenModal={isOpenModal}
          handleCloseModal={handleCloseModal}
          id={id}
          name={name}
          number={number}
        />
      )}
    </>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

import PropTypes from "prop-types";

import { Delete, Edit, ListItem } from "./ContactListItem.styled";

import { ModalForm } from "components/ModalForm/ModalForm";
import Modal from "components/Modal/Modal";

import { useState } from "react";

import {
  useUpdateContactMutation,
  useDeleteContactMutation,
} from "../../redux/contactsSlice";

export const ContactListItem = ({ id, name, number }) => {
  const [modalActive, setModalActive] = useState(false);

  const [deleteContact] = useDeleteContactMutation();

  const [updateContact] = useUpdateContactMutation();

  const handleUpdateContact = async (e) => {
    e.preventDefault();
    const form = e.target;

    const formData = new FormData(form);

    const { name, number } = Object.fromEntries(formData.entries());
    try {
      await updateContact({
        id,
        name,
        number,
      });
      form.reset();
      setModalActive(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <ListItem>
        {name} : {number}
        <div>
          <Delete type="button" onClick={() => deleteContact(id)} />
          <Edit type="button" onClick={() => setModalActive(true)} />
        </div>
        <Modal active={modalActive} setActive={setModalActive}>
          <ModalForm
            onSubmit={handleUpdateContact}
            name={name}
            number={number}
            btnName={"Edit contact"}
          />
        </Modal>
      </ListItem>
    </>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

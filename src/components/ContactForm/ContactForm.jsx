import { useState } from "react";

import { ModalForm } from "components/ModalForm/ModalForm";
import Modal from "components/Modal/Modal";

import {
  useAddContactMutation,
  useGetContactsQuery,
} from "../../redux/contactsSlice";
import { ButtonAdd } from "components/ButtonAdd/ButtonAdd";

export const ContactForm = () => {
  const [modalActive, setModalActive] = useState(false);

  const { data: contacts = [] } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();

  const handleAddContact = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { name, number } = Object.fromEntries(formData.entries());
    try {
      contacts.some((contact) => contact.name === name.trim(""))
        ? alert(`${name} is already in your contacts`)
        : await addContact({
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
      <Modal active={modalActive} setActive={setModalActive}>
        <ModalForm
          onSubmit={handleAddContact}
          name={""}
          number={""}
          btnName={"Add contact"}
        />
      </Modal>
      <ButtonAdd openModal={() => setModalActive(true)} />
    </>
  );
};

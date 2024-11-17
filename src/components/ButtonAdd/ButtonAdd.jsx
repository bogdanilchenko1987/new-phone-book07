import { Button } from "components/ContactForm/ContactForm.styled";

export const ButtonAdd = ({ openModal }) => {
  return (
    <Button style={{ height: "60px" }} type="button" onClick={openModal}>
      ➕ Add Contact
    </Button>
  );
};

import { Button, Form, Input, Label } from "../ContactForm/ContactForm.styled";

export const ModalForm = ({ onSubmit, name, number, btnName }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Label>
        <b>Name:</b>
        <Input type="text" name="name" required defaultValue={name} />
      </Label>
      <Label>
        <b>Number:</b>
        <Input type="tel" name="number" required defaultValue={number} />
      </Label>
      <Button type="submit">
        <b>{btnName}</b>
      </Button>
    </Form>
  );
};

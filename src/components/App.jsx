import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { ContactsFilter } from "./ContactsFilter/ContactsFilter";
import { ContactsSection } from "./Section/Section";

export const App = () => {
  return (
    <>
      <ContactsSection title="Phonebook">
        <ContactForm />
      </ContactsSection>
      <ContactsSection title="Contacts">
        <ContactsFilter />
        <ContactList />
      </ContactsSection>
    </>
  );
};

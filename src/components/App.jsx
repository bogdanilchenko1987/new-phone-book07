import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { ContactsFilter } from "./ContactsFilter/ContactsFilter";
import { ContactsSection } from "./Section/Section";
import { Section } from "./Section/Section.styled";

export const App = () => {
  return (
    <Section>
      <ContactsSection>
        <ContactForm />
      </ContactsSection>
      <ContactsSection>
        <ContactsFilter />
        <ContactList />
      </ContactsSection>
    </Section>
  );
};

import { ContactListItem } from "components/ContactListItem/ContactListItem";
import { ErrorText, List } from "./ContactList.styled";

import { useGetContactsQuery } from "../../redux/contactsSlice";

import { useSelector } from "react-redux";

import { ThreeCircles } from "react-loader-spinner";

export const ContactList = () => {
  const filter = useSelector((state) => state.filter);

  const { data: contacts = [], isLoading, error } = useGetContactsQuery();

  const filteredContacts = () => {
    const FilterlowerCase = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(FilterlowerCase)
    );
  };

  return (
    <>
      {isLoading && (
        <ThreeCircles
          visible={true}
          height="40"
          width="40"
          color="blue"
          ariaLabel="three-circles-loading"
        />
      )}
      {error && <ErrorText>{error}</ErrorText>}

      {filteredContacts().length > 0 && (
        <List>
          {filteredContacts().map(({ id, name, number }) => {
            return (
              <ContactListItem key={id} id={id} name={name} number={number} />
            );
          })}
        </List>
      )}
    </>
  );
};

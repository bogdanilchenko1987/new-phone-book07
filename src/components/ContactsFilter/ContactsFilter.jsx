import { useSelector, useDispatch } from "react-redux";
import { filterContacts } from "../../redux/filterSlice";

import { Label, Input, Text } from "./ContactsFilter.styled";

export const ContactsFilter = () => {
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const changeFilter = ({ currentTarget: { value } }) => {
    dispatch(filterContacts(value));
  };

  return (
    <>
      <Label htmlFor="filter">
        <Text>Find contacts:</Text>
        <Input
          type="text"
          placeholder="Enter contact name"
          name="filter"
          value={filter}
          onChange={changeFilter}
        />
      </Label>
    </>
  );
};

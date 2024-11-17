import { useSelector, useDispatch } from "react-redux";
import { filterContacts } from "../../redux/filterSlice";

import { Label, Input } from "./ContactsFilter.styled";

export const ContactsFilter = () => {
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const changeFilter = ({ currentTarget: { value } }) => {
    dispatch(filterContacts(value));
  };

  return (
    <>
      <Label htmlFor="filter">
        <b>Find contacts:</b>
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

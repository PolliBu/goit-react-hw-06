import css from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setContactsFilter } from '../../redux/filtersSlice';
import { getContactsFilter } from '../../redux/selectors';

export const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getContactsFilter);

  const handleChangeFilter = ({ currentTarget: { value } }) => {
    const normalizedValue = value.toLowerCase().trim();
    dispatch(setContactsFilter(normalizedValue));
  };

  // const value = useSelector(state => state.filters);

  return (
    <div>
      <p className={css.item}>Find contacts by name</p>
      <input
        name="filter"
        className={css.searchBox}
        type="text"
        value={filter}
        onChange={handleChangeFilter}
        placeholder="Name"
      />
    </div>
  );
};
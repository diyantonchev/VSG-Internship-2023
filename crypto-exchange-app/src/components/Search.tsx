import { useState, ChangeEvent, KeyboardEvent } from 'react';
import { useDispatch } from 'react-redux';
import {
  Form,
  InputGroup,
  FormControl,
  Button
} from 'react-bootstrap'

// import { setCryptocurrencyPair } from './redux/actions';
import { setCryptocurrencyPair } from '../redux/reducers';

const Search = () => {
  const [cryptoPair, setCryptoPair] = useState<string>('');
  const dispatch = useDispatch();

  const onSearchTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCryptoPair(e?.currentTarget.value);
  }

  const onSearch = () => {
    dispatch(setCryptocurrencyPair(cryptoPair.toUpperCase()));
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onSearch();
    }
  }

  return (
    <Form>
      <InputGroup>
        <FormControl
          type='search'
          placeholder='Search cryptocurrency pair (e.g. BTC/USD)'
          onChange={onSearchTextChange}
          onKeyDown={handleKeyDown}
        />
        <Button
          variant='primary'
          id='search-btn'
          disabled={cryptoPair?.length < 6}
          onClick={onSearch}
        >
          Search
        </Button>
      </InputGroup>
    </Form>
  );
};

export default Search;

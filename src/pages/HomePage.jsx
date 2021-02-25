import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CharactersList from '../components/CharactersList';
import CircularProgress from '../components/CircularProgress';
import { fetchCharacters } from '../redux/characters/actions';
import {
  selectCharacters,
  selectIsLoading,
} from '../redux/characters/selectors';

const HomePage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const characters = useSelector(selectCharacters);

  React.useEffect(() => {
    dispatch(fetchCharacters());
  }, []);

  return (
    <section>
      {isLoading ? <CircularProgress /> : <CharactersList items={characters} />}
    </section>
  );
};

export default HomePage;

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CharactersList from '../components/CharactersList';
import CircularProgress from '../components/CircularProgress';
import { fetchCharacters } from '../redux/characters/actions';

const HomePage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.characters.isLoading);
  const characters = useSelector((state) => state.characters.items);

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

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import Card from '../components/Card';
import CircularProgress from '../components/CircularProgress';
import { fetchCharacterById } from '../redux/characters/actions';
import {
  selectIsLoading,
  selectSingleCharacter,
} from '../redux/characters/selectors';

const CharacterPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const character = useSelector(selectSingleCharacter);

  React.useEffect(() => {
    dispatch(fetchCharacterById(id));
  }, []);

  if (Object.keys(character).length === 0) {
    return (
      <section>
        <Link className="section__link" to="/">
          &larr; Go back
        </Link>
        <h3>There is no character...</h3>
      </section>
    );
  }

  const { name, image, species, status, origin, gender, location } = character;

  return (
    <section>
      <Link className="section__link" to="/">
        &larr; Go back
      </Link>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Card horizontal image={image} title={name}>
          <ul>
            <li>{species}</li>
            <li>{status}</li>
          </ul>
          <div>{origin.name}</div>
          <div>
            Gender: <span>{gender}</span>
          </div>
          <div>
            Last known location: <span>{location.name}</span>
          </div>
        </Card>
      )}
    </section>
  );
};

export default CharacterPage;

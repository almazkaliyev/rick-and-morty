import { Link } from 'react-router-dom';

import Card from '../Card';

const CharactersList = ({ items }) => {
  if (!items || items.length === 0) {
    return <h3>There is nothing...</h3>;
  }

  return (
    <ul className="grid-list">
      {items?.map(({ id, name, image, species, status }) => (
        <li key={id}>
          <Link className="grid-list__link" to={`/character/${id}`}>
            <Card image={image} title={name}>
              <ul>
                <li>{species}</li>
                <li>{status}</li>
              </ul>
            </Card>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CharactersList;

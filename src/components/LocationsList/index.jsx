import { Link } from 'react-router-dom';

import Card from '../Card';

const LocationsList = ({ items }) => {
  if (!items || items.length === 0) {
    return <h3>There is nothing...</h3>;
  }

  return (
    <ul className="grid-list">
      {items?.map(({ id, name, type, dimension }) => (
        <li key={id}>
          <Link className="grid-list__link" to={`/location/${id}`}>
            <Card title={name}>
              <ul>
                <li>{type}</li>
                <li>{dimension}</li>
              </ul>
            </Card>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default LocationsList;

/* eslint-disable camelcase */
// TODO: normalize air_date
import Card from '../Card';

const EpisodesList = ({ items }) => {
  if (!items || items.length === 0) {
    return <h3>There is nothing...</h3>;
  }

  return (
    <ul className="grid-list">
      {items?.map(({ id, name, episode, air_date }) => (
        <li key={id}>
          <Card title={name}>
            <ul>
              <li>{episode}</li>
              <li>{air_date}</li>
            </ul>
          </Card>
        </li>
      ))}
    </ul>
  );
};

export default EpisodesList;

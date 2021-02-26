import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Card from '../components/Card';
import CircularProgress from '../components/CircularProgress';
import { fetchCharacters, setPage } from '../redux/characters/actions';
import {
  selectCharacters,
  selectHasNextPage,
  selectIsLoading,
  selectPageNumber,
} from '../redux/characters/selectors';

const HomePage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const characters = useSelector(selectCharacters);
  const pageNumber = useSelector(selectPageNumber);
  const hasMore = useSelector(selectHasNextPage);

  React.useEffect(() => {
    dispatch(fetchCharacters());
  }, []);

  return (
    <section>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <InfiniteScroll
          dataLength={characters.length}
          hasMore={hasMore}
          loader={<CircularProgress />}
          next={() => dispatch(setPage(pageNumber + 1))}
        >
          <ul className="grid-list">
            {characters?.map(({ id, name, image, species, status }) => (
              <li key={id}>
                <Link className="grid-list__link" to={`/character/${id}`}>
                  <Card
                    image={image}
                    subtitle={`${species} ${status}`}
                    title={name}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </InfiniteScroll>
      )}
    </section>
  );
};

export default HomePage;

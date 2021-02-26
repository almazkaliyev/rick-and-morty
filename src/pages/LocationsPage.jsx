import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Card from '../components/Card';
import CircularProgress from '../components/CircularProgress';
import { fetchLocations, setPage } from '../redux/locations/actions';
import {
  selectHasNextPage,
  selectIsLoading,
  selectLocations,
  selectPageNumber,
} from '../redux/locations/selectors';

const LocationsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const locations = useSelector(selectLocations);
  const pageNumber = useSelector(selectPageNumber);
  const hasMore = useSelector(selectHasNextPage);

  React.useEffect(() => {
    dispatch(fetchLocations());
  }, []);

  return (
    <section>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <InfiniteScroll
          dataLength={locations.length}
          hasMore={hasMore}
          loader={<CircularProgress />}
          next={() => dispatch(setPage(pageNumber + 1))}
        >
          <ul className="grid-list">
            {locations?.map(({ id, name, type, dimension }) => (
              <li key={id}>
                <Link className="grid-list__link" to={`/location/${id}`}>
                  <Card subtitle={`${type} ${dimension}`} title={name} />
                </Link>
              </li>
            ))}
          </ul>
        </InfiniteScroll>
      )}
    </section>
  );
};

export default LocationsPage;

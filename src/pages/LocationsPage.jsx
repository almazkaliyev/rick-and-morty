import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useDispatch, useSelector } from 'react-redux';

import CircularProgress from '../components/CircularProgress';
import LocationsList from '../components/LocationsList';
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
          <LocationsList items={locations} />
        </InfiniteScroll>
      )}
    </section>
  );
};

export default LocationsPage;

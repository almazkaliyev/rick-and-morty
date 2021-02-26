/* eslint-disable camelcase */
// TODO: normalize air_date
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useDispatch, useSelector } from 'react-redux';

import Card from '../components/Card';
import CircularProgress from '../components/CircularProgress';
import { fetchEpisodes, setPage } from '../redux/episodes/actions';
import {
  selectEpisodes,
  selectHasNextPage,
  selectIsLoading,
  selectPageNumber,
} from '../redux/episodes/selectors';

const EpisodesPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const episodes = useSelector(selectEpisodes);
  const pageNumber = useSelector(selectPageNumber);
  const hasMore = useSelector(selectHasNextPage);

  React.useEffect(() => {
    dispatch(fetchEpisodes());
  }, []);

  return (
    <section>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <InfiniteScroll
          dataLength={episodes.length}
          hasMore={hasMore}
          loader={<CircularProgress />}
          next={() => dispatch(setPage(pageNumber + 1))}
        >
          <ul className="grid-list">
            {episodes?.map(({ id, name, episode, air_date }) => (
              <li key={id}>
                <Card subtitle={`${episode} ${air_date}`} title={name} />
              </li>
            ))}
          </ul>
        </InfiniteScroll>
      )}
    </section>
  );
};

export default EpisodesPage;

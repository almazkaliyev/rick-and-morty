import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useDispatch, useSelector } from 'react-redux';

import CircularProgress from '../components/CircularProgress';
import EpisodesList from '../components/EpisodesList';
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
          <EpisodesList items={episodes} />
        </InfiniteScroll>
      )}
    </section>
  );
};

export default EpisodesPage;

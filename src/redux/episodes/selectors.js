export const selectEpisodesState = (state) => state.episodes;

export const selectIsLoading = (state) => selectEpisodesState(state).isLoading;

export const selectEpisodes = (state) => selectEpisodesState(state).items;

export const selectPageNumber = (state) =>
  selectEpisodesState(state).page.number;

export const selectHasNextPage = (state) =>
  selectEpisodesState(state).page.hasNext;

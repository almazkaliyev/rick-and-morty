export const selectLocationsState = (state) => state.locations;

export const selectIsLoading = (state) => selectLocationsState(state).isLoading;

export const selectLocations = (state) => selectLocationsState(state).items;

export const selectSingleLocation = (state) =>
  selectLocationsState(state).selected;

export const selectPageNumber = (state) =>
  selectLocationsState(state).page.number;

export const selectHasNextPage = (state) =>
  selectLocationsState(state).page.hasNext;

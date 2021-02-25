export const selectCharactersState = (state) => state.characters;

export const selectIsLoading = (state) =>
  selectCharactersState(state).isLoading;

export const selectCharacters = (state) => selectCharactersState(state).items;

export const selectSingleCharacter = (state) =>
  selectCharactersState(state).selected;

export const selectPageNumber = (state) =>
  selectCharactersState(state).page.number;

export const selectHasNextPage = (state) =>
  selectCharactersState(state).page.hasNext;

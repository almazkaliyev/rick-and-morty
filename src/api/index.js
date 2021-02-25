import axios from './axios';

export const fetchCharacters = async (page = 1) => {
  try {
    const { data } = await axios.get(`/character?page=${page}`);
    return data;
  } catch (e) {
    throw new Error(e);
  }
};

export const fetchCharacterById = async (id) => {
  try {
    const { data } = await axios.get(`/character/${id}`);
    return data;
  } catch (e) {
    throw new Error(e);
  }
};

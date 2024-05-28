import { CharacterApiDto, SearchFormValue } from "../models";

const API_URL = "https://rickandmortyapi.com/api/character";

export const fetchCharacters = async (
  params: SearchFormValue,
  page = 1
): Promise<CharacterApiDto | null> => {
  try {
    const response = await fetch(
      `${API_URL}/?page=${page}&name=${params.search}&status=${params.status}`
    );
    const data = await response.json();
    if (data.error) {
      return null;
    }
    return data;
  } catch (error: any) {
    console.error(error);
    return null;
  }
};

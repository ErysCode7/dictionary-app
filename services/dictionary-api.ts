import { DictonaryResponse } from "./types";

const baseUrl = "https://api.dictionaryapi.dev/api/v2/entries/en";

export const getDefinitionServerSIde = async (
  params?: string
): Promise<DictonaryResponse[]> => {
  const response = await fetch(`${baseUrl}/keyboard`);
  const data = await response.json();
  return data;
};

import { DictonaryResponse } from "./types";

const baseUrl = "https://api.dictionaryapi.dev/api/v2/entries/en";

export const getDefinitionClientSide = async (
  params?: string
): Promise<DictonaryResponse[] | any> => {
  try {
    const response = await fetch(`${baseUrl}/${params}`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log("CLIENT SIDE ERROR ", err);
    return;
  }
};

export const getDefinitionServerSIde = async (): Promise<
  DictonaryResponse[] | any
> => {
  try {
    const response = await fetch(`${baseUrl}/keyboard`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log("SERVER SIDE ERROR ", err);
    return;
  }
};

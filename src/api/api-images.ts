import axios from "axios";
import { ImageResponse } from "./api-images.types";

axios.defaults.baseURL = "https://api.unsplash.com/";

type Key = string;

const KEY: Readonly<Key> = "BvxTRf6kgKLpXlb6BTQjjZNM7q6fHlsRcWsqnWgowb8";

export const getImages = async (
  query: string,
  page: number
): Promise<ImageResponse> => {
  const response = await axios.get<ImageResponse>(
    `/search/photos?client_id=${KEY}`,
    {
      params: {
        query,
        page,
        per_page: 12,
      },
    }
  );

  return response.data;
};

import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";
const KEY = "BvxTRf6kgKLpXlb6BTQjjZNM7q6fHlsRcWsqnWgowb8";

export const getImages = async (query, page, per_page) => {
  const response = await axios.get(`/search/photos?client_id=${KEY}`, {
    params: {
      query,
      page,
      per_page,
    },
  });

  return response.data;
};

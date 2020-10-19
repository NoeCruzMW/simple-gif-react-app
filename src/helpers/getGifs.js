import { URLS } from "../config/APIs";

export const getGifs = async (category) => {
    try {
      const url = URLS.API_GIF.format(encodeURI(category));
      const resp = await fetch(url);
      const { data } = await resp.json();
      const gifs = data.map((img) => ({
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      }));
      return gifs;
    } catch (error) {
      console.error(error);
    }
  };
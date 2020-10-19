import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });
  //Se inova solo cuando la category cambia
  useEffect(() => {
    (async function get() {
      const gifs = await getGifs(category);
      setState({ loading: false, data: gifs });
    })();
  }, [category]);

  return state;
};

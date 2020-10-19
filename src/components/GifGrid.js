import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = (props) => {
  const { loading, data: images } = useFetchGifs(props.category);

  return (
    <>
      <h1 className="animate__animated animate__bounceIn">{props.category}</h1>
      <span className="animate__animated animate__flash">{loading && "Cargando..."}</span>
      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};

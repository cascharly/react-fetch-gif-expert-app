import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
// import { GifGridItem } from "./GifGridItem";
// import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {
  // const [images, setImages] = useState([]);
  const { loading } = useFetchGifs();

  // useEffect(() => {
  //   // getGifs(category).then(imgs => setImages(imgs))  // opcion tradicional
  //      getGifs(category).then(setImages)

  // }, [category]);

  return (
    <>
      <h3>{category}</h3>
      {loading ? "Cargando..." : "Data cargada"}
      {/* <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div> */}
    </>
  );
};
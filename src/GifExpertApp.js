import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = ({ defaultCategories = [] }) => {
  // const [categories, setCategories] = useState(["One Punch"]);
  const [categories, setCategories] = useState(defaultCategories);

  // const handleAdd = () => {
  //   setCategories([...categories,'Hunter X'])       // Opcion 1
  //   // setCategories( cats=> [...cats,'Hunter X'] )    // Opcion 2
  // };

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category) => {
          return <GifGrid key={category} category={category} />;
        })}
      </ol>
    </>
  );
};

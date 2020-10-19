import React, { useState } from "react";
import { AddCategory } from "./AddCategory";
import { GifGrid } from "./GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Dragon Ball"]);
  /**
   * Version 1
   */
  // const handleAddCategory = ()=>{
  //     const category = prompt("Enter a new category: ");
  //     setCategories([...categories,category]);
  // }

  // /**
  //  * V2
  //  */
  // const handleAddCategoryv2 = ()=>{
  //     const category = prompt("Enter a new category: ");
  //     setCategories(categories => [...categories,category]);
  // }
  return (
    <>
      <header className="header">
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setCategories} />
      </header>
      <ul>
        {categories.map((category, index) => (
          <GifGrid key={category} category={category} />
        ))}
      </ul>
    </>
  );
};

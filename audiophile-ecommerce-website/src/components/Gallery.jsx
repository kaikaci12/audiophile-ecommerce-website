import React from "react";
import data from "../data.json";
export default function Gallery({ galleryCategory }) {
  data.filter((product) => product.category === galleryCategory);
  return <div></div>;
}

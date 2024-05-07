import React from "react";
import data from "../data.json";
import { useParams } from "react-router";
export default function Headphones() {
  const { product } = useParams();
  console.log(product);
  return <div className="text-[40px] ">Headphones Page</div>;
}

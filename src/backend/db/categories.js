import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "camera",
  },
  {
    _id: uuid(),
    categoryName: "lenses",
  },
  {
    _id: uuid(),
    categoryName: "lighting",
  },
  {
    _id: uuid(),
    categoryName: "accessories",
  },
  {
    _id: uuid(),
    categoryName: "bags",
  },
];

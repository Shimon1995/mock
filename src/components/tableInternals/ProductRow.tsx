import React from "react";
import { mocks } from "../../objects/mock";
import uniqid from "uniqid";

export interface ProductRowProps {
  children: mocks[];
}

const ProductRow = (props: ProductRowProps): any =>
  props.children.map(child => (
    <li key={uniqid()}>
      {child.name}
      {"   "}
      {child.price}
      {"   "}
      {child.stocked ? "stocked" : "not stocked"}
    </li>
  ));

export default ProductRow;

import React from "react";
import ProductRow from "./ProductRow";
import ProductCategoryRow from "./ProductCategoryRow";
import { mocks } from "../../objects/mock";

interface Props {
  value: string;
  row: mocks[];
  show?: boolean;
}

const Categories = (props: Props) => (
  <>
    <ProductCategoryRow value={props.value} show={props.show} />
    <ProductRow>{props.row}</ProductRow>
  </>
);

export default Categories;

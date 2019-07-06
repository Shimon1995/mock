import React from "react";

interface Props {
  value: string;
  show?: boolean;
}

const ProductCategoryRows = (props: Props) =>
  props.show ? <li>{props.value}</li> : <div />;

export default ProductCategoryRows;

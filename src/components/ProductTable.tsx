import React from "react";

export interface ProductTableProps {
  children: any;
}

const ProductTable = (props: ProductTableProps) => <ul>{props.children}</ul>;

export default ProductTable;

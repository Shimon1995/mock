import React from "react";

export interface FiltrableProductTableState {
    searchValue: string;
}
 
class FiltrableProductTable extends React.Component<FiltrableProductTableState> {
    state = {
        searchValue: ""
    }
    render() { 
        return (  );
    }
}
 
export default FiltrableProductTable;
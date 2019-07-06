import React from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import Categories from "./tableInternals/Categories";
import mock, { mocks } from "../objects/mock";

export interface FiltrableProductTableState {
  searchValue: string;
  searchCheck: boolean;
  show: boolean;
  Goods: mocks[];
  Electronics: mocks[];
}

class FiltrableProductTable extends React.Component<
  {},
  FiltrableProductTableState
> {
  state = {
    searchValue: "",
    searchCheck: false,
    show: true,
    ...mock
  };
  render() {
    return (
      <>
        <SearchBar
          onSearch={this.handleSearchInput.bind(this)}
          onClick={this.handleSearchCheck.bind(this)}
          searchValue={this.state.searchValue}
          searchCheck={this.state.searchCheck}
        />
        <ProductTable>
          <Categories
            value={"Electronics"}
            row={this.state.Electronics}
            show={this.state.show}
          />
          <Categories
            value={"Goods"}
            row={this.state.Goods}
            show={this.state.show}
          />
        </ProductTable>
      </>
    );
  }
  handleSearchInput(event: any) {
    this.setState({ searchValue: event.target.value }); // Forced decision, caused by absence of function input param (event).
    this.setState(state => ({
      show: state.searchValue === "" ? true : false,
      Goods:
        state.searchValue === ""
          ? mock.Goods
          : mock.Goods.filter(Good =>
              Good.name.toUpperCase().includes(state.searchValue.toUpperCase())
            ),
      Electronics:
        state.searchValue === ""
          ? mock.Electronics
          : mock.Electronics.filter(Electronic =>
              Electronic.name
                .toUpperCase()
                .includes(state.searchValue.toUpperCase())
            )
    }));
  }
  handleSearchCheck() {
    this.setState({ searchCheck: !this.state.searchCheck });
    this.state.searchCheck
      ? this.setState({ ...mock })
      : this.setState({
          Goods: this.state.Goods.filter(Good => Good.stocked === true),
          Electronics: this.state.Electronics.filter(
            Electronic => Electronic.stocked === true
          )
        });
  }
}

export default FiltrableProductTable;

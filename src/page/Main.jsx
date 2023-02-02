import React from "react";
import CardBlock from "../components/CardBlock";
import Search from "../components/Search";
class Main extends React.Component {
  state = {
    products: [],
    searchHand: "",
  };
  componentDidMount() {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((users) => this.setState({ products: users }));
  }
  onSearch = (e) => {
    this.setState({
      searchHand: e.target.value,
    });
  };
  render() {
     const filterProducts = this.state.products.filter((p) =>
       p.title
         .toLocaleLowerCase()
         .includes(this.state.searchHand.toLocaleLowerCase())
     );
    return (
      <>
        <Search onSearch={this.onSearch} />
        <CardBlock productsu={filterProducts} />
      </>
    );
  }
}
export default Main;

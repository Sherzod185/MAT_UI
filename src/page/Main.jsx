import React from "react";
import CardBlock from "../components/CardBlock";
import Search from "../components/Search";
import loading from "../img/loading.gif"
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
    return this.state.products.length === 0 ? (
      <div className="boxssss">
        <img className="loadings" src={loading} alt="loading" />
      </div>
    ) : (
      <>
        <Search onSearch={this.onSearch} />
        <CardBlock productsu={filterProducts} />
      </>
    );
  }
}
export default Main;

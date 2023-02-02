import React from "react";
import { Container, Input } from "@mui/material";
const Search = ({ onSearch }) => {
  return (
    <Container>
      <h1 className="titleee">Product</h1>
      <Input
        sx={{
          backgroundColor: "#ffffff90",
          marginTop: "30px",
          width: "350px",
          padding: "10px",
          marginLeft: "auto",
          color: "black",
          fontSize:"20px",
        }}
        onChange={onSearch}
        type="search"
        placeholder="Search products ..."
      />
    </Container>
  );
};

export default Search;

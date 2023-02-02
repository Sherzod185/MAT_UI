import { Container, Grid } from "@mui/material";
import React from "react";
import Cards from "./Card";
const CardBlock = ({ productsu }) => {
  return (
    <Container>
      <Grid className="grid__block" container spacing={3}>
        {productsu.map((e) => (
          <Cards
            key={e.id}
            image={e.image}
            title={e.title}
            count={e.rating.count}
            rate={e.rating.rate}
            price={e.price}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default CardBlock;

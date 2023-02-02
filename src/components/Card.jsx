import React from "react";
import {
  Rating,
  Card,
  Typography,
  CardContent,
  Box
} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import CardCover from "@mui/material/Card";
const Cards = ({ title, image, count, rate, price }) => {
  return (
    <Box
      sx={{
        perspective: "1000px",
        transition: "transform 0.7s",
        "& > div, & > div > div": {
          transition: "inherit",
        },
        "&:hover": {
          "& > div": {
            transform: "rotateY(360deg)",
            "& > div:nth-child(2)": {
              transform: "scale(0.9), ",
            },
            "& > div:nth-child(3)": {
              transform: "translate3d(45px, 50px, 40px)",
            },
          },
        },
      }}
    >
      <Card
        className="card__block"
        sx={{
          height: "480px",
          width: "350px",
          background:
            "linear-gradient(to top, rgba(0,0,0,0.3), rgba(0,0,0,0.3))",
        }}
      >
        <CardCover
          sx={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.3), rgba(0,0,0,0.3))",
          }}
        >
          <Typography level="h2" fontSize="lg">
            <img src={image} alt="Products" />
          </Typography>
        </CardCover>
        <CardContent
          sx={{
            alignItems: "self-end",
            justifyContent: "flex-end",
            background:
              "linear-gradient(to top, rgba(0,0,0,0.3), rgba(0,0,0,0.3))",
          }}
        >
          <div>
            <h3>{title.split("").splice(0,30).join("")}</h3>
            <Rating readOnly precision={0.5} value={rate} />
            <p>Count: {count}</p>
            <p>Price: {price}💲🤩</p> 
            <Checkbox
              icon={<FavoriteBorder style={{ color: "red" }} />}
              checkedIcon={<Favorite style={{ color: "red" }} />}
            />
          </div>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Cards;

import React from "react";
import {
  AppBar,
  Avatar,
  Grid,
  Link,
  Paper,
  Tab,
  Tabs,
  Typography,
} from "@material-ui/core";

import x from "../image/avatar/avatar01.png";
console.log(x);

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("../image/avatar", false, /\.(png|jpe?g|svg)$/)
);

let img = Object.keys(images);

const People = () => {
  return (
    <div className="people">
      <Grid container direction="row" justify="center" alignItems="center">
        <Typography>Clubhose is full of interesting people!</Typography>
        <Typography>Try following at least 25.</Typography>
      </Grid>
      <Grid container direction="row" justify="center" alignItems="center">
        {img.map((data) => (
          <Link component="button" onClick={() => alert("Explore Clicked!")}>
            <Avatar src={images[data].default} style={{ margin: "1vw" }} />
          </Link>
        ))}
      </Grid>
    </div>
  );
};
export default People;

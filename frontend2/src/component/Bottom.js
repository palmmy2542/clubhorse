import React from "react";
import {
  AppBar,
  Button,
  Grid,
  Paper,
  Tab,
  Tabs,
  Typography,
} from "@material-ui/core";
import { green } from "@material-ui/core/colors";

const Bottom = () => {
  return (
    <Tabs
      indicatorColor="primary"
      textColor="primary"
      aria-label="icon tabs example"
      className="bottom-bar"
    >
      <Grid xs={4}></Grid>
      <Button variant="contained" style={{ background: green['A700'] }} color="primary">
        <Typography>+ Start a room</Typography>
      </Button>
      <Grid xs={4}></Grid>
    </Tabs>
  );
};
export default Bottom;

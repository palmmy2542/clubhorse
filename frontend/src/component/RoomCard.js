import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";

import {useHistory} from 'react-router-dom'

import TextsmsIcon from "@material-ui/icons/Textsms";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";

import React from "react";

const RoomCard = ({ room, index, onClickRoom }) => {
  const history = useHistory();
  const members = room.members.slice(0, 7);
  console.log(onClickRoom)
  return (
    <Card className="card" onClick={() => onClickRoom(index)}>
      <CardContent>
        <Typography variant="title">{room.title}</Typography>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            {members.map(() => (
              <PermIdentityIcon />
            ))}
          </Grid>
          <Grid item xs={8}>
            {members.map(({ name }) => (
              <Typography component="p">
                {name} <TextsmsIcon />
              </Typography>
            ))}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
export default RoomCard;

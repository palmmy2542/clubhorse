import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  InputAdornment,
  Link,
  ListItem,
  ListItemText,
  TextField,
  Typography,
} from "@material-ui/core";

import React, { useState } from "react";
import SendIcon from "@material-ui/icons/Send";
import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
const Message = ({ message }) => {
  const id = "2 ";
  return (
       <div className="d-flex p-0 m-0 justify-content-end px-5">
      <div className="rounded bg-light message">{message}</div>
    </div>
  );
};
export default Message;

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

import React, { useState, useRef, useEffect } from "react";
import SendIcon from "@material-ui/icons/Send";
import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Message from "./Message";
const Room = ({
  room,
  message,
  messages,
  onChange,
  onClick,
  setMessage,
  onClickLeaveRoom,
}) => {
  const handleClick = () => {
    onClick();
    setMessage("");
  };
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
    console.log('x')
  }, [messages]);

  return (
    <Container maxWidth="sm" id="container-chat" disableGutters="false">
      <div className="row message-chat p-0 m-0">
        <div className="row p-0 m-0">
          <div className="col-2 p-0 m-0">
            <Button onClick={onClickLeaveRoom}>
              <ArrowBackIcon />
            </Button>
          </div>
          <div className="col-10 p-0 m-0">
            {room.title != undefined && <Typography>{room.title}</Typography>}
          </div>
        </div>
        <div className="row p-0 m-0 px-2 pt-2" id="message-box">
          <div
            className="row w-100 p-0 m-0 align-items-end overflow-scroll messages"
            id="scroll"
            ref={messagesEndRef}
          >
            {messages.map((message, index) => (
              <Message message={message} key={index} />
            ))}
          </div>
          <div className="row w-100 p-0 m-0 align-items-end pb-2">
            <div className="col-xs-8 mx-auto">
              <TextField
                type="text"
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Button onClick={handleClick}>
                        <SendIcon className="send-icon" />
                      </Button>
                    </InputAdornment>
                  ),
                }}
                size="small"
                color="primary"
                fullWidth
                id="text-field"
                value={message}
                onChange={onChange}
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default Room;

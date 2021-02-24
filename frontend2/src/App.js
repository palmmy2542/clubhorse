import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import { Container, Typography } from "@material-ui/core";

import io from "socket.io-client";

import Home from "./pages/Home";
import Room from "./component/Room";

const endPoint = "http://localhost:24258";

const socket = io.connect(`${endPoint}`);

let roomList = new Array();
roomList.push(
  {
    title: "พักคุย :) รู้จักกันทางbio. ชอบใครFol.กันไป",
    members: [
      {
        username: "palm1",
        name: "Hippy",
      },
      {
        username: "palm1",
        name: "Hippy",
      },
      {
        username: "palm1",
        name: "Hippy",
      },
      {
        username: "palm1",
        name: "Hippy",
      },
      {
        username: "palm1",
        name: "Hippy",
      },
    ],

    size: 5,
  },
  {
    title: "มาเม้าท์กันเถอะ",
    members: [
      {
        username: "palm1",
        name: "Hippy",
      },
      {
        username: "palm1",
        name: "Hippy",
      },
      {
        username: "palm1",
        name: "Hippy",
      },
      {
        username: "palm1",
        name: "Hippy",
      },
      {
        username: "palm1",
        name: "Hippy",
      },
    ],

    size: 5,
  },
  {
    title: "เหงาง่า",
    members: [
      {
        username: "palm1",
        name: "Hippy",
      },
      {
        username: "palm1",
        name: "Hippy",
      },
      {
        username: "palm1",
        name: "Hippy",
      },
      {
        username: "palm1",
        name: "Hippy",
      },
      {
        username: "palm1",
        name: "Hippy",
      },
    ],

    size: 5,
  },
  {
    title: "ถกประเด็นการเมือง",
    members: [
      {
        username: "palm1",
        name: "Hippy",
      },
      {
        username: "palm1",
        name: "Hippy",
      },
      {
        username: "palm1",
        name: "Hippy",
      },
      {
        username: "palm1",
        name: "Hippy",
      },
      {
        username: "palm1",
        name: "Hippy",
      },
    ],

    size: 5,
  },
  {
    title: "พักคุย :) รู้จักกันทางbio. ชอบใครFol.กันไป",
    members: [
      {
        username: "palm1",
        name: "Hippy",
      },
      {
        username: "palm1",
        name: "Hippy",
      },
      {
        username: "palm1",
        name: "Hippy",
      },
      {
        username: "palm1",
        name: "Hippy",
      },
      {
        username: "palm1",
        name: "Hippy",
      },
    ],

    size: 5,
  }
);

const App = () => {
  const username = "Client_2";
  const history = useHistory();
  const [currentRoom, setCurrentRoom] = useState(null);
  const [isEntering, setIsEntering] = useState(false);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [index, setIndex] = useState(null);

  useEffect(() => {
    getMessages();
  }, [messages.length]);

  // Trigger 'join' event
  function joinRoom(room) {
    // Join room
    socket.emit("join", { username: username, room: room });
  }

  // Trigger 'leave' event if user was previously on a room
  function leaveRoom(room) {
    socket.emit("leave", { username: username, room: room });
  }

  // Trigger this event when a new room needs to be created
  function newRoom(room) {
    socket.emit("new_room", { username: username, room: room });
  }

  const getMessages = () => {
    socket.on("message", (msg) => {
      if (msg.msg !== undefined) {
        setMessages([...messages, msg.msg]);
      }
    });
  };

  const onChange = (e) => {
    setMessage(e.target.value);
  };

  const onClick = () => {
    if (message !== "") {
      let msg = message + " : Client_2";
      socket.emit("message", msg);
    } else {
      alert("Please Add a Message");
    }
  };
  const onClickRoom = (index) => {
    setCurrentRoom(roomList[index]);
    setIndex(index);
    setIsEntering(true);
    joinRoom(roomList[index].title);
    history.push(`/room/id:${index}`);
  };

  const onClickLeaveRoom = () => {
    setCurrentRoom({});
    setIsEntering(false);
    leaveRoom(roomList[index].title);
    setIndex(null);
    setMessage("");
    setMessages([]);
    history.push(`/`);
  };
  console.log(messages);
  return (
    <div>
      <Switch>
        <Route path={`/room`}>
          <Room
            roomList={roomList}
            room={currentRoom}
            messages={messages}
            message={message}
            onChange={onChange}
            onClick={onClick}
            setMessage={setMessage}
            onClickLeaveRoom={onClickLeaveRoom}
          />
        </Route>
        <Route path="/">
          <Home roomList={roomList} onClickRoom={onClickRoom} />
        </Route>
      </Switch>
    </div>
  );
};

export default App;

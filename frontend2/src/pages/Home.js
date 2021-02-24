import React from "react";
import RoomCard from "../component/RoomCard";
import Header from "../component/Header";
import Bottom from "../component/Bottom";
import People from "../component/People";
import { Container } from "@material-ui/core";

function Home({ roomList, onClickRoom }) {
    console.log(onClickRoom)
  return (
    <Container maxWidth="sm" className="container" disableGutters="false">
      <div style={{ width: "100vw" }}>
        <Header />
      </div>
      <People />
      {roomList.map((room, index) => (
        <RoomCard room={room} index={index} onClickRoom={onClickRoom} />
      ))}
      <Bottom />
    </Container>
  );
}

export default Home;

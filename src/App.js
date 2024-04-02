import React, { useState } from 'react';
import { Route, Switch } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Areas from './components/Areas';
import Rooms from './components/Rooms';
import Order from './components/Order';

function App() {
  const [rental, setRental] = useState({ area: "", rooms: [] });

  const addArea = (area) => {
    setRental({ ...rental, area })
  }
  
  const addRoom = (room) => {
    let newRoom;
    if (!rental.rooms.includes(room)) {
      newRoom = [...rental.rooms, room];
    } else {
      newRoom = rental.rooms.filter(item => item !== room);
    }
    setRental({ ...rental, rooms: newRoom });
  }

  return (
    <>
      <Header />
      <Switch>
        <Route path="/areas">
          <Areas addArea={addArea} rental={rental} />
        </Route>
        <Route path="/rooms">
          <Rooms addRoom={addRoom} rental={rental} />
        </Route>
        <Route path="/order">
          <Order rental={rental} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
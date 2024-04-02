import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Rooms = ({ addRoom, rental }) => {
  let rooms = ['Master bedroom', 'Guest bedroom 1', 'Guest bedroom 2', 'Guest bedroom 3'];
  const [roomSelected, setRoomSelected] = useState(false);

  const handleRoomSelection = (room) => {
    addRoom(room);
    setRoomSelected(true);
  };

  return (
    <div className="rooms container">
      <h3>Step 2: Choose Room</h3>
      <ul>
        {rooms.map(room => {
          let spanClass = rental.rooms.includes(room) ? 'active' : '';
          return (
            <li key={room} onClick={() => handleRoomSelection(room)}>
              <span className={spanClass}>{ room }</span>
            </li>
          )
        })}
      </ul>

      {roomSelected && (
        <Link to="/order">
          <motion.button
            initial={{ x: '-50px', opacity: 0 }}
            animate={{ x: '0px', opacity: 1 }}
          >
            Confirm Details
          </motion.button>
        </Link>
      )}
    </div>
  );
}

export default Rooms;
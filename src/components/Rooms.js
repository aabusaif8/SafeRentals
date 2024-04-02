import React from 'react';
import { Link } from 'react-router-dom';

const Rooms = ({ addRoom, rental }) => {
  let rooms = ['Master bedroom', 'Guest bedroom 1', 'Guest bedroom 2', 'Guest bedroom 3'];

  return (
    <div className="rooms container">
      
      <h3>Step 2: Choose Room</h3>
      <ul>
        {rooms.map(room => {
          let spanClass = rental.rooms.includes(room) ? 'active' : '';
          return (
            <li key={room} onClick={() => addRoom(room)}>
              <span className={spanClass}>{ room }</span>
            </li>
          )
        })}
      </ul>

      <Link to="/order">
        <button>
          Confirm Details
        </button>
      </Link>

    </div>
  )
}

export default Rooms;
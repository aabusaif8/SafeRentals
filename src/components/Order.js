import React from 'react';

const Order = ({ rental }) => {
  return (
    <div className="container order">
      <h2>Thank you for your order :)</h2>
      <p>Our Team will reach out in regards to your request to stay at:</p>
      <p>Location: {rental.area}</p>
      <p>Selected Room(s):</p>
      <ul>
        {rental.rooms.map(room => (
          <li key={room}>{room}</li>
        ))}
      </ul>
    </div>
  );
};

export default Order;
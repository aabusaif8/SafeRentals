import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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
      <Link to="/">
        <motion.button
        initial={{x:'-50px', opacity:0}}
        animate = {{x:'0px', opacity:1}}
        transition={{delay:.5}}
        >Go Back to Home</motion.button>
      </Link>
    </div>
  );
};

export default Order;
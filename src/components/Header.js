import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <motion.div className="logo-circle"
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:.5}}
        >
          <span className="logo-letter" style={{ fontSize: '3em', fontFamily: 'Segou UI' }}>S.</span>
          <span className="logo-letter" style={{ fontSize: '3em', fontFamily: 'Segou UI' }}>R.</span>
        </motion.div>
      </div>
      <motion.div className="title"
        initial={{ opacity: 0 }}
        animate={{ y: -30, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h1>Safe Rentals</h1>
      </motion.div>
    </header>
  );
}

export default Header;
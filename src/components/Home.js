import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"

const Home = () => {
  return (
    <motion.div className="home container"
    animate = {{marginTop:200, rotateZ:360}}>
      <motion.h2 
      animate = {{fontSize: 50, color:'#ff2994'}}>
        Welcome to Safe Rentals!
      </motion.h2>
      <div>
  <input type="email" placeholder="Enter your email" style={{ width: '75%', padding: '10px', fontSize: '16px', marginBottom: '15px' }} /> {/* Added inline styling to increase size */}
</div>
      <Link to="/areas">
        <motion.button 
        animate= {{scale:1.5}}> 
          Select Your New Home!
        </motion.button>
      </Link>
    </motion.div>
  )
}

export default Home;
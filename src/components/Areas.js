import React from 'react';
import { Link } from 'react-router-dom';

const Areas = ({ addArea, rental }) => {
  const areas = ['Sulphur, La', 'Houston, Tx', 'Boston, Ma'];

  return (
    <div className="base container">

      <h3>Step 1: Choose Your Area</h3>
      <ul>
        {areas.map(area => {
          let spanClass = rental.area === area ? 'active' : '';
          return (
            <li key={area} onClick={() => addArea(area)}>
              <span className={spanClass}>{ area }</span>
            </li>
          )
        })}
      </ul>

      {rental.area && (
        <div className="next">
          <Link to="/rooms">
            <button>Next</button>
          </Link>
        </div>
      )}

    </div>
  )
}

export default Areas;
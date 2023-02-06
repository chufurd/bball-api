import React, { useState } from 'react';
import * as logos from 'react-nba-logos';
import Swal from 'sweetalert2';

const Player = ({ name, position, team, ppg, apg, rpg, blk, stl, color, }) => {
  const Logo = logos[team];
  const [showDetails, setShowDetails] = useState(false);

  const handleClick = () => {
    setShowDetails(!showDetails);
  };

  const zoomInToStats = () => {
    Swal.fire({
      title: name,
      html: `
        <p>Position: ${position}</p> 
        <p>Team: ${team}</p> 
        <p>PPG: ${ppg}</p> 
        <p>APG: ${apg}</p> 
        <p>RPG: ${rpg}</p> 
        <p>SPG: ${stl}</p> 
        <p>BPG: ${blk}</p>
        
      `,
      customClass: {
        container: 'swal2-large-text',
      },
      showCloseButton: true,
      focusConfirm: false,
      confirmButtonText: 'Close',
    });
  };
  
  const styles = {
    zoomInButton: {
      backgroundColor: '#6d7fcc',
      border: 'none',
      borderRadius: '5px',
      color: 'white',
      padding: '10px 15px',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
  };

  return (
    <div className='task'>
      <button className="btn" style={{ backgroundColor: color }} onClick={handleClick}>
        <h3>{name}</h3>
      </button>
      {showDetails && (
        <div className="player-details">
          <Logo teamId={team} />
          <p>Position: {position}</p>
          <p>Team: {team}</p>
          <p>PPG: {ppg}</p>
          <p>APG: {apg}</p>
          <p>RPG: {rpg}</p>
          <p>SPG: {stl}</p>
          <p>BPG: {blk}</p>
          <button style={styles.zoomInButton} onClick={zoomInToStats}>
            Zoom In
          </button>
        </div>
      )}
    </div>
  );
};

export default Player;

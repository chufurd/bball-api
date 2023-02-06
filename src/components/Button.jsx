import React from 'react';

const Button = ({ refreshPlayers, name, text, color, onClick }) => {
  
  return (
    <button className='btn' style={{ backgroundColor: color}} onClick={refreshPlayers}>
      {text}
      <p>{name}</p>
    </button>
  );
};

export default Button;

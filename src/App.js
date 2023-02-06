import React, { useEffect, useState } from 'react';
import { getPlayersFromData, getRandomPlayers, capitalizeName } from './service/api'
import Button from './components/Button';
import Header from './components/Header';
import Player from './components/Player'


const App = () => {
  const [players, setPlayers] = useState([]);
  const [randomPlayers, setRandomPlayers] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  useEffect(() => {
    getPlayersFromData()
      .then(data => {
        setPlayers(data.filter(player => player.name && player.position && player.teamId));
        setRandomPlayers(getRandomPlayers(players));
      });
  }, []);

  const handleRefreshClick = () => {
    setRandomPlayers(getRandomPlayers(players));
  };

  const handlePlayerClick = player => {
    setSelectedPlayer(selectedPlayer === player ? null : player);
  };

  return (
    <div className='container'>
      <header>
        <Header name='NBA API' />
        <Button color='green' text='Get Players!' refreshPlayers={handleRefreshClick} />
      </header>
      {randomPlayers.map(player => {
        if (!player.name) return null;
        return (
          <Player 
          key={player.name}
          color='grey'
          name={capitalizeName(player.name)}
          position={player.position}
          team={player.teamId}
          ppg={player.ppg}
          apg={player.apg}
          rpg={player.rpg}
          blk={player.blkPerG}
          stl={player.stlPerG}
          selected={selectedPlayer === player}
          onClick={() => handlePlayerClick(player)}
        />
        )
      })}
    </div>
  );
};

export default App;

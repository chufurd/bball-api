export const getPlayersFromData = () => {
  return fetch("https://backend-api-oul4.onrender.com/api/players/")
  .then(response => response.json())

}

 export const getRandomPlayers = (players) => {
  let randomPlayers = [];
  if (players.length >= 5) {
    for (let i = players.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [players[i], players[j]] = [players[j], players[i]];
    }
    randomPlayers = players.slice(0, 20);
  }
  return randomPlayers;
};

export const capitalizeName = name => {
    const [firstName, lastName] = name.split(" ");
    return `${firstName.charAt(0).toUpperCase() + firstName.slice(1)} ${lastName.charAt(0).toUpperCase() + lastName.slice(1)}`;
  };
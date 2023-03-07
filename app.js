const state = {
  players: [
    {
      name: "Jim",
      email: "jim@mail.com",
      age: 33,
    },
  ],
  selectedPlayer: null,
};

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const playerName = event.target[0].value;
  const playerEmail = event.target[1].value;
  const playerAge = event.target[2].value;

  const newPlayerObject = {
    name: playerName,
    email: playerEmail,
    age: playerAge,
  };
  state.players.push(newPlayerObject);
  renderPlayers();
});

const allPlayersDiv = document.querySelector(".all-players");
const selectedPlayerDiv = document.querySelector(".selected-player");

allPlayersDiv.addEventListener("click", (event) => {
  state.selectedPlayer = state.players[event.target.id];
  renderSelectedPlayer();
});

function renderSelectedPlayer() {
  selectedPlayerDiv.innerHTML = `
    <ul>
        <li>${state.selectedPlayer.name}</li>
        <li>${state.selectedPlayer.email}</li>
        <li>${state.selectedPlayer.age}</li>
    </ul>
  `;
}

function renderPlayers() {
  allPlayersDiv.innerHTML = `
        ${state.players
          .map((player, i) => {
            return `
            <ul>
                <li id=${i}>${player.name}</li>
            </ul>
            `;
          })
          .join("")}
      `;
}

renderPlayers();

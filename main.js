
// loading all the players
const loadPlayers = async(search) => {
    const url = await `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${search}`;
    const res = await fetch(url);
    const palayersData = await res.json();
    showPlayer(palayersData.player);
}

const showPlayer = (players) => {
    // get the players container to add all players
    const playerContainer = document.getElementById("player-container");
    // clear the prevoius player after getting players by searching
    playerContainer.textContent = "";
    players.forEach(player => {
        const playerDiv = document.createElement("div");
        playerDiv.classList.add("player")
        playerDiv.innerHTML = `
            <img src= ${player.strThumb ? player.strThumb : player.strFanart1} />
            <h1>Player ID: ${player.idPlayer}</h1>
            <h2>Name: ${player.strPlayer} </h2>
            <h3>Country: ${player.strNationality}</h3>
            <h3>Position: ${player.strPosition}</h3>
        `;
        playerContainer.appendChild(playerDiv)
        
    });
}


// searching function
const searchPlayer = () => {
    const searchField = document.getElementById("search-field");
    const searchText = searchField.value;
    loadPlayers(searchText);
}

// adding Event Listener to get players pressing Enter Key instead Search Button
document.getElementById("search-field").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        const searchField = document.getElementById("search-field");
        const searchText = searchField.value;
        loadPlayers(searchText);
    }
})

loadPlayers("");
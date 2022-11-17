function createGame(player1, hour, player2) {
  return`
   <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}">
    </li>
  `
}

let delay = -0.5;
function createCard(date, day, games) {
  delay = delay + 0.5;
  return `
  <div class="card" style="animation-delay: ${delay}s">
                <h2>${date}<span>${day}</span></h2>
                <ul>
                   ${games}
                </ul>
                </div>
  `
}

document.querySelector('#app').innerHTML = `
            <header>
                <h1>Calendário da Copa<br><img src="./src/imagens/foto-perfil.jpg" class="fotoperfil"/></br></h1>
                <h1>Raphael Gomes</h1>
                <h3>GRUPO G:</h3>
            </header>

            <main id="cards">
                ${createCard("24/11", "quinta", createGame('switzerland', '07:00', 'cameroon'))}
                ${createCard("24/11", "quinta", createGame('brazil', '16:00', 'serbia'))}
                ${createCard("28/11", "segunda", createGame('cameroon', '07:00', 'serbia'))}
                ${createCard("28/11", "segunda", createGame('switzerland', '13:00', 'brazil'))}
                ${createCard("02/11", "sexta", createGame('serbia', '16:00', 'switzerland'))}
                ${createCard("02/12", "sexta", createGame('brazil', '16:00', 'cameroon'))}
            </main>`

            
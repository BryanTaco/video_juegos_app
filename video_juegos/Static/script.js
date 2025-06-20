let games = [
    {title: 'The Legend of Zelda', platform: 'Nintendo', year: 2017, status: 'Completado'},
    {title: 'God of War', platform: 'PlayStation', year: 2018, status: 'En progreso'},
    {title: 'Halo Infinite', platform: 'Xbox', year: 2021, status: 'En posesión'}
];

// Función para mostrar los juegos en la página
function displayGames() {
    const gameList = document.getElementById('gameList');
    if (gameList) {
        gameList.innerHTML = '';
        games.forEach(game => {
            const gameCard = document.createElement('div');
            gameCard.className = 'game-card';
            gameCard.innerHTML = `
                <h3>${game.title}</h3>
                <p><strong>Plataforma:</strong> ${game.platform}</p>
                <p><strong>Año:</strong> ${game.year || 'N/A'}</p>
                <p><strong>Estado:</strong> ${game.status}</p>
            `;
            gameList.appendChild(gameCard);
        });
    }
}

// Función para manejar el formulario
function handleFormSubmit(event) {
    event.preventDefault();
    
    const title = document.getElementById('title').value;
    const platform = document.getElementById('platform').value;
    const year = document.getElementById('year').value;
    const status = document.getElementById('status').value;
    
    const newGame = {
        title,
        platform,
        year: year || undefined,
        status
    };
    
    games.push(newGame);
    displayGames();
    localStorage.setItem('games', JSON.stringify(games));
    
    alert('Juego añadido con éxito!');
    document.getElementById('gameForm').reset();
}

// Cargar juegos guardados del localStorage
function loadSavedGames() {
    const savedGames = localStorage.getItem('games');
    if (savedGames) {
        games = JSON.parse(savedGames);
    }
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    loadSavedGames();
    displayGames();
    
    const form = document.getElementById('gameForm');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }
});
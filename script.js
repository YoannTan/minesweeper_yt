document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('board');
    const boardSize = 10;
    const mineCount = 10;
  
    // Initialize the board
    for (let i = 0; i < boardSize * boardSize; i++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.addEventListener('click', () => revealCell(cell));
      board.appendChild(cell);
    }
  
    // Place mines randomly
    let minePositions = new Set();
    while (minePositions.size < mineCount) {
      let minePosition = Math.floor(Math.random() * (boardSize * boardSize));
      minePositions.add(minePosition);
    }
  
    function revealCell(cell) {
      if (minePositions.has(Array.from(board.children).indexOf(cell))) {
        cell.classList.add('mine');
        alert('Boom! Game over.');
        // Reveal all mines
        minePositions.forEach(index => {
          board.children[index].classList.add('mine');
        });
      } else {
        cell.classList.add('revealed');
        // TODO: Add number of adjacent mines
      }
    }
  });
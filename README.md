2048 Game
A simple implementation of the popular 2048 puzzle game built using vanilla JavaScript, HTML, and CSS with Vite as the development tool.
Overview
This project recreates the classic 2048 game where players slide numbered tiles on a 4x4 grid to combine them, aiming to create a tile with the value of 2048. The game tracks the score and includes a game-over modal.
Features

Interactive 4x4 grid with sliding tile mechanics.
Score tracking based on tile combinations.
Game over detection with a restart option.
Responsive design with styled tiles.

Prerequisites

Node.js and npm installed.
Git installed for version control.

Installation

Clone the repository:git clone https://github.com/yuvrajsinghmaurya/2048-games.git


Navigate to the project directory:cd 2048-games


Install dependencies:npm install



How to Play

Use the arrow keys to slide tiles in four directions (up, down, left, right).
Combine tiles with the same number to double their value (e.g., 2 + 2 = 4).
A new 2 or 4 tile appears after each move.
Aim to create a tile with the value 2048.
The game ends when no moves are possible; click "Restart" to play again.

Development

Start the development server:npm run dev


Open http://localhost:5173 in your browser to play locally.

Building and Deployment

Build the project for production:npm run build


Deploy to GitHub Pages:npm run deploy


The game is hosted at https://yuvrajsinghmaurya.github.io/2048-games/.

Project Structure

index.html: Main HTML structure with the game board and modal.
src/main.js: Game logic, including tile movement, merging, and game-over detection.
src/style.css: Styling for the game board, tiles, and modal.
vite.config.js: Vite configuration for development and deployment to GitHub Pages.

Implementation Details
Slide Algorithm
The game implements a sliding mechanism to move and merge tiles. The slide() function:

Filters out zero values to focus on active tiles.
Compares adjacent tiles; if they match, they merge into their sum (e.g., 2 + 2 = 4), and the score increases by the new value.
Pads the row with zeros to maintain the 4x4 structure.
This is applied in four directions (left, right, up, down) by rotating the board logic:
slideLeft() and slideRight() operate on rows.
slideUp() and slideDown() transpose the board into columns using array slicing.


The algorithm ensures a single merge per pair per move, preventing multiple merges in one slide.

State Management

The game state is managed using a 2D board array (4x4) initialized with zeros, representing tile positions.
The score variable tracks points, incremented when tiles merge.
State updates occur imperatively:
setGame() resets board and score.
slide*() functions modify board directly and call updateRow() or updateCol() to reflect changes in the DOM.


A modal (gameOverModal) toggles visibility based on isGameOver(), which checks for no empty tiles and no possible merges.

Contributing
Feel free to fork this repository, make improvements, and submit pull requests. Issues and suggestions are welcome!
License

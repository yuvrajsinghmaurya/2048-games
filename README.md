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
A new 2 tile appears after each move.
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

index.html: Main HTML structure.
src/main.js: Game logic and interactivity.
src/style.css: Styling for the game board and tiles.
vite.config.js: Vite configuration for development and deployment.

Contributing
Feel free to fork this repository, make improvements, and submit pull requests. Issues and suggestions are welcome!
License

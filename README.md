# minesweeper_yt

This project is a custom implementation of the classic Minesweeper game. It features a dynamic board size and allows players to choose from different difficulty levels, including a custom mode with a uniquely sized board.

## Features

- Multiple difficulty levels: Easy, Medium, Hard, and Custom.
- Customizable board dimensions and mine count for the Custom difficulty.
- Classic Minesweeper gameplay with flagging and revealing cells.
- Safe first click - the first cell clicked will never be a mine.
- Chording feature - if the number of flags around a revealed cell equals the number of adjacent mines, clicking it reveals all surrounding cells.

## How to Play

1. **Choose a Difficulty:** Select from Easy, Medium, Hard, or Custom difficulty. In Custom mode, you can specify the board dimensions and the number of mines.
2. **Left Click to Reveal:** Click on a cell to reveal it. If it's a mine, the game is over. If not, the cell will either show the number of mines in the adjacent cells or be blank if there are no nearby mines.
3. **Right Click to Flag:** Right-click on a cell to place a flag where you suspect a mine is located. Right-click again to remove the flag.
4. **Use Chording:** On a revealed cell with a mine count, if the number of flags around it equals the mine count, left-clicking the cell will reveal all non-flagged surrounding cells.
5. **Winning the Game:** The game is won by flagging all mines correctly and revealing all other cells.

## Installation

To set up the game:

1. Clone the repository: `git clone [[repository-url]](https://github.com/YoannTan/minesweeper_yt.git)`
2. Open `index.html` in your browser to start playing.

## Technologies Used

- HTML
- CSS
- JavaScript

## Customization

You can customize the game by modifying the `difficulties` object in the JavaScript file to add new difficulty levels or change existing ones.

## Contributing

Contributions to the project are welcome. Please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/branch-name`.
3. Make your changes and commit them: `git commit -m 'Commit message'`.
4. Push to the original branch: `git push origin [project-name]/[location]`.
5. Create the pull request.

Alternatively, see the GitHub documentation on [creating a pull request](https://help.github.com/articles/creating-a-pull-request/).

## License

This project is licensed under the [MIT License](LICENSE.md).

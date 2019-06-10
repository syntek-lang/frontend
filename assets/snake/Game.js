import Apple from './Apple.js';
import Snake from './Snake.js';

export default class Game {
  constructor(element) {
    this.canvas = element;
    this.context = element.getContext('2d');

    this.pixelSize = 10;

    this.apple = new Apple(this.canvas.width / this.pixelSize, this.canvas.height / this.pixelSize);
    this.snake = new Snake(this.canvas.width / this.pixelSize, this.canvas.height / this.pixelSize);
  }

  draw() {
    // Clear canvas
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.drawApple();

    this.snake.cells.forEach((cell, index) => {
      this.drawCell(cell);

      // Eat apple
      if (cell.x === this.apple.x && cell.y === this.apple.y) {
        this.snake.grow();

        this.apple = new Apple(
          this.canvas.width / this.pixelSize,
          this.canvas.height / this.pixelSize,
        );
      }

      // Check collision
      for (let i = index + 1; i < this.snake.cells.length; i += 1) {
        if (cell.x === this.snake.cells[i].x && cell.y === this.snake.cells[i].y) {
          this.snake = new Snake(
            this.canvas.width / this.pixelSize,
            this.canvas.height / this.pixelSize,
          );
        }
      }
    });

    this.setScore();
  }

  drawApple() {
    this.context.fillStyle = 'red';
    this.context.fillRect(
      this.apple.x * this.pixelSize,
      this.apple.y * this.pixelSize,
      this.pixelSize,
      this.pixelSize,
    );
  }

  drawCell(cell) {
    this.context.fillStyle = 'green';
    this.context.fillRect(
      cell.x * this.pixelSize,
      cell.y * this.pixelSize,
      this.pixelSize - 1,
      this.pixelSize - 1,
    );
  }

  setScore() {
    this.context.fillStyle = 'white';
    this.context.font = '30px Arial';
    this.context.fillText(this.snake.length, 5, 35);
  }
}

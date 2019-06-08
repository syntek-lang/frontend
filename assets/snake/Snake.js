export default class Snake {
  constructor(width, height) {
    this.width = width;
    this.height = height;

    this.x = width / 10;
    this.y = height / 10;

    this.length = 1;
    this.cells = [];

    this.moveCells();
  }

  grow() {
    this.length += 1;
  }

  moveCells() {
    this.cells.unshift({ x: this.x, y: this.y });

    if (this.cells.length > this.length) {
      this.cells.pop();
    }
  }

  moveUp() {
    this.y -= 1;

    if (this.y < 0) {
      this.y = this.height - 1;
    }

    this.moveCells();
  }

  moveRight() {
    this.x += 1;

    if (this.x >= this.width) {
      this.x = 0;
    }

    this.moveCells();
  }

  moveDown() {
    this.y += 1;

    if (this.y >= this.height) {
      this.y = 0;
    }

    this.moveCells();
  }

  moveLeft() {
    this.x -= 1;

    if (this.x < 0) {
      this.x = this.width - 1;
    }

    this.moveCells();
  }
}

class Player {
    constructor(number, playerName, point, move, color) {
        this.number = number;
        this.playerName = playerName;
        this.point = point;
        this.move = move;
        this.color = color
        this.arrPlayer = []
        this.getPlayerName = function () {
            return this.playerName;
        }
        this.getPoint = function () {
            return this.point;
        }
    }
}
let player1 = new Player(1, prompt("Nhap ten"), 1000,1, "red");
let player2 = new Player(2, prompt("Nhap ten"), 1000,1, "orange");

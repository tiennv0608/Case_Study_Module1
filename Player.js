class Player {
    constructor(playerName, point) {
        this.playerName = playerName;
        this.point = point;
        this.getPlayerName = function () {
            return this.playerName;
        }
        this.getPoint = function () {
            return this.point;
        }
    }
}
let player1 = new Player(prompt("Nhap ten"), 500);
let player2 = new Player(prompt("Nhap ten"), 500);

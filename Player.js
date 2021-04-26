class Player {
    constructor(playerName) {
        this.playerName = playerName;
        this.getPlayerName = function () {
            return this.playerName;
        }
    }
}
let player1 = new Player(prompt("Nhap ten cua ban"));

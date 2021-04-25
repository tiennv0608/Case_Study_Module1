class Place {
    constructor(placeId,placeName,placeValue) {
        this.placeId = placeId;
        this.placeName = placeName;
        this.placeValue = placeValue;
        this.getPlaceName = function () {
            return this.placeName;
        }
        this.getValue = function (){
            return this.placeValue;
        }
    }
}
let place2 = new Place(2,'HaNoi',450);
let place3 = new Place(3,'HaiPhong',400);
let place4 = new Place(4,'HaiDuong',350);
let place5 = new Place(5,'ThanhHoa',300);
let place6 = new Place(6,'ThaiBinh',250);
let place7 = new Place(7,'NgheAn',300);
class Player {
    constructor(playerName) {
        this.playerName = playerName;
        this.getPlayerName = function () {
            return this.playerName;
        }
    }
}
let player1 = new Player(prompt("Nhap ten cua ban"));

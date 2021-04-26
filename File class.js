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
let place1 = new Place(1,'Start',0)
let place2 = new Place(2,'HaNoi',450);
let place3 = new Place(3,'HaiPhong',400);
let place4 = new Place(4,'HaiDuong',350);
let place5 = new Place(5,'ThanhHoa',300);
let place6 = new Place(6,'ThaiBinh',250);
let place7 = new Place(7,'NgheAn',300);
let place8 = new Place(8,'HaTinh',300);
let place9 = new Place(9,'QuangBinh',300);
let place10 = new Place(10,'QuangTri',300);
let place11 = new Place(11,'Hue',300);
let place12 = new Place(12,'DaNang',300);
let place13 = new Place(13,'QuangNgai',300);
let place14 = new Place(14,'NinhThuan',300);
let place15 = new Place(15,'GiaLai',300);
let place16 = new Place(16,'BinhThuan',300);
let place17 = new Place(17,'BinhDuong',300);
let place18 = new Place(18,'LongAn',300);
let place19 = new Place(19,'TPHoChiMinh',300);
let place20 = new Place(20,'VungTau',300);
let place21 = new Place(21,'CanTho',300);
let place22 = new Place(22,'QuangNam',300);
let place23 = new Place(23,'SocTrang',300);
let place24 = new Place(24,'HoangSa',300);
let place25 = new Place(25,'TruongSa',300);
let place26 = new Place(26,'PhuQuoc',300);
let place27 = new Place(27,'BinhDinh',300);
let place28 = new Place(28,'CaMau',300);
let arr = [place1,place2,place3,place4,place5,place6,place7,place8,place9,place10,place11,place12,place13,place14,place15,place16,place17,place18,place19,place20,place21,place22,place23,place24,place25,place26,place27,place28];


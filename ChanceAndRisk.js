class Chance {
    constructor(chance, value) {
        this.chance = chance;
        this.value = value;
        this.displayChance = function (){
            return this.chance;
        }
    }
}
let chance1 = new Chance("Trung xo so",100);
let chance2 = new Chance("Sinh nhat",20);
let chance3 = new Chance("Mung tan gia",50);
let chance4 = new Chance("Ban hang huong hoa hong",30);
let arrChance = [chance1,chance2,chance3,chance4]
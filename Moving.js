function throwDice(player) {
    turn % 2 === 0 ? player = player2 : player = player1;
    turn++;
    let valueDice = 1
    document.getElementById('display').innerHTML = valueDice;
    player.move += valueDice;
    if (player.move > 28) {
        player.point += 200;
        document.getElementById('point'+player.number).innerHTML = player.point;
        indexMove = player.move - 28;
        let place = arr[28 + indexMove - valueDice - 1];
        document.getElementById('num-' + place.placeId).innerHTML = place.placeName + '<br>' + place.placeValue;
    } else if (player.move - valueDice - 2 >= 0) {
        indexMove = player.move;
        let place = arr[indexMove - valueDice - 1];
        document.getElementById('num-' + place.placeId).innerHTML = place.placeName + '<br>' + place.placeValue;
    } else {
        indexMove = player.move;
        let place = arr[indexMove - valueDice - 1]
        document.getElementById('num-' + place.placeId).innerHTML = place.placeName + '<br>' + place.placeValue;
    }
    player.move = indexMove;
    let place = arr[indexMove - 1];
    document.getElementById("num-" + place.placeId).innerHTML += player.getPlayerName() + "<br>";
    if (indexMove - 1 > 0) {
        z = player
        let str = "Do "+z.getPlayerName()+" want to purchase " + place.placeName + " with " + place.placeValue + "<br>";
        str += "<button type='button' onclick='accept(z)' id='yes'>Yes</button><button type='button' onclick='refuse()'>No</button>"
        guide.innerHTML = str
    } else {
        guide.innerHTML = "";
    }
    displayPlayerPosition(player,place)
    payWhenVisiting(player1,player2);
    if (player.point<0) {
        checkGameOver(player);
        let i = 0;
        if (i < player.arrPlayer.length) {
            guide.innerHTML = "Do "+player.getPlayerName()+" want to sell " + player.arrPlayer[i].placeName + " with " + player.arrPlayer[i].placeValue / 2 + "<br><button type='button' onclick='acceptSell(z)'>Yes</button><button type='button' onclick='refuseSell(z)'>No</button>"
        }
    }
}
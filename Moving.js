function throwDice(player) {
    turn % 2 === 0 ? player = player2 : player = player1;
    turn++;
    let valueDice = Math.round(Math.random() * 5 + 1);
    document.getElementById('display').innerHTML = valueDice;
    player.move += valueDice;
    if (player.move > 28) {
        player.point += 200;
        document.getElementById('point'+player.number).innerHTML = player.point;
        x = player.move - 28;
        let place = arr[28 + x - valueDice - 1];
        document.getElementById('num-' + place.placeId).innerHTML = place.placeName + '<br>' + place.placeValue;
    } else if (player.move - valueDice - 2 >= 0) {
        x = player.move;
        let place = arr[x - valueDice - 1];
        document.getElementById('num-' + place.placeId).innerHTML = place.placeName + '<br>' + place.placeValue;
    } else {
        x = player.move;
        let place = arr[x - valueDice - 1]
        document.getElementById('num-' + place.placeId).innerHTML = place.placeName + '<br>' + place.placeValue;
    }
    player.move = x;
    let place = arr[x - 1];
    document.getElementById("num-" + place.placeId).innerHTML += player.getPlayerName() + "<br>";
    if (x - 1 > 0) {
        z = player
        let str = "Do "+z.getPlayerName()+" want to purchase " + place.placeName + " with " + place.placeValue + "<br>";
        str += "<button type='button' onclick='accept(z)' id='yes'>Yes</button><button type='button' onclick='refuse()'>No</button>"
        document.getElementById('guide').innerHTML = str
    } else {
        document.getElementById('guide').innerHTML = "";
    }
    displayPlayerPosition(player,place)
    payWhenVisiting(player1,player2);
    if (player.point<0) {
        checkGameOver(player);
        let i = 0;
        if (i < player.arrPlayer.length) {
            document.getElementById('guide').innerHTML = "Do "+player.getPlayerName()+" want to sell " + player.arrPlayer[i].placeName + " with " + player.arrPlayer[i].placeValue / 2 + "<br><button type='button' onclick='acceptSell(z)'>Yes</button><button type='button' onclick='refuseSell(z)'>No</button>"
        }
    }
}
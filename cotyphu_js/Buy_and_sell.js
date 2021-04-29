function refuse() {
    guide.innerHTML = "";
}

function accept(player) {
    let place = arr[indexMove - 1];
    player.point = player.getPoint() - place.getValue();
    player.arrPlayer.push(place);
    document.getElementById("num-" + place.placeId).style.backgroundColor = player.color;
    if (player.point>=0) {
        document.getElementById('point'+player.number).innerHTML = player.point;
        guide.innerHTML=""
    } else {
        checkGameOver(player);
        let i =0;
        if(i<player.arrPlayer.length){
            guide.innerHTML="Do "+player.getPlayerName()+" want to sell "+ player.arrPlayer[i].placeName + " with "+ player.arrPlayer[i].placeValue/2+"<br><button type='button' onclick='acceptSell(z)'>Yes</button><button type='button' onclick='refuseSell(z)'>No</button>"
        }
    }
    displayPlaceOfPlayer(place,player);
}

let index = 1
function refuseSell(player){
    if (index<player.arrPlayer.length){
        guide.innerHTML="Do "+player.getPlayerName()+" want to sell "+ player.arrPlayer[index].placeName + " with "+ (player.arrPlayer[index].placeValue/2)+"<br><button onclick='acceptSell(z)'>Yes</button><button onclick='refuseSell(z)'>No</button>"
        index++;
    } else {
        index = 0;
        guide.innerHTML="Do "+player.getPlayerName()+" want to sell "+ player.arrPlayer[index].placeName + " with "+ (player.arrPlayer[index].placeValue/2)+"<br><button onclick='acceptSell(z)'>Yes</button><button onclick='refuseSell(z)'>No</button>"
        index++;
    }
}

let index1 =0;
function acceptSell(player){
    let place = arr[indexMove-1];
    player.point = player.point + player.arrPlayer[index1].placeValue/2;
    document.getElementById('point'+player.number).innerHTML = player.point;
    document.getElementById("num-" + player.arrPlayer[index1].placeId).style.backgroundColor = '';
    player.arrPlayer.splice(index1,1);
    displayPlaceOfPlayer(place, player);
    if(player.point <0) {
        checkGameOver(player);
        guide.innerHTML = "Do " + player.getPlayerName() + " want to sell " + player.arrPlayer[index1].placeName + " with " + (player.arrPlayer[index1].placeValue / 2) + "<br><button onclick='acceptSell(z)'>Yes</button><button onclick='refuseSell(z)'>No</button>";
    } else {
        player.arrPlayer.push(place);
        guide.innerHTML= "";
    }
}

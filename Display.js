function display(place) {
    document.getElementById('num-' + place.placeId).innerHTML = place.placeName + '<br>' + place.placeValue + '<br>';
}

function displayAll() {
    for (let i = 0; i < arr.length; i++) {
        display(arr[i]);
    }
    displayPlayer(player1);
    displayPlayer(player2);
    displayPoint(player1);
    displayPoint(player2);
}

function displayPoint (player) {
    document.getElementById('point'+player.number).innerHTML = player.getPoint();
}
function displayPlayer(player){
    document.getElementById('player'+player.number).innerHTML = player.getPlayerName();
}
function displayPlayerPosition(player,place) {
    document.getElementById('position'+player.number).innerHTML = place.getPlaceName()
}

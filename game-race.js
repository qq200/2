var player_car= new Car()
    player_car.render();
var road=document.getElementById('road');

function action(){
    if(event.code=='ArrowRight'){
        player_car.steerRight();
    }
    if(event.code=='ArrowLeft'){
        player_car.steerLeft();
    }

    // de adaugat inca 2 if care controleaza speed
    // alert(event.code);
}

function animate(){
// scoate numarul din string
        var y=parseInt(road.style.backgroundPositionY);
        y+=player_car.speed;
        road.style.backgroundPositionY=`${y}px`;
        console.log(road.style.backgroundPositionY);
}

setInterval(animate, 30);
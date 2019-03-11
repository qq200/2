//modul unde seste anuntat car component
class Car{
    constructor(){
        this.left=0; //pixels from left
        this.speed=10; // pixels/s
    }

    render(){
        // am creat div si  prin this pastram legatura permanenta
        this.div=document.createElement('div');
        this.div.className='car main';
        this.updateStyle();
        var road=document.getElementById('road');
            road.appendChild(this.div);
    }
    steerLeft(){
        this.left-=10;
        this.updateStyle();
    }
    steerRight(){
        this.left+=10;
        this.updateStyle();
    }
    speedUp(){
        this.speed+=20;
        var y=parseInt(road.style.backgroundPositionY);
        if(y<60){
            y+=player_car.speed;
        }else{
            y=60;
        }        
        road.style.backgroundPositionY=`${y}px`;
        console.log(road.style.backgroundPositionY);       
    }
    speedDown(){
        this.speed-=20;
        var y=parseInt(road.style.backgroundPositionY);
        if(y>30){
            y-=player_car.speed;
        }else{
            y=30;
        }
        road.style.backgroundPositionY=`${y}px`;
        console.log(road.style.backgroundPositionY);       
    }
    updateStyle(){
        // reinnoeste style divului
        this.div.style.left=`${this.left}px`;

    }
}

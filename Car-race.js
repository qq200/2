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
    updateStyle(){
        // reinnoeste style divului
        this.div.style.left=`${this.left}px`;
    }
}



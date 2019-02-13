// class of map component
// 0-empty
// 1-pacman
// 2-chery
// 3-bomb
// 4-coin monete

class GameMap{
    constructor(){
        this.grid=[0,0,0,0,0,1,0,0,0,0]; //index 6

    }
    render(){
        var div=document.getElementById('map');
        var html= ``;



        //i-0 index de la 0
        for(var i=0; i<=9; i++){
            html+=`<div></div>`;

        }
        
        div.innerHTML=html
    }
}

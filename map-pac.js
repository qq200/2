// class of map component
// drupal
// 0-empty
// 1-pacman
// 2-chery
// 3-bomb
// 4-coin monete

class GameMap{
    constructor(){
        this.grid=[0,2,0,0,0,1,0,3,0,4]; //index 6
    }
    render(){
        var div=document.getElementById('map');
               var html= ``;
        //i-0 index de la 0
        for(var i=0; i<=9; i++){if(this.grid[i]==1){
                        html+=`<div><img src="Images/Pacman.png" width="42" height="42"></div>`;
                        }else{if(this.grid[i]==2){
                         html+=`<div><img src="Images/Cherry.png" width="42" height="42"></div>`;            
                        }else{if(this.grid[i]==3){
                         html+=`<div><img src="Images/Bomb.png" width="42" height="42"></div>`;  
                        }else{if(this.grid[i]==4){
                         html+=`<div><img src="Images/Coin.png" width="42" height="42"></div>`; 
                        }else{
                        html+=`<div></div>`;
                        }}}}}       
         div.innerHTML=html
    }
}
// class of map component
// drupal
const EMPTY=0;
const PACMAN=1;
const CHERRY=2;
const BOMB=3;
const COIN=4;
var pac_direction="right" ;//unde se uita pacman
var pac_explosion=false;
function endExplosion(){
    pac_explosion=false;
    m.render();
}
var health=100;
var score=0;
// cind ia moneta score +5, cind ia bomba health-50, cind pe visina 
// +30, daca viata e 0 de scris game over, de facut sa nu iasa in afara cimpului

class GameMap{
    constructor(){
        this.grid=[
            CHERRY,COIN,BOMB,EMPTY,PACMAN,BOMB,COIN,CHERRY,EMPTY,BOMB
             ]; //index 6
    }
    render(){
        var div=document.getElementById('map');
               var html= ``;
        //i-0 index de la 0
        for(var i=0; i<this.grid.length; i++){
                var c='';
            switch(this.grid[i]){
                    case EMPTY: break;
                    case PACMAN: c='Pacman'; 
                        if(pac_direction=="left"){
                        c+=' left';}                    
                         if(pac_explosion==true){
                        c+=' explosion';
                        // taimer pe o secunde
                        setTimeout(endExplosion, 1000);}                                                            
                         break;
                    case CHERRY: c='Cherry'; break;
                    case BOMB: c='Bomb'; break;                    
                    case COIN:c='Coin'; break;                    
            }                
        html+=`<div class="${c}"></div>`;} 
        div.innerHTML=html;        
}     
    action(){
        if(event.code=='ArrowLeft'){
            pac_direction="left";
            this.moveLeft();}
        if(event.code=='ArrowRight'){
            pac_direction="right";
            this.moveRight()}
    }
    moveLeft(){
            // find index pacman
        var index=this.grid.indexOf(PACMAN);
            // alert(index);
            // delete pacman for curent position
        this.grid[index]=0;
            // check wat is there?
        if(this.grid[index-1]==BOMB){
            pac_explosion=true;
            health-=50;
            var theEl = document.getElementById("health");
            theEl.innerHTML =`${health}`;        
        };  //daca este bomba reinscrie var cu true
        if(this.grid[index-1]==COIN){
            score+=5;
            var theElement = document.getElementById("coin");
            theElement.innerHTML =`${score}`;
        };
        if(this.grid[index-1]==CHERRY){
            health+=30;
            var theEl = document.getElementById("health");
            theEl.innerHTML =`${health}`;
        };
            // set pacman to next position
        if(this.grid[index-1]>=0){
            this.grid[index-1]=PACMAN;}
            else{PACMAN=this.grid[0]};
        if(health<=0){
            alert('Pacman died!');
        };
            // render result
    this.render();
    }
    moveRight(){
            // find index pacman
        var index=this.grid.indexOf(PACMAN);
            // alert(index);
            // delete pacman for curent position
        this.grid[index]=0;
            // set pacman to next position
        if(this.grid[index+1]==BOMB){
            pac_explosion=true;
            health-=50;
            var theEl = document.getElementById("health");
            theEl.innerHTML =`${health}`;
        };
        if(this.grid[index+1]==COIN){
            score+=5;
            var theElement = document.getElementById("coin");
            theElement.innerHTML =`${score}`;
        };
        if(this.grid[index+1]==CHERRY){
            health+=30;
            var theElement = document.getElementById("health");
            theElement.innerHTML =`${health}`;
        };
        if(this.grid[index+1]<9){
            this.grid[index+1]=PACMAN;          
        }else{PACMAN=this.grid[9]};      
            // render result
        if(health<=0){
            alert('Pacman died!');
        };
    this.render();        
    }    
};


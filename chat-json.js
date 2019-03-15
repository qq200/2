//sablonul mesajului

class Message{
    constructor(text,author){
        this.text=text;
        this.author=author;
        this.date=new Date();// current date time
    }
}
///////////////////////////////
var messages=[];
var messages2=messages
function addMessage(){
    var input=document.querySelector("#chat .input input");
    //2) validation:
    // mesage>=2 si nu include no space
    if(input.value.trim().length>2){     
    var m=new Message(input.value, "user");
        messages.push(m); // adauga in masiv la urma m
    // alert(input.value);
    localStorage.setItem("messages", JSON.stringify(messages));
    // console.log(messages)
    input.value="";
    showMesseges();
    }else{
        alert('no text')
    }
}
function loadMesages(){
    messages=JSON.parse(localStorage.getItem('messages'));
    if(messages==null){
        messages=[];
    }
    showMesseges();

}
function showMesseges(){
    var div=document.querySelector('#chat .messages');
    div.innerHTML="";
    for(var i in messages){
        var html=`<div class="messages">
        <p>${messages[i].text}<hr>
        <small>${messages[i].author}/${messages[i].date}</small>
        </p>
        </div>`;
        div.innerHTML+=html;
    }
    messages.length=8;
}

// var m=new Message("hello","osama_b");
// console.log(m);



//////de facut sa arate doar ultimile 8 mesaje if + break sau clon la ,essages
///// 2)

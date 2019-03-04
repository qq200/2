// baza de date
var user=[
    {
        avatar: "http://icons.iconarchive.com/icons/oxygen-icons.org/oxygen/48/Emotes-face-angel-icon.png",
        username: "adm1n",
    },
    {
        avatar: "http://icons.iconarchive.com/icons/hopstarter/superhero-avatar/48/Avengers-Captain-America-icon.png",
        username: "vasea",
    },
    {
        avatar: "http://icons.iconarchive.com/icons/hopstarter/superhero-avatar/48/Avengers-Iron-Man-icon.png",
        username: "petea",
    }
];

function showUser(index){ // arata 1 user
    // <div class="user">
    //         <img src="http://icons.iconarchive.com/icons/oxygen-icons.org/oxygen/48/Emotes-face-angel-icon.png" alt="">
    //         <a href="#">adm1n</a>
    // </div>
    var results_wrapper=document.querySelector('#results');
                // results_wrapper.innerHTML=`<div class="user">
                //         <img src="http://icons.iconarchive.com/icons/oxygen-icons.org/oxygen/48/Emotes-face-angel-icon.png" alt="">
                //         <a href="#">adm1n</a>
                //         </div>`;
    // in memorie adaugam un nou div
    var div = document.createElement('div');
    // adaugam clasa
    div.className = "user";
    // ceare img
    var img = document.createElement('img');
    // set src atribute
    img.setAttribute('src', user[index].avatar);
    // adauga a
    var a = document.createElement('a');
    a.setAttribute('href',"#");
    //set text inside
    a.innerText= user[index].username;
    // apend cildren
    div.appendChild(img);
    div.appendChild(a);
    // totul de pus in results
    results_wrapper.appendChild(div);
};

function showUserList(word){
    //!!!! clear
    for(var i=0; i<user.length; i++){
        //!!!!!! string
        if(user[i].username==word){
            showUser(i);
        };
        
    };
};
showUserList();

function search(){
    var input=document.getElementById('search').firstElementChild;
    var word=input.value;
    // alert(word);
    // console.dir(input);
    showUserList(word);
}


//sa lucreze VASEA, vasea, Vasea
//din introducerea vas sa afiseze Vasilisa, Vasia,
// inainte de afisare sa stearga tot



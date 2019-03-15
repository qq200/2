// functia incarca prin AJAX pagina care trebuie

function load(number){
    /// cream obiectul de legatura(telefon)
    var xhr=new XMLHttpRequest();
    // indicam ce ptebuie de facut
    xhr.open('GET', `pages/page${number}.html`);

        // data loaded
        xhr.onload=function(){
            // get respons
            //   alert(xhr.responseText);
            var div=document.querySelector("#content");
            div.innerHTML=xhr.responseText;
        }
    // de expediat instructia
    xhr.send();  

}
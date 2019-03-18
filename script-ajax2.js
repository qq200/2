// FUNCTIA SE VA CONECTA PRIN AJAX LA FIXER SI VA PRIMI DATELE VALUTARE
const URL="http://data.fixer.io/api/latest";
const KEY='4e3acf73c902c0c63d20650f37455fbe';
var data=null;


function saveData(data){
    localStorage.setItem('data', JSON.stringify(data));
    
}

function readData(){
    if(data==null){ return null}
    var data= JSON.parse(localStorage.getItem('data'));
    var today=new Date();
    var day=new Date(data.date)
    // verivicam daca datele sunt curente
    if(
        today.getFullYear()==day.getFullYear()&&
        today.getMonth()==day.getMonth()&&
        today.getDate()==day.getDate()
    ){
        return data
    }else{
        return null
    }
    console.log(data);
    return data;
}

function loadCurrencies(){
    data=readData();
    if(data==null){
    var xhr=new XMLHttpRequest();
    xhr.onload=function(){ //functia care asteapta sa se incarce datele
        data=JSON.parse(xhr.responseText);
        saveData(data);
        // alert(typeof xhr.responseText)
        showSelect(data.rates)
    }
    xhr.open('GET',URL + '?access_key=' + KEY);
    xhr.send();
    }else{
        showSelect(data.rates)
    }
}
function showSelect(rates){
    for(var code in rates){
        // console.log(code, rates[code]);
        document.getElementById('currency select').innerHTML+=`<option>${code}</option>`;
    }    
}

var slides=[    //masiv din obiecte
    { //index0
        title:"Buy an",
        src:"Images-Dom/aple-device.jpeg"

    },
    { //index1
        title:"Free vocation",
        src:"Images-Dom/bridge.jpeg"
    },
    { //index2
        title:"Women meditation",
        src:"Images-Dom/girls-river.jpeg",
        // buton_text: url;
    },
];

//logic
function showSlide(efect,n){  //conecteaza patratele imaginii
   //cautal divul
   let div_slide=document.querySelector('#carusel .slide');
    console.log(div_slide);
   for(var row=0; row<6; row++){

        for(var col=0; col<8; col++){
        let x=-100*col;
        let y=-100*row;
        let d=Math.random()/2;
        // let efect= 'flipInX';
        let src=slides[n].src;        
        let html=`<div style="background-image: url('${src}'); background-position: ${x}px ${y}px; animation-delay:${d}s;" class="box ${efect} animated">
        </div>`;
        div_slide.innerHTML+=html;
        }
    }
}
function titleShow(n){
    let tit=slides[n].title;
    let html2=`
    <h1 class="title">${tit}<br><button> Click </button></h1>
    `;
    document.querySelector('#carusel .slide').innerHTML+=html2;

}
showSlide('flip',2);
titleShow(2);


// titlul fiecarui element sa apara in h1
//un buton a cu url
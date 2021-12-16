//dati i seguenti 3 array
const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

//creo un ciclo per buttare nell'html l'immagine grossa centrale
let bigpicture = '';
let elementActive = 0;

for(let i=0; i< items.length; i++){
    bigpicture += `
        <div class="items" id="item-${i}"> 
            <img src="${items[i]}" alt="">
            <h1>${title[i]}</h1>
            <p>${text[i]}</p>
        </div>
    `;
}

//definisco a cosa aggiungere nell'html gli elementi dall'array delle foto
const picturecontainer = document.getElementById("picturecontainer");
picturecontainer.innerHTML = bigpicture;

//definisco la classe active per mostrare una sola alla volta
let itemsActive = document.getElementById("item-"+elementActive);
itemsActive.classList.add('active');


//creo un ciclo per buttare nell'html le miniature alla destra, assegno classe per mostrare solo 1 thumbnail alla volta
let thumbnails = '';

for(let i=0; i<items.length; i++){
    if(i==0){
        thumbnails += `
        <div class="ms_thumbnails ms_opacity-off" id="thumbnailitem-${i}">
            <img src="${items[i]}" alt=""> 
        </div>
    `;
    }else{
        thumbnails += `
        <div class="ms_thumbnails" id="thumbnailitem-${i}">
            <img src="${items[i]}" alt=""> 
        </div>
    `; 
    }
}

//definisco a cosa aggiungere nell'html le thumbnail sempre dall'array delle foto
const thumbnailscontainer = document.getElementById("thumbnailscontainer");
thumbnailscontainer.innerHTML = thumbnails;

//definisco la variabile per assegnare ad uno solo alla volta l'opacità e il bordo
let thumbnailActive = document.getElementById("thumbnailitem-"+elementActive);

//creo due variabili per richiamare le icone delle freccette
const prev = document.querySelector(".ms_chevron-up");
const next = document.querySelector(".ms_chevron-down");


//richiamo l'evento del click e relative propietà sulla freccia in giù
next.addEventListener("click", function(){
elementActive++;
if(elementActive > 4){
    elementActive = 0;
}
itemsActive.classList.remove("active"); 
itemsActive = document.getElementById("item-"+elementActive);
itemsActive.classList.add('active');
thumbnailActive.classList.remove("ms_opacity-off"); 
thumbnailActive = document.getElementById("thumbnailitem-"+elementActive);
thumbnailActive.classList.add('ms_opacity-off');
})

//richiamo l'evento del click e relative propieta sulla freccia su
prev.addEventListener("click", function(){
elementActive--;
if(elementActive < 0){
    elementActive = 4;
}  
itemsActive.classList.remove("active"); 
itemsActive = document.getElementById("item-"+elementActive);
itemsActive.classList.add('active');
thumbnailActive.classList.remove("ms_opacity-off"); 
thumbnailActive = document.getElementById("thumbnailitem-"+elementActive);
thumbnailActive.classList.add('ms_opacity-off');

})

let imagens =[
    'src/assets/home_imagem_1.jpg',
    'src/assets/home_imagem_2.jpg',
    'src/assets/home_imagem_3.jpg',
    'src/assets/home_imagem_4.jpg',
]

let i = 0;
let tempo = 3000;

function slideHome(){
    document.getElementById('image').src = imagens[i];
    i++;
    if(i == imagens.length){
        i=0;
    }
    setTimeout("slideHome()",tempo)
}
slideHome();
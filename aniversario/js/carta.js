/*====================================================
        CARTA.JS
        Feliz Aniversario Mi Amorcito ❤️
====================================================*/


const sobre = document.querySelector(".sobre");

const boton = document.getElementById("abrir");

const zonaPetalos = document.querySelector(".petalos");



/*=====================================
        ABRIR CARTA
=====================================*/


boton.addEventListener("click",()=>{


    sobre.classList.toggle("abierto");


    if(sobre.classList.contains("abierto")){


        boton.innerHTML =
        "❤️ Mi carta para ti ❤️";


        lluviaCorazones();


    }else{


        boton.innerHTML =
        "💌 Abrir mi carta";


    }


});




/*=====================================
        CREAR PÉTALOS
=====================================*/


function crearPetalos(){


    for(let i=0;i<60;i++){


        let petalo =
        document.createElement("span");


        petalo.classList.add("petalo");


        petalo.style.left =
        Math.random()*100+"%";



        petalo.style.top =
        "-50px";



        petalo.style.animationDuration =
        (Math.random()*8+8)+"s";



        petalo.style.animationDelay =
        Math.random()*10+"s";



        zonaPetalos.appendChild(
            petalo
        );

    }

}



crearPetalos();






/*=====================================
        CORAZONES AL ABRIR
=====================================*/


function lluviaCorazones(){


    for(let i=0;i<40;i++){


        let corazon =
        document.createElement("div");


        corazon.innerHTML="❤️";


        corazon.style.position="fixed";


        corazon.style.left =
        Math.random()*100+"%";


        corazon.style.top =
        "-30px";


        corazon.style.fontSize =
        Math.random()*30+20+"px";


        corazon.style.zIndex="9999";


        corazon.style.animation =
        `
        caerCorazon 
        ${Math.random()*3+3}s 
        linear
        `;



        document.body.appendChild(
            corazon
        );



        setTimeout(()=>{

            corazon.remove();

        },6000);


    }


}





/*=====================================
        CORAZONES AL HACER CLICK
=====================================*/


document.addEventListener(
"click",
(e)=>{


    let corazon =
    document.createElement("div");


    corazon.innerHTML="💖";


    corazon.style.position="fixed";


    corazon.style.left =
    e.clientX+"px";


    corazon.style.top =
    e.clientY+"px";


    corazon.style.fontSize="25px";


    corazon.style.zIndex="9999";


    corazon.style.pointerEvents="none";


    corazon.style.animation =
    "subirCorazon 2s forwards";



    document.body.appendChild(
        corazon
    );



    setTimeout(()=>{

        corazon.remove();

    },2000);



});





/*=====================================
        ANIMACIONES EXTRA
=====================================*/


const estilo =
document.createElement("style");


estilo.innerHTML=`

@keyframes caerCorazon{


0%{

transform:
translateY(-50px)
rotate(0deg);

opacity:1;

}



100%{

transform:
translateY(100vh)
rotate(360deg);

opacity:0;

}


}



@keyframes subirCorazon{


0%{

transform:
translateY(0)
scale(1);

opacity:1;

}



100%{

transform:
translateY(-150px)
scale(1.8);

opacity:0;

}


}


`;



document.head.appendChild(estilo);
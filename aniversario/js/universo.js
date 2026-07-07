/*====================================================
        UNIVERSO.JS
        Nuestro Universo ❤️🌌
====================================================*/


/*=====================================
        ELEMENTOS
=====================================*/

const botonCarta = document.getElementById("irCarta");

const universo = document.getElementById("universo");

const fechaInicio = new Date("2024-01-01");
// Cambia esta fecha por la fecha real de aniversario



/*=====================================
        IR A LA CARTA
=====================================*/


botonCarta.addEventListener("click",()=>{


    document.body.style.transition="1s";

    document.body.style.opacity="0";


    setTimeout(()=>{


        window.location.href="carta.html";


    },1000);


});



/*=====================================
        CONTADOR DE AMOR
=====================================*/


function actualizarContador(){


    const ahora = new Date();


    const tiempo =
    ahora - fechaInicio;



    const dias =
    Math.floor(
        tiempo /
        (1000*60*60*24)
    );



    const horas =
    Math.floor(
        tiempo /
        (1000*60*60)
    ) % 24;



    const minutos =
    Math.floor(
        tiempo /
        (1000*60)
    ) % 60;



    const segundos =
    Math.floor(
        tiempo /
        1000
    ) % 60;



    document.getElementById(
        "contadorTiempo"
    ).innerHTML =


    `${dias} días ❤️<br>
    ${horas} horas 
    ${minutos} minutos 
    ${segundos} segundos`;



}



setInterval(
    actualizarContador,
    1000
);


actualizarContador();




/*=====================================
        CREAR ESTRELLAS
=====================================*/


function crearEstrellas(){


    for(
        let i=0;
        i<180;
        i++
    ){


        const estrella =
        document.createElement("span");



        estrella.style.position="absolute";


        estrella.style.width =
        Math.random()*3+1+"px";


        estrella.style.height =
        estrella.style.width;



        estrella.style.background="white";


        estrella.style.borderRadius="50%";



        estrella.style.left =
        Math.random()*100+"%";



        estrella.style.top =
        Math.random()*100+"%";



        estrella.style.boxShadow =
        "0 0 10px white";



        estrella.style.animation =
        `
        brilloEstrella 
        ${Math.random()*4+2}s 
        infinite
        `;



        universo.appendChild(
            estrella
        );


    }


}


crearEstrellas();




/*=====================================
        CORAZONES AL CLICK
=====================================*/


document.addEventListener(
"click",
(e)=>{


    const corazon =
    document.createElement("div");



    corazon.innerHTML="❤️";


    corazon.style.position="fixed";


    corazon.style.left =
    e.clientX+"px";


    corazon.style.top =
    e.clientY+"px";


    corazon.style.fontSize =
    Math.random()*25+20+"px";


    corazon.style.zIndex="9999";


    corazon.style.pointerEvents="none";


    corazon.style.animation=
    "subirCorazon 2s forwards";



    document.body.appendChild(
        corazon
    );



    setTimeout(()=>{


        corazon.remove();


    },2000);


});





/*=====================================
        PARTICULAS DEL MOUSE
=====================================*/


document.addEventListener(
"mousemove",
(e)=>{


    const particula =
    document.createElement("span");



    particula.className="particula";


    particula.style.position="fixed";


    particula.style.left=
    e.clientX+"px";


    particula.style.top=
    e.clientY+"px";


    document.body.appendChild(
        particula
    );



    setTimeout(()=>{


        particula.remove();


    },1000);


});





/*=====================================
        ANIMACIONES EXTRA
=====================================*/


const estilo =
document.createElement("style");


estilo.innerHTML=`

@keyframes brilloEstrella{


0%{

opacity:.2;

transform:scale(.5);

}


50%{

opacity:1;

transform:scale(1.8);

}


100%{

opacity:.2;

transform:scale(.5);

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



.particula{


width:8px;

height:8px;

background:#ff9ccc;

border-radius:50%;

box-shadow:
0 0 15px #ff9ccc;


animation:
particulaDesaparece 1s forwards;


}



@keyframes particulaDesaparece{


from{

transform:scale(1);

opacity:1;

}


to{

transform:scale(0);

opacity:0;

}


}

`;



document.head.appendChild(
    estilo
);
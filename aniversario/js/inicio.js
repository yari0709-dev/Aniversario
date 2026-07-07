/*====================================================
        INICIO.JS
        Feliz Aniversario ❤️
====================================================*/


/*=====================================
        ELEMENTOS
=====================================*/

const botonEntrar = document.getElementById("entrar");

const musica = document.getElementById("musica");

const particles = document.getElementById("particles");



/*=====================================
        BOTÓN ENTRAR
=====================================*/


botonEntrar.addEventListener("click",()=>{


    // Reproducir música

    musica.play()
    .then(()=>{

        console.log("Música iniciada ❤️");

    })
    .catch(()=>{

        console.log(
            "El navegador bloqueó la reproducción automática"
        );

    });



    // Animación antes de cambiar

    document.body.style.transition="1s";

    document.body.style.opacity="0";



    setTimeout(()=>{


        window.location.href="universo.html";


    },1000);



});



/*=====================================
        PARTÍCULAS CON EL MOUSE
=====================================*/


document.addEventListener(
"mousemove",
(e)=>{


    const particula =
    document.createElement("span");


    particula.className="particula";


    particula.style.left=
    e.clientX+"px";


    particula.style.top=
    e.clientY+"px";



    particles.appendChild(
        particula
    );



    setTimeout(()=>{


        particula.remove();


    },1000);



});



/*=====================================
        CORAZONES AL HACER CLICK
=====================================*/


document.addEventListener(
"click",
(e)=>{


    const corazon =
    document.createElement("div");


    corazon.innerHTML="❤️";


    corazon.style.position="fixed";


    corazon.style.left=
    e.clientX+"px";


    corazon.style.top=
    e.clientY+"px";


    corazon.style.fontSize=
    Math.random()*30+20+"px";


    corazon.style.zIndex="999";


    corazon.style.pointerEvents="none";


    corazon.style.animation=
    "subirCorazonClick 2s ease forwards";



    document.body.appendChild(
        corazon
    );



    setTimeout(()=>{


        corazon.remove();


    },2000);



});



/*=====================================
        ESTRELLAS DINÁMICAS
=====================================*/


function crearEstrellas(){


    const contenedor =
    document.querySelector(
        ".bienvenida"
    );



    for(
        let i=0;
        i<120;
        i++
    ){


        let estrella =
        document.createElement(
            "span"
        );


        estrella.style.position="absolute";


        estrella.style.width=
        Math.random()*3+1+"px";


        estrella.style.height=
        estrella.style.width;



        estrella.style.background=
        "white";


        estrella.style.borderRadius=
        "50%";



        estrella.style.left=
        Math.random()*100+"%";



        estrella.style.top=
        Math.random()*100+"%";



        estrella.style.boxShadow=
        "0 0 10px white";



        estrella.style.animation=
        "brillarEstrella "+
        (Math.random()*3+2)
        +"s infinite";



        contenedor.appendChild(
            estrella
        );

    }

}


crearEstrellas();



/*=====================================
        ANIMACIÓN EXTRA
=====================================*/


const estilo =
document.createElement("style");


estilo.innerHTML=`

@keyframes subirCorazonClick{

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



@keyframes brillarEstrella{


    0%{

        opacity:.2;

        transform:scale(.5);

    }


    50%{

        opacity:1;

        transform:scale(1.5);

    }


    100%{

        opacity:.2;

        transform:scale(.5);

    }

}

`;



document.head.appendChild(
    estilo
);
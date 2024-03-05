let Chrono = {
    time : 120,
    convert : {
        minute : 0,
        seconde : 0,
    }
}


function chrono() {
    
    function chronoDecr() {
        if (Chrono.time > 0) {
            Chrono.time--;
            chronoConvert();
            chronoRender();
        }
        else {
            let message = document.querySelector("#chrono__end");
            message.style.display = "block";
        }
    }
        
    function chronoConvert() {
        Chrono.convert.minute = Math.floor(Chrono.time / 60);
        Chrono.convert.seconde = Chrono.time % 60;
    }
    
    function chronoRender() {
        let template = document.querySelector("#template__duree").innerHTML;
        template = template.replace("{{minute}}",Chrono.convert.minute);
        template = template.replace("{{seconde}}",Chrono.convert.seconde);
        document.querySelector("#chrono__container").innerHTML = template;
    }
        
    setInterval(chronoDecr, 1000);
        

}

let chrono_btn = document.querySelector("#chrono__btn");

function handlerChrono() {
    chrono_btn.style.display = "none";
    chrono();
}

chrono_btn.addEventListener("click", handlerChrono);
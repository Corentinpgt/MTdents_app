let container = document.querySelector("#container");
let page;


function chronoPage() {
    page = document.querySelector("#chrono");
    container.innerHTML=page.innerHTML;

    let Chrono = {
        time : 120,
        convert : {
            minute : 0,
            seconde : 0,
        },
        intervalID: null
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
                message.classList.remove("notview");
                clearInterval(Chrono.intervalID);
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
        
        Chrono.intervalID = setInterval(chronoDecr, 1000);
            
    
    }
    
    let chrono_btn = document.querySelector("#chrono__btn");
    
    function handlerChrono() {
        chrono_btn.style.display = "none";
        chrono();
    }
    
    chrono_btn.addEventListener("click", handlerChrono);
    
    
    let cross_btn = document.querySelector(".cross__svg");
    
    function handlerCrossBtn() {
        let eltdisplay = document.querySelector("#chrono__end");
        chrono_btn.style.display = "block";
        eltdisplay.classList.add("notview");
        Chrono.time = 120;
    }
    
    cross_btn.addEventListener("click", handlerCrossBtn);
}

if (localStorage.getItem("name")==null) {

    page = document.querySelector("#login");
    container.innerHTML = page.innerHTML;

    function accountPage() {
        let btn = document.querySelector("#btn-createAccount");
    
    
        function handlerCreate() {
            let name = document.querySelector("#name").value;
            let age = document.querySelector("#age").value;
            localStorage.setItem("name", name);
            localStorage.setItem("age", age);
            window.location.reload();
        }
    
        btn.addEventListener("click",handlerCreate);
    
    }
    
    accountPage();
}
else {

    chronoPage();
}







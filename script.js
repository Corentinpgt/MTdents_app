<<<<<<< HEAD
=======
let data = [
    {
        id : 1,
        cell : {
            img : "assets/icon.svg", // Ignoré car nous ne nous préoccupons pas de l'image
            title : "Introduction aux dents"
        },
        info : {
            title : "Introduction aux dents",
            text : "Les dents sont des parties de notre bouche qui nous aident à manger et à sourire. Elles sont très importantes pour notre santé. Savais-tu que les dents de lait sont les premières dents que nous avons quand nous sommes bébés ?"
        }
    },
    {
        id : 2,
        cell : {
            img : "assets/plus.svg", // Ignoré car nous ne nous préoccupons pas de l'image
            title : "Comment prendre soin de ses dents"
        },
        info : {
            title : "Comment prendre soin de ses dents",
            text : "Pour garder nos dents en bonne santé, nous devons les brosser deux fois par jour avec une brosse à dents et du dentifrice. Nous devons aussi éviter de manger trop de bonbons et de sucreries, car ils peuvent abîmer nos dents."
        }
    },
    {
        id : 3,
        cell : {
            img : "assets/plus.svg", // Ignoré car nous ne nous préoccupons pas de l'image
            title : "Visite chez le dentiste"
        },
        info : {
            title : "Visite chez le dentiste",
            text : "Il est important de rendre visite à notre dentiste régulièrement. Le dentiste peut vérifier si nos dents sont en bonne santé et nous montrer comment les garder propres. Ne t'inquiète pas, la visite chez le dentiste n'est pas effrayante !"
        }
    },
    {
        id : 4,
        cell : {
            img : "assets/sugar-cane.svg", // Ignoré car nous ne nous préoccupons pas de l'image
            title : "Les aliments pour des dents en bonne santé"
        },
        info : {
            title : "Les aliments pour des dents en bonne santé",
            text : "Certains aliments sont très bons pour nos dents, comme les fruits et les légumes. Le fromage et le lait sont aussi bons pour nos dents. Essayons de manger ces aliments plus souvent pour garder nos dents en bonne santé !"
        }
    },
];


function infoGenerator() {
    let container = document.querySelector("#container");

    function cellGenerator() {
        container.innerHTML="";
        let result = "";
        data.forEach(page => {
            let cell = page.cell;
            let template = document.querySelector("#template__info-cell").innerHTML;
            template = template.replaceAll("{{id}}", page.id);
            template = template.replace("{{src}}", cell.img);
            template = template.replace("{{title}}", cell.title);
            result+=template;
        });
        container.innerHTML=result;
    }
    cellGenerator();

    function pageGenerator(obj) {
        let item = obj.info;
        container.innerHTML="";
        let template = document.querySelector("#template__info").innerHTML;
        template = template.replace("{{info}}", item.text);
        template = template.replace("{{title}}", item.title);
        container.innerHTML=template;

    }

    function handlerCell(ev) {
        let id = ev.target.dataset.id;
        let info = data.find(objet => objet.id == id);
        pageGenerator(info);
    }

    let cells = document.querySelectorAll(".cell")

    cells.forEach(cell => {
        cell.addEventListener("click", handlerCell)
    });
}
infoGenerator();
>>>>>>> 0d25441b98fec981b6bbc2130f07d4dfe269316c

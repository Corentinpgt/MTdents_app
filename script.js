let container = document.querySelector("#container");
let page;



function chronoPage() {
  page = document.querySelector("#chronoPage");
  container.innerHTML = page.innerHTML;

  let Chrono = {
    time: 120,
    convert: {
      minute: 0,
      seconde: 0,
    },
    intervalID: null,
  };

  function chrono() {
    function chronoDecr() {
      if (Chrono.time > 0) {
        Chrono.time--;
        chronoConvert();
        chronoRender();
      } else {
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
      template = template.replace("{{minute}}", Chrono.convert.minute);
      template = template.replace("{{seconde}}", Chrono.convert.seconde);
      document.querySelector("#chrono__container").innerHTML = template;
    }

    Chrono.intervalID = setInterval(chronoDecr, 1000);
  }

  let chrono_btn = document.querySelector("#chrono__btn");
  let chro = document.querySelector("#chrono__container");

  function handlerChrono() {
    chrono_btn.classList.add("chrono__btn_anim");
    chro.classList.add("chrono__container_anim");
    chrono();
  }

  chrono_btn.addEventListener("click", handlerChrono);

  let cross_btn = document.querySelector(".cross__svg");

  function handlerCrossBtn() {
    let eltdisplay = document.querySelector("#chrono__end");
    eltdisplay.classList.add("notview");
    chrono_btn.classList.remove("chrono__btn_anim");
    chro.classList.remove("chrono__container_anim");
    Chrono.time = 120;
  }

  cross_btn.addEventListener("click", handlerCrossBtn);

  let back = document.querySelector("#backArrow");
  back.addEventListener("click", mainPage);
}

function qcmPage() {
    page = document.querySelector("#qcmPage");
    container.innerHTML = page.innerHTML;
  
    let qcm = {
      liste: [
        {
          id: 0,
          question: "Pourquoi est-il important de se brosser les dents ?",
          reponses: [
            { reponse: "Pour que les dents deviennent rouges", resultat: false },
            { reponse: "Pour que les dents poussent plus vite", resultat: false },
            {
              reponse:
                "Pour enlever les restes de nourriture et la plaque dentaire",
              resultat: true,
            },
          ],
        },
        {
          id: 1,
          question:
            "Combien de fois par jour devrions-nous nous brosser les dents ?",
          reponses: [
            { reponse: "Une fois par jour", resultat: false },
            { reponse: "Deux fois par jour", resultat: true },
            { reponse: "Trois fois par semaine", resultat: false },
          ],
        },
        {
          id: 2,
          question: "Quel aliment est bon pour les dents ?",
          reponses: [
            { reponse: "Les bonbons", resultat: false },
            { reponse: "Les fruits et légumes", resultat: true },
            { reponse: "Les chips", resultat: false },
          ],
        },
        {
          id: 3,
          question:
            "Que doit-on faire après avoir mangé des bonbons ou des gâteaux ?",
          reponses: [
            { reponse: "Boire du soda", resultat: false },
            { reponse: "Rester sans rien faire", resultat: false },
            { reponse: "Se brosser les dents", resultat: true },
          ],
        },
        {
          id: 4,
          question: "Qu'est-ce qui protège les dents ?",
          reponses: [
            { reponse: "Le sucre", resultat: false },
            { reponse: "L'émail", resultat: true },
            { reponse: "Le chocolat", resultat: false },
          ],
        },
        {
          id: 5,
          question: "Quel animal a les dents les plus tranchantes ?",
          reponses: [
            { reponse: "Chat", resultat: false },
            { reponse: "Crocodile", resultat: true },
            { reponse: "Lapin", resultat: false },
          ],
        },
        {
          id: 6,
          question: "Quel est le nom du médecin qui s'occupe de nos dents ?",
          reponses: [
            { reponse: "Un dentiste", resultat: true },
            { reponse: "Un boucher", resultat: false },
            { reponse: "Un électricien", resultat: false },
          ],
        },
        {
          id: 7,
          question: "Quelle couleur doivent être nos dents en bonne santé ?",
          reponses: [
            { reponse: "Jaune", resultat: false },
            { reponse: "Blanche", resultat: true },
            { reponse: "Violette", resultat: false },
          ],
        },
        {
          id: 8,
          question: "À quoi sert le fil dentaire ?",
          reponses: [
            { reponse: "À nettoyer les oreilles", resultat: false },
            { reponse: "À passer dans les cheveux", resultat: false },
            { reponse: "À nettoyer entre les dents", resultat: true },
          ],
        },
        {
          id: 9,
          question: "Que se passe-t-il si on ne se brosse pas les dents ?",
          reponses: [
            { reponse: "Rien", resultat: false },
            { reponse: "Les dents deviennent plus blanches", resultat: false },
            { reponse: "Les dents peuvent avoir des caries", resultat: true },
          ],
        },
      ],
      questions: [],
      score: 0,
    };
  
    let check = 0;
  
    function handlerAnswer(ev) {
      if (check == 0) {
        if (ev.target.dataset.result == "true") {
          check = 1;
          ev.target.style.backgroundColor = "green";
          qcm.score++;
        } else {
          check = 1;
          ev.target.style.backgroundColor = "red";
          document.querySelectorAll(".qcm__li").forEach((li) => {
            if (li.dataset.result == "true") {
              li.style.backgroundColor = "green";
            }
          });
        }
      }
    }
  
    function handlerNext() {
      if (check != 0) {
        progression++;
        if (progression == 4) {
          qcmRender();
          document.querySelector("#qcm__end").style.display = "flex";
        } else {
          qcmRender();
        }
        /* if (progression != 4) {
                qcmRender();
              } */
      }
    }
  
    let progression = 0;
    function qcmQuestions() {
      for (let i = 0; i < 5; i++) {
        const index = Math.floor(Math.random() * qcm.liste.length);
        qcm.questions.push(qcm.liste.splice(index, 1)[0]);
      }
    }
    qcmQuestions();
  
    function qcmRender() {
      check = 0;
      let quest = qcm.questions[progression];
      let template = document.querySelector("#qcm__template").innerHTML;
      template = template.replace("{{progression}}", progression + 1);
      template = template.replace("{{question}}", quest.question);
      template = template.replace("{{result1}}", quest.reponses[0].resultat);
      template = template.replace("{{result2}}", quest.reponses[1].resultat);
      template = template.replace("{{result3}}", quest.reponses[2].resultat);
      template = template.replace("{{reponse1}}", quest.reponses[0].reponse);
      template = template.replace("{{reponse2}}", quest.reponses[1].reponse);
      template = template.replace("{{reponse3}}", quest.reponses[2].reponse);
      template = template.replace("{{score}}", conversionScore(qcm.score));
      template = template.replace("{{text}}", textPersonalise(qcm.score));
      document.querySelector("#qcm__container").innerHTML = template;
  
      let answer = document.querySelectorAll(".qcm__li");
      answer.forEach((answer) => {
        answer.addEventListener("click", handlerAnswer);
      });
  
      let next = document.querySelector("#btn-next");
      next.addEventListener("click", handlerNext);
      if (progression == 3) {
        next.textContent = "Terminer le quizz";
      }
  
      let cross = document.querySelector("#cross__svg");
      cross.addEventListener("click", handlerCrossBtn);
  
      function handlerCrossBtn() {
        document.querySelector("#qcm__end").style.display = "none";
        progression = 0;
        qcm.score = 0;
        qcmRender();
        let back = document.querySelector("#backArrow");
        back.addEventListener("click", mainPage);
      }
    }
  
    function conversionScore(score) {
      let calculScore = (score * 10) / 4;
      return (text = `${calculScore}/10`);
    }
  
    function textPersonalise(score) {
      let message = "";
      let calculScore = (score * 10) / 4;
      if (calculScore > 0) {
        message = "C'est pas super génial.";
  
        if (calculScore == 5) {
          message = "C'est moyen, ni trop bien ni trop mal.";
        } else if (calculScore == 10) {
          message = "Bravo ! Tu n'as commis aucune erreur !";
        } else {
          message = "C'est pas mal du tout ! C'est une bonne note !";
        }
      } else {
        message = "Oops, quelque chose ne va pas.";
      }
  
      return message;
    }
  
    qcmRender();
    let back = document.querySelector("#backArrow");
    back.addEventListener("click", mainPage);
}

function accountPage() {
  let btn = document.querySelector("#btn-createAccount");

  function handlerCreate() {
    let name = document.querySelector("#name").value;
    let age = document.querySelector("#age").value;
    localStorage.setItem("name", name);
    localStorage.setItem("age", age);
    window.location.reload();
  }

  btn.addEventListener("click", handlerCreate);
}

function infoPage() {

    page = document.querySelector("#infoPage");
    container.innerHTML = page.innerHTML;


    let data = [
        {
            id : 1,
            cell : {
                img : "assets/logo_dent.svg", // Ignoré car nous ne nous préoccupons pas de l'image
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
                img : "assets/logo_sugar.svg", // Ignoré car nous ne nous préoccupons pas de l'image
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
                img : "assets/logo_dent.svg", // Ignoré car nous ne nous préoccupons pas de l'image
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
                img : "assets/logo_couvert.svg", // Ignoré car nous ne nous préoccupons pas de l'image
                title : "Les aliments pour des dents en bonne santé"
            },
            info : {
                title : "Les aliments pour des dents en bonne santé",
                text : "Certains aliments sont très bons pour nos dents, comme les fruits et les légumes. Le fromage et le lait sont aussi bons pour nos dents. Essayons de manger ces aliments plus souvent pour garder nos dents en bonne santé !"
            }
        },
    ];
    
    

    let useContainer = document.querySelector("#info__container");

    function cellGenerator() {
        useContainer.innerHTML="";
        let result = "";
        data.forEach(page => {
            let cell = page.cell;
            let template = document.querySelector("#template__info-cell").innerHTML;
            template = template.replaceAll("{{id}}", page.id);
            template = template.replace("{{src}}", cell.img);
            template = template.replace("{{title}}", cell.title);
            result+=template;
        });
        useContainer.innerHTML=result;
    }
    cellGenerator();
    
    function pageGenerator(obj) {
        let item = obj.info;
        useContainer.innerHTML="";
        useContainer.classList.add('cell_container');
        useContainer.classList.remove('container');
        let template = document.querySelector("#template__info").innerHTML;
        template = template.replace("{{info}}", item.text);
        template = template.replace("{{title}}", item.title);
        useContainer.innerHTML=template;

        let regenerateArrow = document.querySelector("#infoArrow");
        regenerateArrow.addEventListener("click",infoPage);

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
    
    let back = document.querySelector("#backArrow");
    back.addEventListener("click", mainPage);
}

function mainPage() {
  page = document.querySelector("#mainPage");
  container.innerHTML = page.innerHTML;

  function profileGenerator() {
    let profile = document.querySelector("#profile").innerHTML;
    profile = profile.replace("{{name}}", localStorage.getItem("name"));
    profile = profile.replace("{{age}}", localStorage.getItem("age"));
    document.querySelector("#profile_container").innerHTML = profile;
  }

  profileGenerator();

  let deleteAccount = document.querySelector("#delete");

  function handlerDelete() {
    localStorage.removeItem("name");
    localStorage.removeItem("age");
    window.location.reload();
  }

  deleteAccount.addEventListener("click", handlerDelete);

  let chrono = document.querySelector("#chrono");
  chrono.addEventListener("click", chronoPage);

  let info = document.querySelector("#info");
  info.addEventListener("click", infoPage);

  let quizz = document.querySelector("#quizz");
  quizz.addEventListener("click", qcmPage);

}

if (localStorage.getItem("name") == null) {
  page = document.querySelector("#loginPage");
  container.innerHTML = page.innerHTML;
  accountPage();
} else {
  mainPage();
}

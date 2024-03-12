let qcm = {
  liste: [
    {
      id: 0,
      question: "Pourquoi est-il important de se brosser les dents ?",
      reponses: [
        { reponse: "Pour que les dents deviennent rouges", resultat: false },
        { reponse: "Pour que les dents poussent plus vite", resultat: false },
        { reponse: "Pour enlever les restes de nourriture et la plaque dentaire", resultat: true },
      ],
    },
    {
      id: 1,
      question: "Combien de fois par jour devrions-nous nous brosser les dents ?",
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
      question: "Que doit-on faire après avoir mangé des bonbons ou des gâteaux ?",
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
  questions : [],
  score : 0,
};




function qcmGenerator() {

  let check = 0;


  function handlerAnswer(ev) {
    if(check==0) {

      if (ev.target.dataset.result=="true") {
        check=1;
        ev.target.style.backgroundColor  = "green";
        qcm.score++;
      }

      else {
        check=1;
        ev.target.style.backgroundColor  = "red";
        document.querySelectorAll(".qcm__li").forEach(li => {
          if(li.dataset.result == "true") {
            li.style.backgroundColor  = "green";
          }

        });

      }
    }

  }

  function handlerNext(ev) {
    progression++;
    if (progression==4) {
      document.querySelector("#qcm__end").style.display = "block";
    }
    if (progression != 4) {
      qcmRender();
    }
    
  }

  let progression = 0;
  function qcmQuestions() {
      for (let i = 0; i < 4; i++) {
          const index = Math.floor(Math.random() * qcm.liste.length);
          qcm.questions.push(qcm.liste.splice(index, 1)[0]);
      }
  }
  qcmQuestions();
  console.log(qcm.questions);

  function qcmRender() {
    check=0;
    let quest = qcm.questions[progression];
    console.log(quest);
    let template = document.querySelector("#template__qcm").innerHTML;
    template = template.replace("{{question}}", quest.question);
    template = template.replace("{{result1}}", quest.reponses[0].resultat);
    template = template.replace("{{result2}}", quest.reponses[1].resultat);
    template = template.replace("{{result3}}", quest.reponses[2].resultat);
    template = template.replace("{{reponse1}}", quest.reponses[0].reponse);
    template = template.replace("{{reponse2}}", quest.reponses[1].reponse);
    template = template.replace("{{reponse3}}", quest.reponses[2].reponse);
    document.querySelector("#container").innerHTML = template;

    
    
    let next = document.querySelector("#btn-next");
    next.addEventListener("click", handlerNext);
    if (progression==3) {
      next.textContent = "Terminer le quizz";
    }

    let answer = document.querySelectorAll(".qcm__li");
    answer.forEach(answer => {
      answer.addEventListener("click", handlerAnswer);
    });

  }
  qcmRender();


  



}

qcmGenerator();
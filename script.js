function accountPage() {
    let btn = document.querySelector("#btn-createAccount");


    function handlerCreate() {
        let name = document.querySelector("#name").value;
        let age = document.querySelector("#age").value;
        localStorage.setItem("name", name);
        localStorage.setItem("age", age);
    }

    btn.addEventListener("click",handlerCreate);

}

accountPage();


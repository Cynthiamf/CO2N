const profil = document.getElementById("btn_profil");
const dons = document.getElementById("btn_dons");
const compensations = document.getElementById("btn_compensations");
const actions = document.getElementById("btn_actions");

const cont_profil = document.getElementById("content_profil");
const cont_dons = document.getElementById("content_dons");
const cont_compensations = document.getElementById("content_compensations");
const cont_actions = document.getElementById("content_actions");

console.log(cont_dons);
// if (profil.getElementById(id).style.display == "none") {
//     profil.getElementById(id).style.display = "block";
// } else {
//     profil.getElementById(id).style.display = "none";
// }


let side_tab = document.querySelectorAll(".vert_item");
side_tab = [...side_tab];

let content_tab = document.querySelectorAll(".content");
content_tab = [...content_tab];



function displayCont() {
    content_tab.map(el => el.className = "content")
    if (profil.className == "vert_item_active") {
        cont_profil.className = "content_active";
    }
    if (dons.className == "vert_item_active") {
        cont_dons.className = "content_active";
    }
    if (compensations.className == "vert_item_active") {
        cont_compensations.className = "content_active";
    }
    if (actions.className == "vert_item_active") {
        cont_actions.className = "content_active";
    }
}

side_tab.forEach((el) => {
    el.addEventListener("click", () => {
        side_tab.map(el => el.className = "vert_item")
        el.className = "vert_item_active";
        displayCont();

    })

})



function displayCont() {
    content_tab.map(el => el.className = "content")
    if (profil.className == "vert_item_active") {
        cont_profil.className = "content_active";
    }
    if (dons.className == "vert_item_active") {
        cont_dons.className = "content_active";
    }
    if (compensations.className == "vert_item_active") {
        cont_compensations.className = "content_active";
    }
    if (actions.className == "vert_item_active") {
        cont_actions.className = "content_active";
    }
}
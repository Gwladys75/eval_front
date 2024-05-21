
// Page contact

let infos = document.querySelectorAll('.infos');
console.log(infos);

infos.forEach(profil => {

    // au survole de la souris sur profil
    profil.addEventListener('mouseover', () => {


        profil.classList.remove('blanc');
        profil.classList.add('white');



    })


    // quand la souris quitte profil

    profil.addEventListener('mouseout', () => {

        profil.classList.add('blanc');
        profil.classList.remove('white');

    })


});



//Page formulaire 


let inscription = document.getElementById("inscription");

let erreur;
let prenom = document.getElementById("prenom");
let nom = document.getElementById("nom");
let email = document.getElementById("email");



inscription.addEventListener("submit", function (e) {

    e.preventDefault(); // empeche le rechargement de la page
    
    // if (inscription.getElementById("prenom").value== "") {
    //     erreur = "Veillez renseigner votre prénom";

    // }

    // inscription.getElementById("prenom").value== "";
    // inscription.getElementById("prenom").value== "";
    // inscription.getElementById("prenom").value== "";

    //syntax raccourci

    if (!prenom.value) {
        erreur = "Veillez renseigner votre prénom";
    }
    if (!nom.value) {
        erreur = "Veillez renseigner votre nom";
    }
    if (!email.value) {
        erreur = "Veillez renseigner un email";
    }

    if (erreur) {
        e.preventDefault();
        inscription.getElementById("erreur").innerHTML = erreur;
        // return false;
    } else {
        alert('Formulaire envoyé !');
    }

        // alert('Formulaire envoyé !');


});
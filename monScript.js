var pvEnnemi1Html = document.getElementById("PVMonstre1");
var pvEnnemi1 = "100";
var pvEnnemi2Html = document.getElementById("PVMonstre2");
var pvEnnemi2 = "100";
var pvEnnemi3Html = document.getElementById("PVMonstre3");
var pvEnnemi3 = "100";
var Attaque = document.getElementById("attaque");
var imgMonstre1 = document.getElementById("imgMonstre1");
var imgMonstre2 = document.getElementById("imgMonstre2");
var imgMonstre3 = document.getElementById("imgMonstre3");
var imgPerso1 = document.getElementById("imgPerso1");
var imgPerso2 = document.getElementById("imgPerso2");
var imgPerso3 = document.getElementById("imgPerso3");
var imgPerso4 = document.getElementById("imgPerso4");
var pvHero1Html = document.getElementById("PVHero1");
var pvHero2Html = document.getElementById("PVHero2");
var pvHero3Html = document.getElementById("PVHero3");
var pvHero4Html = document.getElementById("PVHero4");
var pvHero1 = "100";
var pvHero2 = "100";
var pvHero3 = "100";
var pvHero4 = "100";
var TourPerso = "1";
var cible = "0";
var degatsMonstre1 = "0";
var degatsMonstre2 = "0";
var degatsMonstre3 = "0";
var finDePartie = false;
var Victoire = false;
var Defaite = false;
var playHtml = document.getElementById("play");

function mort(){        //cacher les personnages à leur mort
    if (pvHero1 <= 0){
        imgPerso1.hidden = true;
    }
    else if (pvHero2 <= 0){
        imgPerso2.hidden = true;
    }
    else if (pvHero3 <= 0){
        imgPerso3.hidden = true;
    }
    else if (pvHero4 <= 0){
        imgPerso4.hidden = true;
    }
    else if (pvEnnemi1 <= 0){
        imgMonstre1.hidden = true;
    }
    else if (pvEnnemi2 <= 0){
        imgMonstre2.hidden = true;
    }
    else if (pvEnnemi3 <= 0){
        imgMonstre3.hidden = true;
    }
}

function tour(){            //fonction pour les tour de jeu
    if (TourPerso == 1){
        TourPerso += 1
    }
    else if (TourPerso == 2){
        TourPerso +=1
    }
    else if (TourPerso == 3){
        TourPerso +=1
    }
    else {
        TourPerso +=1
    }
}
 function tourmonstre(){        //fonction pour le tour des monstres
    if (TourPerso == 5){
        attaqueMonstre1
        attaqueMonstre2
        attaqueMonstre3
    }
    TourPerso = 1;
 }



function degatsEnnemi1()                        //fonctions degats sur les monstres
{
    pvEnnemi1 -= 10;
    pvEnnemi1Html.innerHTML = pvEnnemi1;
}

function degatsEnnemi2(){
    pvEnnemi2 -= 10;
    pvEnnemi2Html.innerHTML = pvEnnemi2;
}

function degatsEnnemi3(){
    pvEnnemi3 -= 10;
    pvEnnemi3Html.innerHTML = pvEnnemi3;
}

function attaquer1(){                   //fonctions pour les attaques de chaques persos
    imgMonstre1.onclick=degatsEnnemi1;   
    imgMonstre2.onclick=degatsEnnemi2;
    imgMonstre3.onclick=degatsEnnemi3;          
}
function attaquer2(){
    imgMonstre1.onclick=degatsEnnemi1;   
    imgMonstre2.onclick=degatsEnnemi2;
    imgMonstre3.onclick=degatsEnnemi3;          
}
function attaquer3(){
    imgMonstre1.onclick=degatsEnnemi1;   
    imgMonstre2.onclick=degatsEnnemi2;
    imgMonstre3.onclick=degatsEnnemi3;          
}
function attaquer4(){
    imgMonstre1.onclick=degatsEnnemi1;   
    imgMonstre2.onclick=degatsEnnemi2;
    imgMonstre3.onclick=degatsEnnemi3;          
}

function soin(){                        //fonction pouvoir de soin
    pvHero1 -= (-10);
    pvHero2 -= (-10);
    pvHero3 -= (-10);
    pvHero4 -= (-10);   
    pvHero1Html.innerHTML = pvHero1;
    pvHero2Html.innerHTML = pvHero2;
    pvHero3Html.innerHTML = pvHero3;
    pvHero4Html.innerHTML = pvHero4;
}


function attaqueMonstre1(){                                 //fonctions d'attaque random des monstres
    degatsMonstre1 = Math.floor(Math.random() * 25) + 15;
    cible = Math.floor(Math.random() * 4) + 1;
    if (cible == 1){
        pvHero1 -= degatsMonstre1
        pvHero1Html.innerHTML = pvHero1
    }
    else if (cible == 2){
        pvHero2 -= degatsMonstre1
        pvHero2Html.innerHTML = pvHero2
    }
    else if (cible == 3){
        pvHero3 -= degatsMonstre1
        pvHero3Html.innerHTML = pvHero3
    }
    else{
        pvHero4 -= degatsMonstre1
        pvHero4Html.innerHTML = pvHero4
    }

}

function attaqueMonstre2(){
    degatsMonstre2 = Math.floor(Math.random() * 25) + 15;
    cible = Math.floor(Math.random() * 4) + 1;
    if (cible == 1){
        pvHero1 -= degatsMonstre2
        pvHero1Html.innerHTML = pvHero1
    }
    else if (cible == 2){
        pvHero2 -= degatsMonstre2
        pvHero2Html.innerHTML = pvHero2
    }
    else if (cible == 3){
        pvHero3 -= degatsMonstre2
        pvHero3Html.innerHTML = pvHero3
    }
    else{
        pvHero4 -= degatsMonstre2
        pvHero4Html.innerHTML = pvHero4
    }

}

function attaqueMonstre3(){
    degatsMonstre3 = Math.floor(Math.random() * 25) + 15;
    cible = Math.floor(Math.random() * 4) + 1;
    if (cible == 1){
        pvHero1 -= degatsMonstre3
        pvHero1Html.innerHTML = pvHero1
    }
    else if (cible == 2){
        pvHero2 -= degatsMonstre3
        pvHero2Html.innerHTML = pvHero2
    }
    else if (cible == 3){
        pvHero3 -= degatsMonstre3
        pvHero3Html.innerHTML = pvHero3
    }
    else{
        pvHero4 -= degatsMonstre3
        pvHero4Html.innerHTML = pvHero4
    }

}

function actionsPerso1(){               //fonction d'attaque des persos par rapport a leur place dans le tour
    if (TourPerso = 1){
        attaquer1
    }
    else{
        attaquer = null
    }
}
function actionsPerso2(){
    if (TourPerso = 2){
        attaquer2
    }
    else{
        attaquer = null
    }
}
function actionsPerso3(){
    if (TourPerso = 3){
        attaquer3
    }
    else{
        attaquer = null
    }
}
function actionsPerso4(){
    if (TourPerso = 4){
        attaquer4
    }
    else{
        attaquer = null
    }
}

function victoiretrue(){                                        //fonctions de victoire défaite et fin de partie
    if(pvEnnemi1 <= 0 && pvEnnemi2 <= 0 && pvEnnemi3 <= 0){
        Victoire = true
    }
}

function defaitetrue(){
    if(pvHero1 <=0 && pvHero2 <=0 && pvHero3 <=0 && pvHero4 <=0 ){
        Defaite = true
    }
}
function WinLose(){
    if(Victoire == true|| Defaite == true){
        finDePartie = true;
    }

}

function play(){                            //fonction de jeu
    hideplay
    while (finDePartie = false){
        actionsPerso1
        tour
        actionsPerso1
        tour
        actionsPerso1
        tour
        actionsPerso1
        tour
        tourmonstre
        mort
        victoiretrue
        defaitetrue
        WinLose
    }
}
function hideplay(){                                //fonction pour cacher le bouton play
    playHtml.style.onclick.visibility = "hidden"
}
 

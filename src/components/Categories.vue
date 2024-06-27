<template>
    <div class="container-fluid scrollmenu">
        <span class="item">Categorii</span>
        <a class="item" href="#news"><img src="../assets/categories-images/seed-bag.png" alt="">Semințe de legume</a>
        <a class="item" href="#news"><img src="../assets/categories-images/fertilize.png" alt="">Îngrășăminte</a>
        <a class="item" href="#news"><img src="../assets/categories-images/pesticide.png" alt="">Pesticide</a>
        <a class="item" href="#news"><img src="../assets/categories-images/soil.png" alt="">Substrat de turbă</a>
        <a class="item" href="#news"><img src="../assets/categories-images/bio.png" alt="">Combatere Biologică</a>
        <a class="item" href="#news"><img src="../assets/categories-images/greenhouse.png" alt="">Folie</a>
        <a class="item" href="#news"><img src="../assets/categories-images/sprinkler.png" alt="">Sisteme de irigare</a>
        <a class="item" href="#news"><img src="../assets/categories-images/farming.png" alt="">Echipamente Solarii</a>
        <a class="item" href="#news"><img src="../assets/categories-images/baking-tray.png" alt="">Pahare și tăvi (alveole)</a>
        <a class="item" href="#news"><img src="../assets/categories-images/home.png" alt="">Casă și grădină</a>
        <a class="item" href="#news"><img src="../assets/categories-images/watering-can.png" alt="">Utilaje Agricole</a>
    </div>
</template>

<style scoped>
div.scrollmenu {
    margin: 30px 0 30px 0;
    background-color: whitesmoke;
    overflow: auto;
    white-space: nowrap;
    display: flex;
    align-items: center;
}

div.scrollmenu a {
    color: #333;
    text-align: center;
    padding: 10px 15px;
    background-color: white;
    text-decoration: none;
    border-radius: 30px;
    margin: 5px;
    display: flex;
}
div.scrollmenu a img {
    height: 25px;
    margin-right: 5px;
}
div.scrollmenu span {
    background-color: var(--primaryColor);
    display: inline-block;
    text-align: center;
    padding: 10px 15px;
    text-decoration: none;
    color: white;
    border-radius: 30px;
}

div.scrollmenu a:hover {
    background-color: var(--primaryColor);
    color: white;
}
</style>
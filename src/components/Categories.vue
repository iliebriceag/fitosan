<template>
    <div class="container-fluid scrollmenu">
        <span class="item">Categorii</span>
        <a class="item" href="#news">Seminte legume</a>
        <a class="item" href="#news">Produse bio</a>
        <a class="item" href="#news">Pesticide</a>
        <a class="item" href="#news">Folie</a>
        <a class="item" href="#news">Folie profesionala</a>
        <a class="item" href="#news">Ingrasaminte</a>
        <a class="item" href="#news">Combatere biologica</a>
        <a class="item" href="#news">Accesorii udat</a>
        <a class="item" href="#news">Produse pentru rasaduri</a>
        <a class="item" href="#news">Protectia plantelor</a>
        <a class="item" href="#news">Accesorii sere</a>
    </div>
</template>

<style scoped>
div.scrollmenu {
    margin: 30px 0 30px 0;
    background-color: whitesmoke;
    overflow: auto;
    white-space: nowrap;
}

div.scrollmenu a {
    display: inline-block;
    color: #333;
    text-align: center;
    padding: 10px 15px;
    background-color: white;
    text-decoration: none;
    border-radius: 30px;
    margin: 5px;
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
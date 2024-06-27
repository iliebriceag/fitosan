<template>

    <div class="container-fluid nav-search">
        <a href="#"><i class="bi bi-facebook"></i></a>
        <a href="#" class="px-3"><i class="bi bi-instagram"></i></a>
        <a href="#" class="px-1"><i class="bi bi-youtube"></i></a>
        <input class="form-control me-2 ms-2 search" type="search" placeholder="Caută produs ..." aria-label="Search">
        <button class="btn d-flex align-items-center search-btn"><i class="bi bi-search"></i></button>
    </div>
</template>

<style lang='scss' scoped>
@media only screen and (min-width : 991px) {
    .nav-search {
        display: none;
        opacity: 0;
    }
}

.nav-search {
    position: absolute;
    background-color: var(--primaryColor);
    top: 50px;
    padding: 8px;
    display: flex;
}

.nav-search a {
    text-decoration: none;
    color: white;
    font-size: 1.2rem;
    margin-top: 5px;
}

.search {
    border-radius: 30px;
}

.search-btn {
    background-color: #234b35d3;
    text-decoration: none;
    color: white;
    border-radius: 20px;
    text-transform: uppercase;
    font-weight: 200;
    font-size: .8rem;


    &:hover {
        background-color: white;
        color: #333;
        transition: .3s;
    }
}
</style>
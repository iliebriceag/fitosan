<template>
    <!-- top bar -->
    <div class="bg-dark top-bar  d-none d-lg-flex">
        <div class="container-fluid py-2 text-white">
            <div class="d-flex align-items-center me-1">
                <a href="https://www.facebook.com/"><i class="bi bi-facebook"></i></a>
                <a href="https://www.instagram.com/" class="px-3"><i class="bi bi-instagram"></i></a>
                <a href="https://ro.linkedin.com/"><i class="bi bi-youtube"></i></a>
                <div class="top-bar-contact ms-auto d-flex align-items-center">
                    <small class="px-1"><i class="bi bi-geo-alt px-1"></i>Str. Ștefan Cel Mare, Nr.
                        577, Matca, Jud. Galați
                    </small>
                    <small class="px-1"><i class="bi bi-telephone px-1"></i>+01 2345 6789</small>
                    <small class="px-1"><i class="bi bi-envelope-open px-1"></i>contact@VallAgroPlant.ro</small>
                </div>
            </div>
        </div>
    </div>

    <!-- navbar -->
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid menu">
            <router-link class="navbar-brand mt-2" to="/" @click="scrollToTop()">
                <h2 class="logo"><span class="logospan">VallAgro</span>Plant</h2>
            </router-link>


            <button class="navbar-toggler hamburger__btn" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                aria-label="Toggle navigation" @click="navOpen = !navOpen" v-bind:class="{ active: navOpen }">
                <span class="top"></span>
                <span class="mid"></span>
                <span class="bottom"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarTogglerDemo02" :class="!visible ? 'collapse' : ''">
                <div class="navbar-nav ms-auto mb-2 mb-lg-0">

                    <div class="nav-item me-4 nav-search d-none d-lg-flex">
                        <input class="form-control me-2 search" type="search" placeholder="Caută produs ..."
                            aria-label="Search">
                        <button class="btn d-flex align-items-center search-btn"><i class="bi bi-search"></i></button>
                    </div>
                    <div class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Categorii
                        </a>
                        <div class="dropdown-menu .menu-drop-anm">
                            <a class="item" href="#news"><img src="../assets/categories-images/seed-bag.png"
                                    alt="">Semințe de legume</a>
                            <a class="item" href="#news"><img src="../assets/categories-images/fertilize.png"
                                    alt="">Îngrășăminte</a>
                            <a class="item" href="#news"><img src="../assets/categories-images/pesticide.png"
                                    alt="">Pesticide</a>
                            <a class="item" href="#news"><img src="../assets/categories-images/soil.png" alt="">Substrat
                                de turbă</a>
                            <a class="item" href="#news"><img src="../assets/categories-images/bio.png" alt="">Combatere
                                Biologică</a>
                            <a class="item" href="#news"><img src="../assets/categories-images/greenhouse.png"
                                    alt="">Folie</a>
                            <a class="item" href="#news"><img src="../assets/categories-images/sprinkler.png"
                                    alt="">Sisteme de irigare</a>
                            <a class="item" href="#news"><img src="../assets/categories-images/farming.png"
                                    alt="">Echipamente Solarii</a>
                            <a class="item" href="#news"><img src="../assets/categories-images/baking-tray.png"
                                    alt="">Pahare și tăvi (alveole)</a>
                            <a class="item" href="#news"><img src="../assets/categories-images/home.png" alt="">Casă și
                                grădină</a>
                            <a class="item" href="#news"><img src="../assets/categories-images/watering-can.png"
                                    alt="">Utilaje Agricole</a>
                        </div>
                    </div>
                    <div class="nav-item">
                        <router-link class="nav-link text-white" to="/consultanta"
                            @click="visible = !visible, navOpen = !navOpen, scrollToTop()">consultanță</router-link>
                    </div>
                    <div class="nav-item">
                        <router-link class="nav-link text-white" to="/program"
                            @click="visible = !visible, navOpen = !navOpen, scrollToTop()">Program</router-link>
                    </div>
                    <div class="nav-item">
                        <router-link class="nav-link text-white" to="/contact"
                            @click="visible = !visible, navOpen = !navOpen, scrollToTop()">Contact</router-link>
                    </div>
                    <div class="nav-item">
                        <router-link class="nav-link text-white" to="/despre"
                            @click="visible = !visible, navOpen = !navOpen, scrollToTop()">Despre</router-link>
                    </div>
                    <div class="mobile">

                        <div class="nav-item"><i class="bi bi-geo-alt-fill px-1"></i>Str. Ștefan Cel Mare, Nr. 577,
                            Matca, Jud. Galați
                        </div>
                        <div class="nav-item"><i class="bi bi-telephone-fill px-1"></i>+01 2345 6789</div>
                        <div class="nav-item"><i class="bi bi-envelope-fill px-1"></i>contact@VallAgroPlant.ro</div>


                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<style scoped lang="scss">
.dropdown-menu {
    min-width: 230px;
}

.dropdown-menu a {
    color: #333;
    text-align: center;
    padding: 10px 15px;
    background-color: white;
    text-decoration: none;
    border-radius: 30px;
    margin: 5px;
    display: flex;
    align-items: center;
    font-size: .8rem;
}

.dropdown-menu a:hover {
    background-color: var(--primaryColor);
    color: white;
}

.dropdown-menu a img {
    height: 25px;
    margin-right: 5px;
}

.logo {
    color: white;
    font-weight: 800;
}

.logo .logospan {
    color: var(--primaryColor);
}

.search {
    border-radius: 30px;
}

.nav-serach {
    width: 100%;
}

.nav-pills .nav-link.active {
    background-color: var(--primaryColor) !important;
    border-radius: 3px;
}

.product-categ {
    margin-bottom: 10px;
    box-shadow: 0 3px 6px rgba(255, 255, 255, 0.16), 0 3px 6px rgba(255, 255, 255, 0.23);
    padding: 5px;
}

.product a {
    text-decoration: none;
    color: white;
    padding: 3px 0 3px 0;
}

.product a:hover {
    background-color: var(--primaryColor);
    border-radius: 3px
}

.nav-link:hover {
    background-color: var(--primaryColor);
    border-radius: 3px
}

.title {
    background-color: var(--primaryColor);
    color: white;
    text-align: center;
    padding: 10px;
    border-radius: 30px;
    cursor: pointer;
}

.search-btn {
    background: var(--primaryColor);
    text-decoration: none;
    color: white;
    border-radius: 20px;
    text-transform: uppercase;
    font-weight: 200;
    font-size: .8rem;


    &:hover {
        background-color: #30694bd3;
        transition: .3s;
    }
}

.hamburger {
    &__btn {
        display: block;
        width: 50px;
        height: 50px;
        border: none;
        border-radius: 250px;
        position: relative;
        z-index: 100;
        appearance: none;
        cursor: pointer;
        outline: none;

        span {
            display: block;
            width: 20px;
            height: 1px;
            margin: auto;
            background: white;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            transition: all .5s ease;

            &.top {
                transform: translateY(-5px);
            }

            &.bottom {
                transform: translateY(5px);
            }
        }

        &.active {
            .top {
                transform: rotate(-45deg);
            }

            .mid {
                transform: translateX(-40px) rotate(180deg);
                opacity: 0;
            }

            .bottom {
                transform: rotate(45deg);
            }
        }

    }
}

/* navbar */
.navbar {
    background-color: rgba(128, 128, 128, 0.4);
    height: 80px;
    position: sticky;
    width: 100%;
    top: 0;
    overflow: visible;
    z-index: 100;
}

.navbar-nav {
    text-transform: uppercase;
}

.mobile {
    color: white;
    font-size: .8rem;
    margin-top: 150px;
}

.mobile a {
    color: white;
    font-size: .8rem;
}

.my-link {
    text-decoration: none;
    color: white;

    &:hover {
        color: var(--primaryColor);
    }
}


.nav-link,
.dropdown-item {
    font-size: .8rem;
}

.logo {
    max-height: 3rem;
}

.top-bar {
    font-size: .9rem;

}

.top-bar i {
    color: white;
}

.navbar-toggler {
    border: none;
    padding: 0;
    outline: none;

    &:focus {
        box-shadow: none;
    }
}



@media only screen and (max-width : 991px) {

    .dropdown-menu {
        overflow: hidden;
        overflow-y: auto;
        max-height: calc(100vh - 150px);
        background: rgba(0, 0, 0, 0.9);
        // font-size: .7rem;
    }

    .navbar-nav {
        padding: 20px;
    }

    .navbar {
        height: 50px;
    }

    .menu {
        margin-top: -10px;
    }

    .navbar-collapse {
        text-align: center;
        background: rgba(0, 0, 0, 0.9);
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 100vh;
        padding-top: 10%;
        transition: all .5s;

        .nav-item {
            opacity: 0;
            transition: opacity 0.4s cubic-bezier(0.58, 0.3, 0.005, 1);
            padding: 0;

            .nav-link {
                color: white;
                font-size: 1.2rem;
            }
        }
    }

    .show {
        visibility: visible;
        opacity: 1;
        z-index: 9;


        .nav-item {
            opacity: 1;

            &:nth-child(1) {
                transition-delay: 0.05s;
            }

            &:nth-child(2) {
                transition-delay: 0.15s;
            }

            &:nth-child(3) {
                transition-delay: 0.25s;
            }

            &:nth-child(4) {
                transition-delay: 0.35s;
            }

            &:nth-child(5) {
                transition-delay: 0.45s;
            }

            &:nth-child(6) {
                transition-delay: 0.55s;
            }

            &:nth-child(7) {
                transition-delay: 0.65s;
            }

            &:nth-child(8) {
                transition-delay: 0.75s;
            }
        }
    }
}

@media only screen and (min-width : 992px) {
    .hamburger__btn {
        display: none;
    }

    .mobile {
        display: none;
    }
}
</style>

<script>
import $ from 'jquery'
export default {
    name: 'navbar',
    data() {
        return {
            visible: false,
            navOpen: false,
        }
    },
    methods: {
        scrollToTop() {
            window.scrollTo(0, 0)
        }
    },
    created() {
        $(document).ready(function () {
            $(window).scroll(function () {
                var scroll = $(window).scrollTop();
                if (scroll > 1) {
                    $(".navbar").css({ "background-color": "var(--primaryColor)", "box-shadow": "0 0 10px 3px rgba(0, 0, 0, 0.192)", "height": "50px", "transition": ".3s" });
                    $(".search-btn").css({ "background-color": "white", "color": "#333" });
                    $(".logospan").css({ "color": "white" });
                    $(".navbar").addClass("slideIn");

                }
                else {
                    $(".navbar").css({ "background-color": "", "box-shadow": "", "height": "", "transition": ".3s" });
                    $(".search-btn").css({ "background-color": "", "color": "white" });
                    $(".logospan").css({ "color": "" });
                    $(".navbar").removeClass("slideIn");

                }
            })
        })
    }
}
</script>
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
                    <small class="px-1"><i class="bi bi-envelope-open px-1"></i>contact@fitosan.ro</small>
                </div>
            </div>
        </div>
    </div>

    <!-- navbar -->
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid menu">
            <router-link class="navbar-brand mt-2" to="/" @click="scrollToTop()">
                <h2 class="logo"><span class="logospan">Fito</span>San</h2>
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
                        <input class="form-control me-2 search" type="search" placeholder="Nume produs.."
                            aria-label="Search">
                        <button class="btn d-flex align-items-center search-btn"><i
                                class="bi bi-search me-1"></i>Caută</button>
                    </div>
                    <div class="nav-item dropdown has-megamenu">
                        <a class="nav-link dropdown-toggle text-white" href="#" data-bs-toggle="dropdown"> Categorii /
                            Produse</a>
                        <div class="dropdown-menu megamenu text-white">


                            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
                                <div class="col">
                                    <h6 class="title">Categorie</h6>
                                    <div class="nav-item"><a class="nav-link text-white" href="#">Produs</a></div>
                                    <div class="nav-item"><a class="nav-link text-white" href="#">Produs</a></div>
                                    <div class="nav-item"><a class="nav-link text-white" href="#">Produs</a></div>
                                    <div class="nav-item"><a class="nav-link text-white" href="#">Produs</a></div>
                                    <div class="nav-item"><a class="nav-link text-white" href="#">Produs</a></div>
                                    <div class="nav-item"><a class="nav-link text-white" href="#">Produs</a></div>
                                    <div class="nav-item"><a class="nav-link text-white" href="#">Produs</a></div>
                                    <div class="nav-item"><a class="nav-link text-white" href="#">Produs</a></div>
                                </div>
                                <div class="col">
                                    <h6 class="title">Categorie</h6>
                                    <div class="nav-item"><a class="nav-link text-white" href="#">Produs</a></div>
                                    <div class="nav-item"><a class="nav-link text-white" href="#">Produs</a></div>
                                    <div class="nav-item"><a class="nav-link text-white" href="#">Produs</a></div>
                                    <div class="nav-item"><a class="nav-link text-white" href="#">Produs</a></div>
                                    <div class="nav-item"><a class="nav-link text-white" href="#">Produs</a></div>
                                    <div class="nav-item"><a class="nav-link text-white" href="#">Produs</a></div>
                                    <div class="nav-item"><a class="nav-link text-white" href="#">Produs</a></div>
                                    <div class="nav-item"><a class="nav-link text-white" href="#">Produs</a></div>
                                </div>
                                <div class="col">
                                    <h6 class="title">Categorie</h6>
                                    <div class="nav-item"><a class="nav-link text-white" href="#">Produs</a></div>
                                    <div class="nav-item"><a class="nav-link text-white" href="#">Produs</a></div>
                                    <div class="nav-item"><a class="nav-link text-white" href="#">Produs</a></div>
                                    <div class="nav-item"><a class="nav-link text-white" href="#">Produs</a></div>
                                    <div class="nav-item"><a class="nav-link text-white" href="#">Produs</a></div>
                                    <div class="nav-item"><a class="nav-link text-white" href="#">Produs</a></div>
                                    <div class="nav-item"><a class="nav-link text-white" href="#">Produs</a></div>
                                    <div class="nav-item"><a class="nav-link text-white" href="#">Produs</a></div>
                                </div>
                                <div class="col">
                                    <h6 class="title">Categorie</h6>
                                    <div class="nav-item"><a class="nav-link text-white" href="#">Produs</a></div>
                                    <div class="nav-item"><a class="nav-link text-white" href="#">Produs</a></div>
                                    <div class="nav-item"><a class="nav-link text-white" href="#">Produs</a></div>
                                    <div class="nav-item"><a class="nav-link text-white" href="#">Produs</a></div>
                                    <div class="nav-item"><a class="nav-link text-white" href="#">Produs</a></div>
                                    <div class="nav-item"><a class="nav-link text-white" href="#">Produs</a></div>
                                    <div class="nav-item"><a class="nav-link text-white" href="#">Produs</a></div>
                                    <div class="nav-item"><a class="nav-link text-white" href="#">Produs</a></div>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div class="nav-item">
                        <router-link class="nav-link text-white" to="/info"
                            @click="visible = !visible, navOpen = !navOpen, scrollToTop()">informatii</router-link>
                    </div>
                    <div class="nav-item">
                        <router-link class="nav-link text-white" to="/consultanta"
                            @click="visible = !visible, navOpen = !navOpen, scrollToTop()">consultanta</router-link>
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

                        <div><i class="bi bi-geo-alt-fill px-1"></i>Str. Ștefan Cel Mare, Nr. 577, Matca, Jud. Galați
                        </div>
                        <div><i class="bi bi-telephone-fill px-1"></i>+01 2345 6789</div>
                        <div><i class="bi bi-envelope-fill px-1"></i>contact@fitosan.ro</div>


                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<style scoped lang="scss">
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
@media only screen and (max-width : 991px) {
    .navbar-collapse {
        background: rgba(0, 0, 0, 0.9);
        border-radius: 10px;
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
}

@media only screen and (min-width : 992px) {
    .hamburger__btn {
        display: none;
    }

    .mobile {
        display: none;
    }
}

.mobile {
    color: white;
    font-size: .8rem;
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

// .dropdown:hover .dropdown-menu {
//     display: block;
//     margin-top: 0;
// }

.dropdown-menu {
    border: 0;
    background: rgba(0, 0, 0, 0.9);
}

.dropdown-item:hover {
    background: transparent;
    color: var(--primaryColor) !important;
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

.dropdown-menu {
    overflow: hidden;
    overflow-y: auto;
    max-height: calc(100vh - 150px);
}

.megamenu .title {
    background-color: var(--primaryColor);
    color: white;
    text-align: center;
    padding: 10px;
    border-radius: 30px;
    cursor: pointer;
}

@media all and (min-width: 992px) {

    .navbar .has-megamenu {
        position: static;
    }

    .navbar .megamenu {
        padding: 10px;
        left: 0;
        right: 0;
        width: 100%;
        top: 80px;
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
                    $(".navbar").css({ "background-color": "#30694bf6", "box-shadow": "0 0 10px 3px rgba(0, 0, 0, 0.192)", "height": "50px", "transition": ".3s" });
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
<template>
    <Spinner />
    <Title />
    <div class="contact">
        <div class="container">
            <div class="card">

                <!-- contact -->
                <div class="row row-cols-1 row-cols-lg-2">
                    <div class="col">
                        <div class="line"><i class="bi bi-telephone-fill px-1"></i>Telefon: <span
                                class="text-muted mobil"><a href="tel:0721 234 567">012 345 67 89</a></span>
                        </div>
                        <div class="line"><i class="bi bi-envelope-fill px-1"></i>E-Mail: <span
                                class="text-muted mobil"><a href="mailto:office@itschool.ro">contact@fitosan.ro</a></span>
                        </div>
                        <div class="line"><i class="bi bi-geo-alt-fill px-1"></i>Adresa: <span
                                class="text-muted mobil"><a
                                    href="http://maps.google.com/?q=Str. Capitan Eremia Popescu, Nr. 27">Str. Ștefan Cel Mare, Nr. 577, Matca, Jud. Galați</a></span>
                        </div>
                        <div class="line"><i class="bi bi-facebook px-1"></i>Facebook: <span class="text-muted mobil"><a
                                    href="https://www.facebook.com/">/FitoSan</a></span>
                        </div>
                        <div class="line"><i class="bi bi-instagram px-1"></i>Instagram: <span
                                class="text-muted mobil"><a href="https://www.instagram.com/">/FitoSan</a></span>
                        </div>
                        <div class="line"><i class="bi bi-youtube px-1"></i>Youtube: <span
                                class="text-muted mobil"><a href="https://www.youtube.com/">/FitoSan</a></span>
                        </div>

                    </div>
                    <div class="col">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2779.3046917202214!2d27.489981000000004!3d45.845200999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDXCsDUwJzQyLjciTiAyN8KwMjknMjMuOSJF!5e0!3m2!1sro!2sro!4v1718107430054!5m2!1sro!2sro"
                            class="maps"></iframe>
                    </div>

                </div>


            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.card {
    background-color: white;
    color: #333;
    border: none;
    border-radius: 50px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    padding: 30px;
}

@media only screen and (max-width: 512px) {
    .card {
        padding: 30px 10px 30px 10px;
    }
}

.contact {
    padding-top: 30px;
    padding-bottom: 30px;
}

.maps {
    width: 100%;
    height: 100%;
    border-radius: 20px;
}

.line {
    margin: 20px 0;
}
.line a {
    text-decoration: none;
    color: #333;

    &:hover {
        background-color: var(--orangeColor);
        transition: .3s;
    }
}
</style>

<script>
import Title from "../components/Title.vue"
import Spinner from '../components/Spinner.vue'

export default {
    name: "Contact",
    components: {
        Title,
        Spinner
    },
}
</script>
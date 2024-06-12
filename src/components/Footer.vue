<template>
    <div class="container-fluid bg-dark text-white mt-4">
        <div class="container">
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 py-5">
                <div class="col">
                    <h4 class="text-white mb-4 mt-4">Contact</h4>
                    <div class="d-flex mb-2">
                        <i class="bi bi-geo-alt text-white me-2"></i>
                        <p class="text-white mb-0">Str. Ștefan Cel Mare, Nr.
                            577, Matca, Jud. Galați</p>
                    </div>
                    <div class="d-flex mb-2">
                        <i class="bi bi-envelope-open text-white me-2"></i>
                        <p class="text-white mb-0">contact@fitosan.ro</p>
                    </div>
                    <div class="d-flex mb-2">
                        <i class="bi bi-telephone text-white me-2"></i>
                        <p class="text-white mb-0">+012 345 67890</p>
                    </div>
                </div>
                <div class="col">
                    <h4 class="text-white mb-4 mt-4">Link-uri rapide</h4>
                    <div class="d-flex flex-column justify-content-start">
                        <a class="mb-2" href="#"><i class="bi bi-chevron-compact-right text-white me-2"></i>Acasa</a>
                        <a class="mb-2" href="#"><i class="bi bi-chevron-compact-right text-white me-2"></i>Despre noi
                        </a>
                        <a class="mb-2" href="#"><i class="bi bi-chevron-compact-right text-white me-2"></i>Program</a>
                        <a class="mb-2" href="#"><i class="bi bi-chevron-compact-right text-white me-2"></i>Sediu</a>
                        <a class="mb-2" href="#"><i
                                class="bi bi-chevron-compact-right text-white me-2"></i>Consultanta</a>
                        <a href="#"><i class="bi bi-chevron-compact-right text-white me-2"></i>Contact
                            Us</a>
                    </div>
                </div>
                <div class="col">
                    <h4 class="text-white mb-4 mt-4">Popular</h4>
                    <div class="d-flex flex-column justify-content-start">
                        <a class="mb-2" href="#"><i class="bi bi-chevron-compact-right text-white me-2"></i>GDPR</a>
                        <a class="mb-2" href="#"><i class="bi bi-chevron-compact-right text-white me-2"></i>ANPC</a>
                    </div>
                </div>
                <div class="col">
                    <h4 class="text-white mb-4 mt-4">Harta</h4>
                    <div class="px-1"><iframe
                            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2779.3046917202214!2d27.489981000000004!3d45.845200999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDXCsDUwJzQyLjciTiAyN8KwMjknMjMuOSJF!5e0!3m2!1sro!2sro!4v1718107430054!5m2!1sro!2sro"
                            class="maps"></iframe></div>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid bg-dark text-white py-4">
        <div class="container text-center">
            <p class="mb-0">&copy; <a class="text-secondary fw-bold" href="#">FitoSan </a>. Toate drepturile
                rezervate.
            </p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.col a {
    color: #fff;
    text-decoration: none;
}

.col a:hover {
    color: var(--primaryColor);
    transition: .3s;
    margin-left: 5px;
}

.maps {
    width: 100%;
    border-radius: 20px;
}
</style>

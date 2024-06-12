<template>
    <div class="header-title">
        <div class="container">
            <h1 class="animate fadeInRight one">{{ $route.name }}</h1>
            <span class="text-white">
                <router-link class="link" to='/'><i class="bi bi-house px-2"></i>Acasă</router-link> <span
                    class="text-white px-2">/</span>
                <router-link class="link" :to=$route.path>{{ $route.name }}</router-link>
            </span>
        </div>
    </div>
</template>

<style scoped>
.header-title {
    background-image: linear-gradient(rgba(0, 0, 0, 0.7),
            rgba(0, 0, 0, 0.3)), url(../assets/img/bg.jpg);
    background-size: cover;
    height: 400px;
    margin-top: -80px;
    color: white;
    display: flex;
    align-items: center;
}

.header-title .link {
    color: white;
    text-decoration: none;
}

.header-title a.router-link-exact-active {
    color: var(--primaryColor);
}
</style>
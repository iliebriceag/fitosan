<template>
  <MobileSearch />
  <div class="announcements">
    <div class="container content">
      <h1 class="animate fadeInRight one">Lorem Ipsum !</h1>
      <span class="text animate fadeInLeft two">Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book.</span>
      <div class="animate fadeInRight three" style="margin-top: 15px;"><router-link class="my-btn"
          to="/open">open</router-link></div>
    </div>
  </div>
</template>


<script>
import MobileSearch from '../components/MobileSearch.vue'
export default {
  name: 'home',
  components: {
    MobileSearch
  }
}
</script>


<style scoped lang="scss">
.announcements {
  background-image: linear-gradient(rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.3)), url(../assets/img/bg.jpg);
  background-size: cover;
  height: 85vh;
  margin-top: -80px;
  color: white;
  display: flex;
}

.announcements .content {
  margin-top: 20vh;
}

@media only screen and (max-width: 576px) {
  .announcements .text {
    font-size: .8rem;
  }
}

.announcements .my-btn {
  background: var(--primaryColor);
  text-decoration: none;
  color: white;
  padding: 5px 40px 5px 40px;
  border-radius: 20px;
  text-transform: uppercase;
  font-weight: 300;
  font-size: 1rem;

  &:hover {
    background-color: #30694bd3;
    transition: .3s;
  }
}
</style>
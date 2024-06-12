<template>
  <button class="buttonTop translateBtn"><i class="bi bi-chevron-compact-up d-flex justify-content-center"></i></button>
</template>

<style scoped>
.buttonTop {
  display: none;
  position: fixed;
  right: 15px;
  color: #fff;
  padding: 15px;
  box-shadow: 1px 1px 5px #222;
  -o-box-shadow: 1px 1px 5px #222;
  -webkit-box-shadow: 1px 1px 5px #222;
  -moz-box-shadow: 1px 1px 5px #222;
  -ms-box-shadow: 1px 1px 5px #222;
  font-weight: bold;
  color: #DDD;
  cursor: pointer;
  border-radius: 30px;
  bottom: 10px;
  background-color: var(--primaryColor);
  border: none;
}

@keyframes translateBtn {
  0% {
    transform: translateY(-200px);
  }
}

.translateBtn {
  animation: translateBtn .5s ease;
}
</style>

<script>
import $ from 'jquery'
export default {
  created() {
    $(function () {
      'use strict';
      $(window).scroll(function () {
        if ($(this).scrollTop() >= 300) {
          $('.buttonTop').fadeIn(500);
        } else {

          $('.buttonTop').fadeOut(500);
        }

      });

      $('.buttonTop').click(function () {
        $('body ,html').animate({
          scrollTop: 0
        }, 0);

      });


    });
  }
}
</script>
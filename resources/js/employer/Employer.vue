<template>
    <div id="app">
        <div class="white-background">
            <Emenu/>
        </div>
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </div>
  </template>

  <script>
    import Emenu from '../components/Emenu.vue';

    export default {
      components: {
        Emenu
      }
    }
  </script>

  <style>

  #app {
    text-align: center;
    color: #2c3e50;
  }

    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
      opacity: 0;
    }
  </style>

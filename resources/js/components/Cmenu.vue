<template>
  <b-nav fill tabs>
      <router-link to="/company" tag="li" class="nav-item"><b-nav-item :active="$route.name === 'home'">Home</b-nav-item></router-link>
      <router-link to="/company/register" tag="li" class="nav-item" v-if="!auth"><b-nav-item :active="$route.name === 'register'">Dołącz do nas</b-nav-item></router-link>
      <router-link to="/company/login" tag="li" class="nav-item" v-if="!auth"><b-nav-item :active="$route.name === 'login'">Zaloguj się C</b-nav-item></router-link>
      <router-link to="/company/protected" tag="li" class="nav-item" v-if="auth"><b-nav-item :active="$route.name === 'protected'">Dla zalogowanych</b-nav-item></router-link>
      <li @click="logout" class="nav-item" v-if="auth"><b-nav-item>Wyloguj</b-nav-item></li>
  </b-nav>
</template>

<script>
  export default {
    name: 'Cmenu',
    computed:{
      auth(){
        return this.$store.getters.isAuth;
      }
    },
    methods: {
      logout(){
        this.$store.dispatch('logout');
      }
    }
  };
</script>

<style scoped>

</style>

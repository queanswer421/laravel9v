<template>
  <b-nav fill tabs>
      <router-link to="/employer" tag="li" class="nav-item"><b-nav-item :active="$route.name === 'home'">Home</b-nav-item></router-link>
      <router-link to="/employer/register" tag="li" class="nav-item" v-if="!auth"><b-nav-item :active="$route.name === 'employer.register'">Dołącz do nas</b-nav-item></router-link>
      <router-link to="/employer/login" tag="li" class="nav-item" v-if="!auth"><b-nav-item :active="$route.name === 'employer.login'">Zaloguj się E</b-nav-item></router-link>
      <router-link to="/employer/protected" tag="li" class="nav-item" v-if="auth"><b-nav-item :active="$route.name === 'protected'">Dla zalogowanych</b-nav-item></router-link>
      <li @click="logout" class="nav-item" v-if="auth"><b-nav-item>Wyloguj</b-nav-item></li>
  </b-nav>
</template>

<script>
  export default {
    name: 'Emenu',
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

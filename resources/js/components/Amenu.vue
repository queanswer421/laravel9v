<template>
  <b-nav fill tabs>
      <router-link to="/administrator" tag="li" class="nav-item"><b-nav-item :active="$route.name === 'administrator.home'">Home</b-nav-item></router-link>
      <router-link to="/registerA" tag="li" class="nav-item" v-if="!auth"><b-nav-item :active="$route.name === 'administrator.register'">Dołącz do nas</b-nav-item></router-link>
      <router-link to="/loginA" tag="li" class="nav-item" v-if="!auth"><b-nav-item :active="$route.name === 'login'">Zaloguj się A</b-nav-item></router-link>
      <router-link to="/protectedA" tag="li" class="nav-item" v-if="auth"><b-nav-item :active="$route.name === 'protected'">Dla zalogowanych</b-nav-item></router-link>
      <li @click="logout" class="nav-item" v-if="auth"><b-nav-item>Wyloguj</b-nav-item></li>
  </b-nav>
</template>

<script>
  export default {
    name: 'Amenu',
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

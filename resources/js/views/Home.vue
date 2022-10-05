<template>

  <b-jumbotron class="full-height white-bg">
    <!-- <div class="white-background">
        <Navigation/>
      </div> -->
    <template slot="header">Pracownicy</template>

    <template slot="lead">
      Logowanie dla pracowników firm
    </template>

    <hr class="my-4" />

    <p>
      ####
    </p>

    <b-button variant="primary"><router-link to="/register" tag="span">Rejestracja</router-link></b-button> &nbsp;
    <b-button variant="success"><router-link to="/login" tag="span">Logowanie</router-link></b-button>
  </b-jumbotron>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style>
  .full-height {
    height: 100%;
  }

  .white-bg{
    background:#fff !important;
  }
</style>

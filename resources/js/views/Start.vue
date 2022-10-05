<template>
  <b-jumbotron class="full-height white-bg">
    <template slot="header">Strona startowa</template>

    <template slot="lead">
      $$$$$
    </template>

    <hr class="my-4" />

    <p>
      ######
    </p>

    <b-button variant="danger"><router-link to="/administrator" tag="span">Administrator</router-link></b-button> &nbsp;
    <b-button variant="primary"><router-link to="/company" tag="span">Firma</router-link></b-button>
    <b-button variant="success"><router-link to="/employer" tag="span">Pracownicy</router-link></b-button>
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

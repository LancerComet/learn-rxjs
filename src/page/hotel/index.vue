<template lang="pug">
  div.hotel-page
    h1 Hotel
    p Heroes need to rest.

    div(v-if="myHeroList.length")
      ul
        li(v-if="item in myHeroList")

    div(v-else)
      p You don't have a hero, <router-link to="/pub">Hangout.</router-link>
</template>

<style lang="stylus" scoped>
  .hotel-page
    padding: 20px
</style>

<script lang="ts" src="./index.ts"></script>

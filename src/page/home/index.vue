<template lang="pug">
  div.home-page
    h1 Tour of Heroes
    p Wanna do something today?
    ul
      li
        router-link(to="/") Home
      li
        router-link(to="/pub") Pub
      li
        router-link(to="/hotel") Hotel
</template>

<style lang="stylus" scoped>
  .home-page
    padding: 20px
</style>


<script lang="ts" src="./index.ts"></script>

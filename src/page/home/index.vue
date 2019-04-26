<template lang="pug">
  div.home-page
    h1 Tour of Heroes
    p Wanna do something today?
    ul
      li
        router-link(to="/") Home

      li
        router-link(to="/pub") Pub
</template>

<style lang="stylus" scoped>
</style>


<script lang="ts" src="./index.ts"></script>

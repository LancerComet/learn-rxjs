<template lang="pug">
  div.pub-page
    h1 Pub
    p Heroes never die.
    p {{count$}}

    ul
      li(v-for="item in heroList$")
        router-link(:to="'/hero/' + item.name") {{item.name}}
</template>

<style lang="stylus" scoped>
  .pub-page
    padding: 20px
</style>


<script lang="ts" src="./index.ts"></script>

<template lang="pug">
  div.hero-page
    h1 {{hero.name}}

    ul
      li Attack: {{hero.attack}}
      li Hp: {{hero.hp}}
      li type: {{hero.typeLabel}}

    div
      button(v-if="!isFriend", @click="makeFriend") Make friend
      button(v-else, @click="breakUp") I don't like you anymore.
</template>

<style lang="stylus" scoped>
  .hero-page
    padding: 20px
</style>

<script lang="ts" src="./index.ts"></script>

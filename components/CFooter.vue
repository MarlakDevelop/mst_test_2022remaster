<template>
  <div class="c-footer">
    <div class="c-text">
      <pre><slot></slot></pre>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="sass" scoped>
@import "~/assets/styles/colors.sass"

.c-footer
  height: 60px
  padding: 0 60px
  display: flex
  align-items: center

  .c-text
    font-family: 'Gilroy'
    font-style: normal
    font-weight: 300
    font-size: 13px
    line-height: 15px
    letter-spacing: 0.175729px
    text-transform: uppercase
    color: $text-disable-color
</style>
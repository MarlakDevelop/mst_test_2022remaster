<template>
  <div ref="linkRef">
    <nuxt-link
      class="c-link"
      @click.native="onSelect"
      @mouseover.native="onMouseIn"
      @mouseout.native="onMouseOut"
      :to="{name: props.to.name}"
    ><slot></slot></nuxt-link>
  </div>
</template>

<script lang="ts" setup>
import {onMounted, ref} from 'vue'
import {RouteDataModel} from "~/models/link.model";
import {useRoute} from "vue-router";

const props = defineProps<{
  to: RouteDataModel
}>()
const route = useRoute()
const emit = defineEmits(['onSelect', 'onMouseIn', 'onMouseOut'])

const linkRef = ref<any>(null)

onMounted((): void => {
  if (route.name === props.to.name) {
    setTimeout(() => onSelect(), 100)
  }
})

const onSelect = (): void => emit('onSelect', linkRef.value)
const onMouseIn = (): void => emit('onMouseIn', linkRef.value)
const onMouseOut = (): void => emit('onMouseOut', linkRef.value)
</script>

<style lang="sass" scoped>
@import "~/assets/styles/colors.sass"

.c-link
  font-family: Gilroy
  text-decoration: none
  text-transform: uppercase
  font-size: 12px
  font-weight: 700
  line-height: 15px
  letter-spacing: 0.800000011920929px
  color: $base-color
</style>
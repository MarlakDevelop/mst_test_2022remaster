<template>
  <div class="c-header">
    <div class="c-cube left"></div>
    <div class="c-cube right">
      <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.998047 26.5522L26.5556 0.995117L28.005 2.44437L2.44665 28.0016L0.998047 26.5522ZM12.9987 26.5522L26.5556 12.9957L28.005 14.4437L14.4474 28.0016L12.9987 26.5522ZM14.5569 0.995117L0.998047 14.5533L2.44665 16.001L16.0042 2.44437L14.5569 0.995117Z" fill="#F0F0F0"/>
      </svg>
    </div>
    <div class="c-header-container">
      <div class="c-title">
        {{ props.title }}
      </div>
      <div
        ref="navigationRef"
        class="c-navigation"
      >
        <div class="c-links">
          <c-header-link
            @onSelect="onLinkSelect"
            @onMouseIn="onLinkMouseIn"
            @onMouseOut="onLinkMouseOut"
            v-for="link in props.navigationLinks"
            :to="link.route"
          >
            {{ link.text }}
          </c-header-link>
        </div>
        <div
          ref="navigationUnderlineRef"
          class="c-underline"
        ></div>
      </div>
      <div class="c-contact">
        {{ props.contact }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {onMounted, reactive, ref} from "vue"
import {NavigationLinkModel} from "~/models/link.model"
import CHeaderLink from "~/components/CHeaderLink.vue";

const props = defineProps<{
  title: string,
  contact: string,
  navigationLinks: NavigationLinkModel[]
}>()

const navigationRef = ref<any>(null)
const navigationUnderlineRef = ref<any>(null)

const slideOptions = reactive<{
  selected: any,
  hovered: any
}>({
  selected: null,
  hovered: null
})

const getSideLinkPosition = (element) => {
  const sideLength = 6
  return {
    fromLeft: element.offsetLeft - sideLength,
    fromRight: navigationRef.value.offsetWidth - (element.offsetLeft + element.offsetWidth) - sideLength
  }
}

const recalculateSlide = () => {
  if (slideOptions.selected && slideOptions.hovered) {
    const selected = getSideLinkPosition(slideOptions.selected)
    const hovered = getSideLinkPosition(slideOptions.hovered)
    if (selected.fromLeft > hovered.fromLeft) {
      navigationUnderlineRef.value.style.left = `${hovered.fromLeft}px`
      navigationUnderlineRef.value.style.right = `${selected.fromRight}px`
    } else {
      navigationUnderlineRef.value.style.left = `${selected.fromLeft}px`
      navigationUnderlineRef.value.style.right = `${hovered.fromRight}px`
    }
  } else if (slideOptions.selected) {
    const selected = getSideLinkPosition(slideOptions.selected)
    navigationUnderlineRef.value.style.left = `${selected.fromLeft}px`
    navigationUnderlineRef.value.style.right = `${selected.fromRight}px`
  } else if (slideOptions.hovered) {
    const hovered = getSideLinkPosition(slideOptions.hovered)
    navigationUnderlineRef.value.style.left = `${hovered.fromLeft}px`
    navigationUnderlineRef.value.style.right = `${hovered.fromRight}px`
  } else {
    navigationUnderlineRef.value.style.left = `0`
    navigationUnderlineRef.value.style.right = `100%`
  }
}

const onLinkSelect = (element: any): void => {
  slideOptions.selected = element
  recalculateSlide()
}

const onLinkMouseIn = (element: any): void => {
  slideOptions.hovered = element
  recalculateSlide()
}

const onLinkMouseOut = (): void => {
  slideOptions.hovered = null
  recalculateSlide()
}
onMounted(() => window.addEventListener('resize', () => recalculateSlide()))
</script>

<style lang="sass" scoped>
@import "~/assets/styles/colors.sass"

.c-cube
  background-color: $base-color
  height: 70px
  width: 70px
  position: absolute
  top: 25px
  display: flex
  align-items: center
  justify-content: center
  z-index: 100

  &.left
    left: 25px

  &.right
    right: 25px

.c-header
  position: relative
  height: 60px
  padding: 0 60px

  .c-header-container
    padding: 22px 62px 57px
    display: flex
    justify-content: space-between

  .c-title
    font-family: Gilroy
    font-size: 17px
    font-weight: 700
    line-height: 21px
    letter-spacing: 0.2906287610530853px
    text-align: left
    text-transform: uppercase

  .c-contact
    font-family: Gilroy
    font-size: 17px
    font-weight: 700
    line-height: 21px
    letter-spacing: 0.2906287610530853px
    text-align: left

  .c-navigation
    position: relative

    .c-links
      display: flex
      gap: 56px
      justify-content: space-between

    .c-underline
      height: 4px
      position: absolute
      background-color: $accent-color
      transition: all 0.4s
      bottom: -6px
</style>
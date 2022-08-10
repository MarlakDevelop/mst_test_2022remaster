<template>
  <div class="c-slider-container">
    <div class="c-slider-navigation-container">
      <div class="c-slider-navigation">
        <div
          v-for="link in sliderLinks"
          class="c-slider-link"
        >
          <a
            :class="link.active ? 'active' : ''"
            @click="() => setSlide(link.id)"
          >
            <div class="c-text">{{ link.text }}</div>
          </a>
        </div>
      </div>
    </div>
    <div class="c-slider">
      <div class="c-slider-meta">
        <div class="c-slider-meta-container">
          <div class="c-slider-pagination">
            <div class="c-active">{{ props.slider.current }}</div>
            <div class="c-dash">/</div>
            <div class="c-all">{{ props.slider.slides.length }}</div>
          </div>
        </div>
      </div>
      <div class="c-slides">
        <c-slide
          v-for="slide in slides"
          :key="`slide-${slide.id}`"
          :slide="slide"
        ></c-slide>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {computed} from 'vue'
import {SlideModel, SliderModel} from "~/models/slider.model"
import CSlide from "~/components/CSlide.vue";

const props = defineProps<{
  slider: SliderModel
}>()

const emit = defineEmits(['update:slider'])

const slides = computed(() => props.slider.slides.sort((a, b) => a.id - b.id))

const sliderLinks = computed(
  () => props.slider.slides
  .sort((a, b) => a.id - b.id)
  .map((slide) => {
    return {
      id: slide.id,
      text: slide.text.title,
      active: slide.id === props.slider.current
    }
  })
)

const setSlide = (slideId: number): void => {
  if (slideId === props.slider.current) return
  props.slider.slides = props.slider.slides
    .sort((a, b) => a.id - b.id)
    .map((slide: SlideModel): SlideModel => {
      slide.view.class = ''
      slide.view.style = ''
      if (slide.id === slideId) {
        slide.view.class = (slide.id > props.slider.current) ? ' appear-from-prev' : ' appear-from-next'
      } else if (slide.id === props.slider.current) {
        slide.view.class += (slide.id > slideId) ? ' next-disappear' : ' prev-disappear'
      }
      return slide
    })
  props.slider.current = slideId
}
</script>

<style lang="sass" scoped>
@import "~/assets/styles/colors.sass"

.c-slider-container
  height: 100%
  display: flex

  .c-slider-navigation-container
    width: 280px
    height: 100%
    background-color: $background-color
    display: flex
    flex-direction: column
    justify-content: center

    .c-slider-navigation
      display: flex
      flex-direction: column
      gap: 32px

      .c-slider-link
        display: flex

        a
          cursor: pointer
          position: relative

          .c-text
            font-family: 'Roboto'
            font-style: normal
            font-weight: 300
            font-size: 13px
            line-height: 15px
            transition: all 0.4s
            display: flex
            align-items: center
            letter-spacing: 0.567739px
            color: $text-disable-color
            position: relative
            z-index: 5

          &:after
            content: ""
            display: block
            position: absolute
            transition: all 0.4s
            bottom: -2px
            left: -4px
            right: -4px
            height: 9px
            background-color: transparent
            z-index: 0

          &:hover
            .c-text
              font-family: 'Roboto'
              font-style: normal
              font-weight: 300
              font-size: 13px
              line-height: 15px
              display: flex
              align-items: center
              letter-spacing: 0.567739px
              color: $base-color

            &:after
              background-color: $background-accent-color

          &.active
            .c-text
              font-family: 'Roboto'
              font-style: normal
              font-weight: 700
              font-size: 14px
              line-height: 16px
              letter-spacing: 0.567739px
              text-transform: uppercase
              color: $base-color

            &:after
              background-color: $background-accent-color

  .c-slider
    flex-grow: 1
    height: 100%
    position: relative

    .c-slider-meta
      position: absolute
      top: 0
      bottom: 0
      left: 0
      right: 50%
      z-index: 10
      display: flex
      flex-direction: column
      justify-content: flex-end
      align-items: center

      .c-slider-meta-container
        padding-left: 20px
        max-width: 455px
        width: 100%
        padding-bottom: 160px
        box-sizing: border-box

        .c-slider-pagination
          display: flex
          gap: 2px

          .c-active
            font-family: 'Gilroy'
            font-style: normal
            font-weight: 300
            font-size: 17px
            line-height: 20px
            color: $base-color

          .c-dash
            font-family: 'Gilroy'
            font-style: normal
            font-weight: 300
            font-size: 17px
            line-height: 20px
            color: $text-disable-color

          .c-all
            font-family: 'Gilroy'
            font-style: normal
            font-weight: 300
            font-size: 17px
            line-height: 20px
            color: $text-disable-color
</style>
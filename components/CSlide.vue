<template>
  <div
    class="c-slide"
    ref="slideRef"
    :class="props.slide.view.class"
  >
    <div class="c-slide-text">
      <div class="c-slide-text-container">
        <div class="c-title">{{ props.slide.text.title }}</div>
        <div class="c-description">
          {{ props.slide.text.description }}
          <a class="more-button">
            <svg width="12" height="3" viewBox="0 0 12 3" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 0.5H2.73948V2.74064H0.5V0.5ZM4.98031 0.500004H7.21969V2.74064H4.98031V0.500004ZM11.7001 0.500004H9.45919V2.74064H11.7001V0.500004Z" fill="white"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
    <div class="c-slide-poster">
      <div class="c-slide-poster-container">
        <div class="c-slide-poster-image">
          <img :src="props.slide.image.src">
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {onMounted, onUpdated, ref, watch} from 'vue'
import {defineProps} from "@vue/runtime-core";
import {SlideModel} from "~/models/slider.model";

const props = defineProps<{
  slide: SlideModel
}>()

const slideRef = ref(null)

</script>

<style lang="sass" scoped>
@import "~/assets/styles/colors.sass"

.c-slide
  height: 100%
  display: grid
  visibility: hidden
  position: absolute
  top: 0
  left: 0
  right: 0
  bottom: 0
  grid-template-columns: 50% 50%

  .c-slide-poster
    height: 100%
    overflow: hidden
    position: relative

    .c-slide-poster-container
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: 0
      transition: bottom 12s
      overflow: hidden

      img
        width: 100%
        object-fit: cover
        height: calc(100vh - 120px)

  .c-slide-text
    display: flex
    justify-content: center
    align-items: center

    .c-slide-text-container
      padding-left: 20px
      max-width: 455px
      box-sizing: border-box
      display: flex
      flex-direction: column
      gap: 40px

      .c-title
        font-family: 'Gilroy'
        font-style: normal
        font-weight: 700
        font-size: 44px
        line-height: 53px
        letter-spacing: -0.0255199px
        text-transform: uppercase
        color: $base-color

      .c-description
        font-family: 'Roboto'
        font-style: normal
        font-weight: 400
        font-size: 18px
        line-height: 30px
        letter-spacing: -0.0220791px
        color: $base-color

        .more-button
          display: inline-block
          height: 28px
          width: 28px
          background-color: $base-color
          position: relative
          vertical-align: middle
          margin-left: 6px
          cursor: pointer

          svg
            position: absolute
            top: 50%
            left: 50%
            transform: translate(-50%, -50%)

  &.appear-from-prev
    visibility: visible

    .c-slide-poster
      .c-slide-poster-container
        animation-name: slide-image-appear-from-prev
        animation-duration: 0.4s
        animation-timing-function: linear
        animation-iteration-count: 1
        animation-direction: alternate
        animation-delay: 0s
        animation-fill-mode: forwards

    .c-slide-text
      animation-name: slide-text-appear-from-prev
      animation-duration: 0.4s
      animation-timing-function: linear
      animation-iteration-count: 1
      animation-direction: alternate
      animation-delay: 0s
      animation-fill-mode: forwards

  &.appear-from-next
    visibility: visible

    .c-slide-poster
      .c-slide-poster-container
        animation-name: slide-image-appear-from-next
        animation-duration: 0.4s
        animation-timing-function: linear
        animation-iteration-count: 1
        animation-direction: alternate
        animation-delay: 0s
        animation-fill-mode: forwards

    .c-slide-text
      animation-name: slide-text-appear-from-next
      animation-duration: 0.4s
      animation-timing-function: linear
      animation-iteration-count: 1
      animation-direction: alternate
      animation-delay: 0s
      animation-fill-mode: forwards

  &.next-disappear
    visibility: visible

    .c-slide-poster
      .c-slide-poster-container
        animation-name: next-slide-image-disappear
        animation-duration: 0.4s
        animation-timing-function: linear
        animation-iteration-count: 1
        animation-direction: alternate
        animation-delay: 0s
        animation-fill-mode: forwards

    .c-slide-text
      animation-name: slide-text-disappear
      animation-duration: 0.4s
      animation-timing-function: linear
      animation-iteration-count: 1
      animation-direction: alternate
      animation-delay: 0s
      animation-fill-mode: forwards

  &.prev-disappear
    visibility: visible

    .c-slide-poster
      .c-slide-poster-container
        animation-name: prev-slide-image-disappear
        animation-duration: 0.4s
        animation-timing-function: linear
        animation-iteration-count: 1
        animation-direction: alternate
        animation-delay: 0s
        animation-fill-mode: forwards

    .c-slide-text
      animation-name: slide-text-disappear
      animation-duration: 0.4s
      animation-timing-function: linear
      animation-iteration-count: 1
      animation-direction: alternate
      animation-delay: 0s
      animation-fill-mode: forwards

@keyframes slide-text-appear-from-prev
  0%
    padding-top: 10vh
    opacity: 0

  100%
    padding-top: 0
    opacity: 1

@keyframes slide-image-appear-from-prev
  0%
    bottom: 100%

  100%
    bottom: 0

@keyframes slide-text-appear-from-next
  0%
    padding-bottom: 10vh
    opacity: 0

  100%
    padding-bottom: 0
    opacity: 1

@keyframes slide-image-appear-from-next
  0%
    opacity: 0

  1%
    opacity: 1

  100%
    opacity: 1

@keyframes next-slide-image-disappear
  0%
    bottom: 0

  100%
    bottom: 100%

@keyframes prev-slide-image-disappear
  0%
    opacity: 1

  99%
    opacity: 1

  100%
    opacity: 0

@keyframes slide-text-disappear
  0%
    opacity: 1

  100%
    opacity: 0
</style>
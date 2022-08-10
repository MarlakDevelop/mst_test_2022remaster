<template>
  <c-slider
    v-model:slider="slider"
  ></c-slider>
</template>

<script lang="ts" setup>
import {reactive} from 'vue'
import {SliderModel} from "~/models/slider.model";
import CSlider from "~/components/CSlider.vue";

const slider = reactive<SliderModel>({
  slides: [
    {
      id: 1,
      text: {
        title: 'Архитектура',
        description: 'Оригинальная архитектура жилого комплекса бизнес-класса «Первомайская» формирует современный стиль жизни'
      },
      image: {
        src: '/images/Архитектура.png'
      },
      view: {
        class: 'appear-from-next',
        style: ''
      }
    },
    {
      id: 2,
      text: {
        title: 'Благоустройство',
        description: 'Запроектированные большие окна, которые пропускают много солнечного света, наполнят Ваши квартиры теплотой и уютом'
      },
      image: {
        src: '/images/Благоустройство.png'
      },
      view: {
        class: '',
        style: ''
      }
    },
    {
      id: 3,
      text: {
        title: 'Безопасность',
        description: 'Современный двор европейского уровня — территория для детей, игр на свежем воздухе и вечерних'
      },
      image: {
        src: '/images/Безопасность.png'
      },
      view: {
        class: '',
        style: ''
      }
    },
    {
      id: 4,
      text: {
        title: 'Инженерия',
        description: 'Оригинальная архитектура жилого комплекса бизнес-класса «Первомайская» формирует современный стиль жизни'
      },
      image: {
        src: '/images/Инженерия.png'
      },
      view: {
        class: '',
        style: ''
      }
    },
    {
      id: 5,
      text: {
        title: 'Инфраструктура',
        description: 'Прекрасный вариант для тех, кто предпочитает жить в спокойном районе среди интеллигенции, но при этом чувствовать ритм мегаполиса'
      },
      image: {
        src: '/images/Инфраструктура.png'
      },
      view: {
        class: '',
        style: ''
      }
    },
    {
      id: 6,
      text: {
        title: 'Транспортная доступность',
        description: 'Жилой комплекс «Первомайска» расположен в престижном Академическом районе'
      },
      image: {
        src: '/images/ТранспортнаяДоступность.png'
      },
      view: {
        class: '',
        style: ''
      }
    },
  ],
  current: 1
})
</script>

<style scoped>

</style>
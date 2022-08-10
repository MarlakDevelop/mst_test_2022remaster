<template>
  <div class="layout">
    <c-header
      :title="siteOptions.title"
      :contact="siteOptions.contact"
      :navigation-links="navigationLinks"
    ></c-header>
    <div class="page-container">
      <div class="page">
        <router-view v-slot="{Component}">
          <transition name="fade">
            <component :is="Component"></component>
          </transition>
        </router-view>
      </div>
    </div>
    <c-footer>{{ siteOptions.footer }}</c-footer>
  </div>
</template>

<style lang="sass">
@import "~/assets/styles/colors.sass"

@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap')
@font-face
  font-family: Gilroy
  src: url('~/assets/fonts/gilroy/Gilroy-ExtraBold.otf')
@font-face
  font-family: Gilroy
  src: url('~/assets/fonts/gilroy/Gilroy-Light.otf')

body
  margin: 0
  padding: 0

.layout
  width: 100vw
  height: 100vh
  overflow: hidden
  display: flex
  flex-direction: column
  background-color: white

.page-container
  padding: 0 60px
  flex-grow: 1

  .page
    background-color: $background-alternative-color
    height: 100%

.fade-enter-active,
.fade-leave-active
  transition: opacity 0.5s ease

.fade-enter-from,
.fade-leave-to
  opacity: 0

</style>

<script lang="ts" setup>
import {reactive} from "vue"
import {SiteModel} from "~/models/site.model"
import CHeader from "~/components/CHeader.vue"
import CFooter from "~/components/CFooter.vue"
import {NavigationLinkModel} from "~/models/link.model";
import {useHead} from "nuxt/app";
import {definePageMeta} from "#imports";

const siteOptions = reactive<SiteModel>({
  title: 'Первомайская',
  contact: '8 888 888 88 88',
  footer: 'Разработано в MST    |    2018'
})

useHead({
  title: siteOptions.title
})

const navigationLinks: NavigationLinkModel[] = [
  {
    text: 'О комплексе',
    route: {
      name: 'index'
    }
  },
  {
    text: 'Особенности',
    route: {
      name: 'features'
    }
  },
  {
    text: 'Пентхаусы',
    route: {
      name: 'houses'
    }
  },
  {
    text: 'Выбрать квартиру',
    route: {
      name: 'floors'
    }
  }
]
</script>
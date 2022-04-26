<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderComponent from '@/components/app/header.vue'
import loginComponent from '@/components/app/formLogin.vue'

import LateralMenu from '@/components/app/lateralMenu.vue'
</script>

<template>
  
    <HeaderComponent />

  <main>
    <LateralMenu />
    <!-- <loginComponent /> -->
  </main>
    <RouterView />
</template>

<style>
@import '@/assets/css/style_header.css';
@import '@/assets/css/normalize/normalize.css'
/* @import '@/assets/base.css'; */

</style>

<script setup>
import { RouterView } from 'vue-router'
import HeaderComponent from '@/components/app/header.vue'
import LateralMenu from './components/app/lateralMenu.vue';
</script>

<template>
  <HeaderComponent />

  <LateralMenu />
  <main>
    <RouterView />
  </main>
  <!-- footer -->
</template>

<style>
@import '@/assets/css/style_header.css';
@import '@/assets/css/normalize/normalize.css';
@import '@/assets/css/root.css'
/* @import '@/assets/base.css'; */

</style>

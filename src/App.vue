<script setup>
import { RouterView } from 'vue-router'
import HeaderComponent from '@/components/app/header.vue'
import LateralMenu from './components/app/lateralMenu.vue'
import ckeditor from '@ckeditor/ckeditor5-vue';
</script>

<template>
  <HeaderComponent />

  <LateralMenu />
  <main>
    <div id="app">
        <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
    </div>
    <RouterView />
  </main>
  <!-- footer -->
</template>

<script>
    import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

    export default {
        name: 'app',
        data() {
            return {
                editor: ClassicEditor,
                editorData: '<p>Content of the editor.</p>',
                editorConfig: {
                    // The configuration of the editor.
                }
            };
        }
    }
</script>

<style>
@import '@/assets/css/style_header.css';
@import '@/assets/css/normalize/normalize.css';
@import '@/assets/css/root.css'
/* @import '@/assets/base.css'; */

</style>

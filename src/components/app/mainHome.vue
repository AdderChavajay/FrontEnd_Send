<script setup>
import { onMounted, ref } from "vue";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
const editorData = ref('')
const editorConfig = {}


function saveDocumentContetn() {
    try {
        // axios.post('/save/content', {
        //     content: editorData.value,
        //     title: 'titulo'
        // })
        console.log('content ', editorData.value);
    } catch (error) {
        console.error(error);
    }
}
onMounted(() => {
    // const { contenido } = axios.get('/get-doc-content')
    // editorData.value = contenido
    setTimeout(() => {
        editorData.value = '<h3>Este es un subtitulo que viene del servidor</h3><p><strong>Bold</strong></p>'
    }, 1000 * 3);
})
</script>

<template>
        <section class="main">
        <section class="typeDocument">
            <select name="transporte">
                <option>Tipos de Documentos</option>
                <option>Oficios</option>
                <option>Memorandum</option>
                <option>Ciculares</option>
            </select>
        </section>

        <ckeditor :editor="ClassicEditor" v-model="editorData" :config="editorConfig"></ckeditor>
            <div class="button">
                <button @click="saveDocumentContetn">Enviar</button>
            </div>
        </section>
</template>

<style scoped>
@import '@/assets/css/style_main.css';
</style>


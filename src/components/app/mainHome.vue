<script setup>
import { onMounted, ref } from "vue";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
const editorData = ref('')
const nameDocument= ref('')
const editorConfig = {}

function saveDocumentContent() {

    try {
        axios.post('http://localhost:80/api/document', {
            content: editorData.value,
            name: nameDocument.value,
        })
        console.log('content ', editorData.value);
    } catch (error) {
        console.error(error);
    }
}
onMounted(() => {
    // const { contenido } = axios.get('/get-doc-content')
    // editorData.value = contenido
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

            <select name="sendPeople">
                <option>Enviar a</option>
                <option>Jefe</option>
                <option>Jefes de cada Area</option>
            </select>
        <input type="text" placeholder="nameDocument" v-model="name">    
        </section>
        <ckeditor :editor="ClassicEditor" v-model="editorData" :config="editorConfig"></ckeditor>
        <div class="button">
            <button @click="saveDocumentContent">Enviar</button>
        </div>
        </section>
</template>

<style scoped>
@import '@/assets/css/style_main.css';
</style>


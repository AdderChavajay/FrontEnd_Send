<script setup>
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from 'vue-router'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from "axios";
const editorData = ref('')
const nameDocument= ref('')
const documentId = ref(null)
const loadingDoc = ref(false)
const editorConfig = {}
const $route = useRoute()
const $router = useRouter()

async function saveDocumentContent() {
    if (!documentId.value) {
        return
    }
    try {
        await axios.put(`http://localhost:80/api/document/${documentId.value}`, {
            content: editorData.value,
        })
        console.log('content ', editorData.value);
    } catch (error) {
        console.error(error);
    }
}

async function getDocContent(docId) {
    try {
        loadingDoc.value = true
        const { data } = await axios.get(`http://localhost:80/api/document/${docId}`)
        editorData.value = data.doc.content
        nameDocument.value = data.doc.name
        documentId.value = data.doc.id
    } catch (error) {
        console.error(error);
    } finally {
        loadingDoc.value = false
    }
}
onMounted(() => {
    if (!$route.params.docId) {
        $router.replace('/register')
    }
    getDocContent($route.params.docId)
})
</script>

<template>
        <section class="main">
            <div v-if="loadingDoc">
                Cargando...
            </div>

            <h2>{{ nameDocument }}</h2>
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
            <button @click="saveDocumentContent">Guardar</button>
        </div>
        </section>
</template>

<style scoped>
@import '@/assets/css/style_main.css';
</style>


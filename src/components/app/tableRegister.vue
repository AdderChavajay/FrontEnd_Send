<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const succesCreadoDoc = ref(false)
const creatingDoc = ref(false)
const nameDoc = ref('')
const errorCreateDoc = ref(null)
const documents = ref([])
const $router = useRouter()

async function createNewDoc() {
    try {
        creatingDoc.value = true
        const { data } = await axios.post('http://localhost:80/api/document', {
            name: nameDoc.value
        })
        documents.value.push(data.doc)
        succesCreadoDoc.value = true
    } catch (error) {
        errorCreateDoc.value = error
        console.error('cant create new doc', error);
    } finally {
        creatingDoc.value = false
    }
}
async function getFullListDocs () {
    try {
        creatingDoc.value = true
        const { data } = await axios.get('http://localhost:80/api/documents')
        documents.value = data.docs
    } catch (error) {
        errorCreateDoc.value = error
        console.error('cant create new doc', error);
    } finally {
        creatingDoc.value = false
    }
}
onMounted(() => {
    getFullListDocs()
})

function goToFullDocument(docId) {
    $router.push(`/main/${docId}`)
}
</script>

<template>
    <section class="main">
        
        <div>
            <form @submit.prevent>
                <fieldset>
                    <legend>Nombre del Documento </legend>
                        <input type="text" placeholder="Nombre documento" v-model="nameDoc">
                </fieldset>
            </form>
        </div>
        <div class="button">
            <button @click="createNewDoc">Crear documento</button>
        </div>

        <div class="msj" v-if="succesCreadoDoc" style="background-color: green; color: white;">
            El documento fue creado
        </div>
        <div class="msj" v-if="creatingDoc">
            En espera...
        </div>
        <div class="msj-error" v-if="errorCreateDoc">
            Error create doc
            <pre>
                {{ errorCreateDoc }}
            </pre>
        </div>
        <div id="main-container">
            <table>
                <thead>
                    <tr>
                        <th>Tipo Documento</th>
                        <th>No. Documento</th>
                        <th>Nombre</th>
                        <th>Estado</th>
                        <th>Fecha de Creacion</th>
                        <th>action</th>
                        <!-- <th>Fecha de Envio</th> -->
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="(doc, index) in documents" :key="index">
                        <td>Oficios</td>
                        <td>{{ doc.noDocument }}</td>
                        <td>
                            {{ doc.name }}
                        </td>
                        <td>{{ doc.state }}</td>
                        <td>{{ doc.created_at }}</td>
                        <td>
                            <button @click.prevent="goToFullDocument(doc.id)">
                                Editar
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>

<style scoped>
@import '@/assets/css/style_main.css';
@import '@/assets/css/style_table.css';
</style>
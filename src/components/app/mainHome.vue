<!-- <script setup>
import { createApp } from 'vue';
import CKEditor from '@ckeditor/ckeditor5-vue'; -->
<!-- </script> -->

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
            <div>
                <h1>
                    Hola Mundo
                </h1>
            </div>
            <div>
                <article>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum nihil nostrum similique porro ut temporibus culpa, ipsa libero iusto, dolorum sed iure velit laboriosam amet illum accusantium voluptates eveniet dicta?
                    </p>
                </article>
                <article>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique quisquam ullam eveniet dolorem quaerat repellat repellendus quam optio, enim debitis at, in placeat quos suscipit nisi? At atque sequi dolor.
                    </p>
                </article>
            </div>
            <div class="button">
                <button>Enviar</button>
            </div>
             <!-- <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor> -->
        </section>
</template>

<style scoped>
@import '@/assets/css/style_main.css';
</style>


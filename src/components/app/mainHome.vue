<script setup>
import { ref } from "vue";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import DecoupedEditor from '@ckeditor/ckeditor5-build-decoupled-document'
// import DecoupedEditor from '../../packages/ckeditor5-34.0.0/build/ckeditor'
const editorData = ref('Uno de mas')
const editorConfig = {}
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
        <!-- <div class="document-editor">
            <div class="document-editor__toolbar"></div>
            <div class="document-editor__editable-container">
                <div class="document-editor__editable">
                    <p>The initial editor data.</p>
                </div>
            </div>
        </div> -->

        <ckeditor :editor="ClassicEditor" v-model="editorData" :config="editorConfig"></ckeditor>
            <div class="button">
                <button>Enviar</button>
            </div>
        </section>
</template>

<style scoped>
@import '@/assets/css/style_main.css';
.document-editor {
    border: 1px solid var(--ck-color-base-border);
    border-radius: var(--ck-border-radius);

    /* Set vertical boundaries for the document editor. */
    max-height: 700px;

    /* This element is a flex container for easier rendering. */
    display: flex;
    flex-flow: column nowrap;
}
.document-editor__toolbar {
    /* Make sure the toolbar container is always above the editable. */
    z-index: 1;

    /* Create the illusion of the toolbar floating over the editable. */
    box-shadow: 0 0 5px hsla( 0,0%,0%,.2 );

    /* Use the CKEditor CSS variables to keep the UI consistent. */
    border-bottom: 1px solid var(--ck-color-toolbar-border);
}

/* Adjust the look of the toolbar inside the container. */
.document-editor__toolbar .ck-toolbar {
    border: 0;
    border-radius: 0;
}
/* Make the editable container look like the inside of a native word processor application. */
.document-editor__editable-container {
    padding: calc( 2 * var(--ck-spacing-large) );
    background: var(--ck-color-base-foreground);

    /* Make it possible to scroll the "page" of the edited content. */
    overflow-y: scroll;
}

.document-editor__editable-container .ck-editor__editable {
    /* Set the dimensions of the "page". */
    width: 15.8cm;
    min-height: 21cm;

    /* Keep the "page" off the boundaries of the container. */
    padding: 1cm 2cm 2cm;

    border: 1px hsl( 0,0%,82.7% ) solid;
    border-radius: var(--ck-border-radius);
    background: white;

    /* The "page" should cast a slight shadow (3D illusion). */
    box-shadow: 0 0 5px hsla( 0,0%,0%,.1 );

    /* Center the "page". */
    margin: 0 auto;
}
/* Set the default font for the "page" of the content. */
.document-editor .ck-content,
.document-editor .ck-heading-dropdown .ck-list .ck-button__label {
    font: 16px/1.6 "Helvetica Neue", Helvetica, Arial, sans-serif;
}

</style>


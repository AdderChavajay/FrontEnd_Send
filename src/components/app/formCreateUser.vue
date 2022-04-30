<script setup>
import axios from 'axios'
import {ref} from "vue" 
import router from '../../router';
const name = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')
const nameDepartament = ref('')
const confirmPassword = ref('') 
const posiotion = ref('')

async function register(){
    await axios.post('http://localhost:80/api/createUser',{
        name: name.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value,
        nameDepartament: nameDepartament.value,
        password_confirmation: confirmPassword.value,
        codeWork: posiotion.value,

    });
    router.replace('/login')
}

</script>
<template>
    <div class="ContainerCreateUser">
        <div class="formCreateUser">
            <center>
                <p>
                    Create User
                </p>
            </center>
            <form action="" method="post">
                <div class="names">
                    <fieldset>
                        <legend>Nombres</legend>
                        <input type="text" name="email" id="email" v-model="name"
                        placeholder="Escriba los nombres">
                    </fieldset>
                </div>
                <div class="lastNames">
                    <fieldset>
                        <legend>Apellidos</legend>
                        <input type="text" name="email" id="email" v-model="lastName"
                        placeholder="Escriba los apellidos" >
                    </fieldset>
                </div>
                <div class="Posiotion">
                    <fieldset>
                        <legend>Position</legend>
                        <input type="text" name="codegWork" id="email" v-model="posiotion"
                        placeholder="Posicion de Trabajo">
                    </fieldset>
                </div>
                <div class="nameDepartament">
                    <fieldset>
                        <legend>Nombre del Departamento</legend>
                        <input type="text" name="nameDepartament" id="nameDepartament" v-model="nameDepartament"
                        placeholder="Nombre de Departamento de Area">
                    </fieldset>
                </div>
                
                <div class="email">
                    <fieldset>
                        <legend>Correo Electronico</legend>
                        <input type="email" name="email" id="email" v-model="email"
                        placeholder="Email">
                    </fieldset>
                </div>
                <div class="password">
                    <fieldset>
                        <legend>Contraseña</legend>
                        <input type="password" name="password" id="password" v-model="password"
                        placeholder="Password">
                    </fieldset>
                </div>
                <div class="confirPassword">
                    <fieldset>
                        <legend>Confimar Contraseña</legend>
                        <input type="password" name="password" id="password" v-model="confirmPassword"
                        placeholder="Repit your Password">
                    </fieldset>
                </div>
                <hr>
                <div class="btn_aceptar">
                    <button @click.prevent="register"  type="submit">Aceptar</button>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>
@import '@/assets/css/style_createUser.css';
</style>
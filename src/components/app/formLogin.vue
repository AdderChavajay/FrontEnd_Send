<script setup>
import axios from 'axios'
import {ref} from "vue" 
import router from '../../router';

const email = ref('')
const password = ref('')

async function login(){
    await axios.post('http://localhost:80/api/login',{
        email: email.value,
        password: password.value,
    })
    router.replace('/main')
}

</script>
<template>
    <section class="login">
        <div class="container">
            <div>

                <center>
                    <p>
                        Login
                    </p>
                </center>
            <form action="" method="post">
                <div class="email">
                    <fieldset>
                        <legend>Correo Electronico</legend>
                        <input v-model="email" type="email" name="email" id="email" >
                    </fieldset>
                </div>
                <div class="password">
                    <fieldset>
                        <legend>Contraseña</legend>
                        <input type="password" v-model="password" name="password" id="password" >
                    </fieldset>
                </div>
                <div class="forgot_pass">
                    <a href=""> ¿Has olvidado tu contraseña? </a>
                </div>
                    <hr>
                <div class="btn_aceptar">
                    <button @click.prevent="login" type="submit">Aceptar</button>
                </div>
            </form>
            </div>
        </div>
    </section>
</template>

<style scoped>
    @import '@/assets/css/style_login.css';
</style>
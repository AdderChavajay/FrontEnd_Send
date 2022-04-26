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
                        <input type="email" name="email" id="email" >
                    </fieldset>
                </div>
                <div class="password">
                    <fieldset>
                        <legend>Contraseña</legend>
                        <input type="password" name="password" id="password" >
                    </fieldset>
                </div>
                <div class="forgot_pass">
                    <a href=""> ¿Has olvidado tu contraseña? </a>
                </div>
                    <hr>
                <div class="btn_aceptar">
                    <button type="submit">Aceptar</button>
                </div>
            </form>
            </div>
        </div>
    </section>
</template>

<style>
    @import '@/assets/css/style_login.css';
</style>
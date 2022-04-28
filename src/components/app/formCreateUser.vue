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
                        <input type="text" name="email" id="email"
                        placeholder="Escriba los nombres">
                    </fieldset>
                </div>
                <div class="lastNames">
                    <fieldset>
                        <legend>Apellidos</legend>
                        <input type="text" name="email" id="email"
                        placeholder="Escriba los apellidos" >
                    </fieldset>
                </div>
                <div class="nameDepartament">
                    <fieldset>
                        <legend>Nombre del Departamento</legend>
                        <input type="text" name="nameDepartament" id="nameDepartament" 
                        placeholder="Nombre de Departamento de Area">
                    </fieldset>
                </div>
                <div class="codigWork">
                    <fieldset>
                        <legend>Codigo de Trabajo de Area</legend>
                        <input type="text" name="email" id="email" 
                        placeholder="Codigo de Trabajo de Area">
                    </fieldset>
                </div>
                
                <div class="email">
                    <fieldset>
                        <legend>Correo Electronico</legend>
                        <input type="email" name="email" id="email" 
                        placeholder="Email">
                    </fieldset>
                </div>
                <div class="password">
                    <fieldset>
                        <legend>Contraseña</legend>
                        <input type="password" name="password" id="password" 
                        placeholder="Password">
                    </fieldset>
                </div>
                <div class="confirPassword">
                    <fieldset>
                        <legend>Confimar Contraseña</legend>
                        <input type="password" name="password" id="password" 
                        placeholder="Repit your Password">
                    </fieldset>
                </div>
                <hr>
                <div class="btn_aceptar">
                    <button type="submit">Aceptar</button>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>
@import '@/assets/css/style_createUser.css';
</style>
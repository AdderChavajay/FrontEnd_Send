<script setup>
import { onMounted } from "vue";
function sideBarEffect() {
    const menuToggle = document.querySelector('.menuToggle')
    const navigation = document.querySelector('.navigation')

    menuToggle.onclick = function(){
        navigation.classList.toggle('open')
    }

    const list = document.querySelectorAll('.list');
    function activeLink(){
        list.forEach((item) => 
            item.classList.remove('active')
        );
            this.classList.add('active');
    }

    list.forEach((item) => 
        item.addEventListener('click', activeLink)
    )
}
onMounted(() => {
    sideBarEffect()
})
</script>

<template>
    <div class="Grid">
        
    <div class="navigation">
        <div class="menuToggle">
        </div>
        <br><br><br><br>
        <ul>
            <!-- Perfil  -->
            <li class="list perfil">
                <a href="#">
                    <span class="icon">
                        <img src="fotos/foto.jpg" width="45px" alt="">
                    </span>
                    <span class="text">Perfil</span>
                </a>
            </li>

            <li class="list active" style="--crl: #239b56">
                <a href="#">
                    <span class="icon">
                        <ion-icon name="home-outline"></ion-icon>
                    </span>
                    <span class="text">Home</span>
                </a>
            </li>
            <li class="list " style="--crl: #5dade2">
                <a href="#">
                    <span class="icon">
                        <ion-icon name="code-working-outline"></ion-icon>
                    </span>
                    <span class="text">Services</span>
                </a>
            </li>
            <li class="list " style="--crl: #c0392b">
                <a href="#">
                    <span class="icon">
                        <ion-icon name="settings-outline"></ion-icon>
                    </span>
                    <span class="text">Settings</span>
                </a>
            </li>
            <li class="list " style="--crl: #d4ac0d">
                <a href="#">
                    <span class="icon">
                        <ion-icon name="exit-outline"></ion-icon>
                    </span>
                    <span class="text">Exit</span>
                </a>
            </li>
        </ul>
    </div>
    </div>
</template>

<style scoped>
    @import '@/assets/css/style_menuLateral.css';
</style>


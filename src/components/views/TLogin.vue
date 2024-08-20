<template>
    <div class="auth-container">
        <div class="bg-wrapper"></div>
        <div class="pop-up">
            <t-pop-up/>
        </div>
    </div>
</template>

<script>
import TPopUp from '@/components/ui/PopUp.vue'
export default {
    components: {
        TPopUp
    }
}
</script>

<style scoped>
.auth-container {

  background: linear-gradient(112.1deg, rgb(32, 38, 57) 11.4%, rgb(63, 76, 119) 70.2%); 
}
.bg-wrapper {
  background: linear-gradient(
    rgba(0, 0, 0, 0.3),
    rgba(0, 0, 0, 0.3)
  ),
  url('../../assets/main.jpg'); 
  background-size: contain;
  background-position: 50%;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
}
</style>
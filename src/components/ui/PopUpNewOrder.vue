<template>
<div class="container">
    <div class="mask" @click="$emit('dropPopUp')"></div>
    <div class="pop-up-container">
        <div class="header">
            <h1 class="title">Создание заявки</h1>
            <span class="title-label">Новая</span>
        </div>
        <div class="fields">
            <div class="row">
                <input-order :placeholder="'Дом'" 
                :type="'search'"
                :imgsrc="require('@/assets/dropdown.svg')"
                :elHeight="'40px'"/>
                <input-order :placeholder="'Квартира'" 
                :type="'search'"
                :imgsrc="require('@/assets/dropdown.svg')"
                :elHeight="'40px'"/>
                <input-order :placeholder="'Срок'" 
                :type="'search'"
                :imgsrc="require('@/assets/dropdown.svg')"
                :elHeight="'40px'"/>
            </div>
            <div class="row">
                <input-order :placeholder="'Фамилия'"
                :elHeight="'40px'"/>
                <input-order :placeholder="'Имя'"
                :elHeight="'40px'"/>
                <input-order :placeholder="'Отчество'"
                :elHeight="'40px'"/>
                <input-order :placeholder="'Телефон'"
                :elHeight="'40px'"/>
            </div>
            <div class="row">
                <input-order 
                :type="'textarea'" 
                :placeholder="'Описание заявки'"
                :elHeight="'132px'"/>
            </div>
        </div>
        <div class="button-wrap">
            <button class="create-button">Создать</button>
        </div>
    </div>
</div>
</template>

<script>
import InputOrder from './InputOrder.vue'
export default {
  components: { InputOrder },

}
</script>

<style scoped>
.button-wrap {
    width: inherit;
    display: flex;
    flex-direction: row-reverse;
}
.create-button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 16px;
    width: 87px;
    height: 36px;
    background: #50B053;
    box-shadow: 0px 4px 4px rgba(106, 174, 94, 0.25);
    border-radius: 2px;
    color: #fff;
}
.fields {
    margin: 24px 0;
    display: flex;
    flex-direction: column;
    gap: 32px;
}
.row {
    display: flex;
    gap: 14px;
    width: 100%;
}
.header {
    display: flex;
    justify-content: space-between;
    height: 40px;
    align-items: center;
}
.title {
    font-weight: 600;
    font-size: 16px;
    color: #333333;
    margin: 0;
}
.title-label {
    font-size: 14px;
}
.mask {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: #000;
    opacity: 0.2;
}
.pop-up-container {
	position: fixed;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
    border-radius: 8px;
    background: #fff;
    padding: 24px 32px;
    width: 50vw;
}
</style>
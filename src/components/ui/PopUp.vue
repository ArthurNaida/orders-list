<template>
    <div class="container">
        <div class="title-container">
            <span class="title-content">Авторизация</span>
        </div>
        <form class="form" action="/orders">
            <div class="inputs-container">
                <div class="input-container">
                    <div class="ico-wrap">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.95 18C14.8667 18 12.8083 17.5458 10.775 16.6375C8.74167 15.7292 6.89167 14.4417 5.225 12.775C3.55833 11.1083 2.27083 9.25833 1.3625 7.225C0.454167 5.19167 0 3.13333 0 1.05C0 0.75 0.1 0.5 0.3 0.3C0.5 0.1 0.75 0 1.05 0H5.1C5.33333 0 5.54167 0.0791667 5.725 0.2375C5.90833 0.395833 6.01667 0.583333 6.05 0.8L6.7 4.3C6.73333 4.56667 6.725 4.79167 6.675 4.975C6.625 5.15833 6.53333 5.31667 6.4 5.45L3.975 7.9C4.30833 8.51667 4.70417 9.1125 5.1625 9.6875C5.62083 10.2625 6.125 10.8167 6.675 11.35C7.19167 11.8667 7.73333 12.3458 8.3 12.7875C8.86667 13.2292 9.46667 13.6333 10.1 14L12.45 11.65C12.6 11.5 12.7958 11.3875 13.0375 11.3125C13.2792 11.2375 13.5167 11.2167 13.75 11.25L17.2 11.95C17.4333 12.0167 17.625 12.1375 17.775 12.3125C17.925 12.4875 18 12.6833 18 12.9V16.95C18 17.25 17.9 17.5 17.7 17.7C17.5 17.9 17.25 18 16.95 18Z" fill="#757575"/>
                        </svg>
                    </div>
                    <div class="input-content">
                        <label for="phone-input">Логин или телефон</label>
                        <input type="text" id="phone-input" placeholder="Телефон" 
                        v-model="phone"
                        v-mask="phoneMask">
                    </div>
                </div>
                <div class="input-container">
                    <i class="ico-wrap">
                        <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.616 18C1.17133 18 0.791 17.8417 0.475 17.525C0.159 17.2083 0.000666667 16.8287 0 16.386V7.616C0 7.172 0.158333 6.792 0.475 6.476C0.791667 6.16 1.17167 6.00133 1.615 6H3V4C3 2.886 3.38833 1.941 4.165 1.165C4.941 0.388333 5.886 0 7 0C8.114 0 9.05933 0.388333 9.836 1.165C10.6127 1.94167 11.0007 2.88667 11 4V6H12.385C12.829 6 13.209 6.15833 13.525 6.475C13.841 6.79167 13.9993 7.17167 14 7.615V16.385C14 16.829 13.8417 17.209 13.525 17.525C13.2083 17.841 12.8283 17.9993 12.385 18H1.616ZM7 13.5C7.422 13.5 7.77733 13.3553 8.066 13.066C8.35533 12.7773 8.5 12.422 8.5 12C8.5 11.578 8.35533 11.2227 8.066 10.934C7.77667 10.6453 7.42133 10.5007 7 10.5C6.57867 10.4993 6.22333 10.644 5.934 10.934C5.64467 11.2227 5.5 11.578 5.5 12C5.5 12.422 5.64467 12.7773 5.934 13.066C6.22267 13.3553 6.578 13.5 7 13.5ZM4 6H10V4C10 3.16667 9.70833 2.45833 9.125 1.875C8.54167 1.29167 7.83333 1 7 1C6.16667 1 5.45833 1.29167 4.875 1.875C4.29167 2.45833 4 3.16667 4 4V6Z" fill="#757575"/>
                        </svg>
                    </i>
                    <input v-if="showPassword" type="text" id="password-input" placeholder="Пароль" v-model="password">
                    <input v-else type="password" id="password-input" placeholder="Пароль" v-model="password">
                    <button class="control-button"
                    @click.prevent="toggleShowPassword">
                        <i class="ico-wrap" v-if="showPassword">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 19" width="24">
                                <path  d="M0 0h24v24H0V0z" fill="none"/>
                                <path  fill="#757575" d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                            </svg>
                        </i>   
                        <i class="ico-wrap" v-else>
                            <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.83 6L14 9.16V9C14 8.20435 13.6839 7.44129 13.1213 6.87868C12.5587 6.31607 11.7956 6 11 6H10.83ZM6.53 6.8L8.08 8.35C8.03 8.56 8 8.77 8 9C8 9.79565 8.31607 10.5587 8.87868 11.1213C9.44129 11.6839 10.2044 12 11 12C11.22 12 11.44 11.97 11.65 11.92L13.2 13.47C12.53 13.8 11.79 14 11 14C9.67392 14 8.40215 13.4732 7.46447 12.5355C6.52678 11.5979 6 10.3261 6 9C6 8.21 6.2 7.47 6.53 6.8ZM1 1.27L3.28 3.55L3.73 4C2.08 5.3 0.78 7 0 9C1.73 13.39 6 16.5 11 16.5C12.55 16.5 14.03 16.2 15.38 15.66L15.81 16.08L18.73 19L20 17.73L2.27 0M11 4C12.3261 4 13.5979 4.52678 14.5355 5.46447C15.4732 6.40215 16 7.67392 16 9C16 9.64 15.87 10.26 15.64 10.82L18.57 13.75C20.07 12.5 21.27 10.86 22 9C20.27 4.61 16 1.5 11 1.5C9.6 1.5 8.26 1.75 7 2.2L9.17 4.35C9.74 4.13 10.35 4 11 4Z" fill="#757575"/>
                            </svg>
                        </i>
                    </button> 
                </div>
            </div>
            <input type="submit" value="Войти">
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            phone: '+7',
            password: '',
            showPassword: false
        }
    },
    computed: {
        phoneMask: function() {
            return /(\+7\d)|(\+7\s)/.test(this.phone.substring(0, 3)) ? '+7 (###) ###-##-##' : ''
        }
    },
    methods: {
        toggleShowPassword() {
            this.showPassword = !this.showPassword
        }
    }
}
</script>

<style scoped>
.container {
    position: relative;
    width: 340px;
    height: 290px;
    background: #fff;
    border: 1px solid #000;
    border-radius: 5px;
    padding: 52px, 20px, 20px, 20px;
}
.title-content {
    color: #ffffff;
}
.title-container {
    background: #44A248;
    position: absolute;
    width: 308px;
    height: 56px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    top: -19px;
    left: 50%;
    transform: translateX(-50%);
}
form {
    height: 100%;
    display: flex;
    align-items: center;
}
.inputs-container {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 8px;
    align-items: center;
    margin: 0 20px;
}
.input-container {
    position: relative;
    border-bottom: 1px solid #cccccc;
    box-sizing: content-box;
    width: inherit;
    height: 49px;
    display: flex;
    align-items: end;
    gap: 8px;
    padding-bottom: 7px;
}
.input-content {
    display: flex;
    flex-direction: column;
    height: inherit;
    justify-content: space-between;
}
.ico-wrap {
    display: flex;
    width: 24px;
    justify-content: center;
}
.control-button {
    position: absolute;
    right: 13px;
    cursor: pointer;
}
label {
    text-align: left;
}
input[type="text"], input[type="text"]:focus-visible,
input[type="password"], input[type="password"]:focus-visible {
    border: 0;
    outline: none;
    width: 75%;
}
input[type="submit"] {
    position: absolute;
    width: 110px;
    height: 36px;
    bottom: 20px;
    margin: 0 auto;
    left: 50%;
    transform: translateX(-50%);
    background-color: #50B053;
    color: #fff;
    border: 0;
    border-radius: 4px;
    cursor: pointer;
}
label {
    font-size: 12px;
    line-height: 18px;
    color: #50B053;
}
</style>
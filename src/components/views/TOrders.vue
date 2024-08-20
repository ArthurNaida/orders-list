<template>
    <div class="container">
        <button class="create-button" @click="isModal = true">Создать</button>
        <div class="search-container">
                <input-order 
                :type="'search'" 
                :elHeight="'40px'"
                :imgsrc="require('@/assets/search.svg')"
                v-model="orderNumberInput" 
                :placeholder="'Поиск (№ заявки, название)'"/>
                <!-- <i class="ico">
                    <img :src="require('@/assets/search.svg')" alt="" class="ico"> -->
                    <!-- <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.6 18L10.3 11.7C9.8 12.1 9.225 12.4167 8.575 12.65C7.925 12.8833 7.23333 13 6.5 13C4.68333 13 3.14583 12.3708 1.8875 11.1125C0.629167 9.85417 0 8.31667 0 6.5C0 4.68333 0.629167 3.14583 1.8875 1.8875C3.14583 0.629167 4.68333 0 6.5 0C8.31667 0 9.85417 0.629167 11.1125 1.8875C12.3708 3.14583 13 4.68333 13 6.5C13 7.23333 12.8833 7.925 12.65 8.575C12.4167 9.225 12.1 9.8 11.7 10.3L18 16.6L16.6 18ZM6.5 11C7.75 11 8.8125 10.5625 9.6875 9.6875C10.5625 8.8125 11 7.75 11 6.5C11 5.25 10.5625 4.1875 9.6875 3.3125C8.8125 2.4375 7.75 2 6.5 2C5.25 2 4.1875 2.4375 3.3125 3.3125C2.4375 4.1875 2 5.25 2 6.5C2 7.75 2.4375 8.8125 3.3125 9.6875C4.1875 10.5625 5.25 11 6.5 11Z" fill="#999999"/>
                    </svg> -->
                <!-- </i> -->
            <!-- <div class="input-container"> -->
                <input-order 
                :type="'search'"
                :elHeight="'40px'" 
                :placeholder="'Дом'"
                :imgsrc="require(('@/assets/dropdown.svg'))"/>
                <!-- <i class="ico">
                    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 6.37509L0 0.375092H1.4H6L10.6 0.375433L12 0.375092L6 6.37509Z" fill="#999999"/>
                    </svg>
                </i> -->
            <!-- </div> -->
        </div>
        <table class="orders">
            <tr>
                <th>№</th>
                <th>Создана</th>
                <th>Адрес</th>
                <th>Заявитель</th>
                <th>Описание</th>
                <th>Срок</th>
                <th>Статус</th>
            </tr>
            <tr v-for="(order, index) of filteredOrders" :key="index">
                <td style="width: 8vw;"><button class="order-number-button">{{ Object.entries(order)[0][1] }}</button></td>
                <td style="width: 12vw;"><span style="max-width: 12vw;">{{ Object.entries(order)[1][1] }}</span></td>
                <td style="width: 16vw;"><span style="max-width: 16vw;">{{ Object.entries(order)[2][1] }}</span></td>
                <td style="width: 16vw;"><span style="max-width: 16vw;">{{ Object.entries(order)[3][1] }}</span></td>
                <td style="width: 20.8vw;"><span style="max-width: 20.8vw;">{{ Object.entries(order)[4][1] }}</span></td>
                <td style="width: 12vw;"><span style="max-width: 12vw;">{{ Object.entries(order)[5][1] }}</span></td>
                <td style="width: 12vw;"><span style="max-width: 12vw;">{{ Object.entries(order)[6][1] }}</span></td>
            </tr>
        </table>
        <pop-up-new-order v-if="isModal" @dropPopUp="isModal = false"/>
    </div>
</template>

<script>
import PopUpNewOrder from '../ui/PopUpNewOrder.vue';
import InputOrder from '../ui/InputOrder.vue';
export default {
    components: { PopUpNewOrder, InputOrder },
    data() {
        return {
            orderNumberInput: '',
            isModal: false,
            orders: [
                {
                    "№": 390,
                    "Создана": "17.04.2024",
                    "Адрес": "Лесная, 10, кв. 5",
                    "Заявитель": "Иванов А. П.",
                    "Описание": "Подкрасить царапины на стенах и что-то еще",
                    "Срок": "24.04.2024 10:00",
                    "Статус": "Новая",
                },
                {
                    "№": 330,
                    "Создана": "17.04.2024",
                    "Адрес": "Лесная, 10, кв. 5",
                    "Заявитель": "Забавкин А. П.",
                    "Описание": "Отремонтировать протекающую снизу трубу",
                    "Срок": "24.04.2024 10:00",
                    "Статус": "Новая",
                },
                {
                    "№": 190,
                    "Создана": "17.04.2024",
                    "Адрес": "Лесная, 10, кв. 5",
                    "Заявитель": "Забавкин А. П.",
                    "Описание": "Подкрасить царапины на стенах и что-то еще",
                    "Срок": "24.04.2024 10:00",
                    "Статус": "Новая",
                },
                {
                    "№": 290,
                    "Создана": "17.04.2024",
                    "Адрес": "Лесная, 10, кв. 5",
                    "Заявитель": "Забавкин А. П.",
                    "Описание": "Подкрасить царапины на стенах и что-то еще",
                    "Срок": "24.04.2024 10:00",
                    "Статус": "Новая",
                },
            ]
        }
    },
    computed: {
        filteredOrders() {
            return this.orderNumberInput !== '' 
                ? this.orders.filter((e) => (e["№"] + e["Заявитель"] + e["Описание"]).toLowerCase().includes(this.orderNumberInput.toLowerCase())) 
                : this.orders;
        }
    }
}
</script>

<style scoped>
.create-button {
    display: flex;
    float: inline-end;
    justify-content: center;
    align-items: center;
    padding: 10px 16px;
    width: 78px;
    height: 26px;
    background: #50B053;
    box-shadow: 0px 4px 4px rgba(106, 174, 94, 0.25);
    border-radius: 2px;
    margin-bottom: 32px;
}
.container {
    background: #fff;
    margin: 20px 10px;
}
.search-container {
    display: flex;
    gap: 27px;
    width: 100%;
    margin: 32px 0;
}
.orders {
    margin-top: 32px;
}
th {
    color: #50B053;
    font-weight: normal;
} 
tr {
    border-bottom: 1px solid #cccccc;
    height: 58px;
}
td, th {
    text-align: start;
}
table {
    width: 100%;
    border-collapse: collapse;
}
.order-number-button {
    width: 56px;
    height: 28px;
    border-radius: 4px;
}
button {
    color: #fff;
    cursor: pointer;
    background: #50B053;
}
span {
    overflow: hidden;
    text-overflow: ellipsis;
    display: inline-block;
    vertical-align: bottom;
    white-space: nowrap;
}
th, span {
    padding: 0 8px;
}
th:nth-child(1),
td:nth-child(1) {
    padding-left: 4px;
}
</style>
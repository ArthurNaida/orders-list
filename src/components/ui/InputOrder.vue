<template>
    <div class="input-container">
        <input v-if="type !== 'textarea'"
        :style="{height: elHeight}" 
        :type="type" 
        height="40"
        @input="$emit('input', $event.target.value)"
        :placeholder="placeholder"/>
        <textarea v-else
        :style="{height: elHeight}"
        :placeholder="placeholder"></textarea>
        <img :src="imgsrc" alt="" class="ico">
    </div>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: 'text'
        },
        placeholder: {
            type: String,
            default: ''
        },
        imgsrc: {
            type: String,
        },
        elHeight: {
            type: String
        }
    }
}
</script>

<style scoped>
.input-container {
    position: relative;
    border-bottom: 1px solid #cccccc;
    box-sizing: content-box;
    width: inherit;
    display: flex;
    align-items: center;
    padding-bottom: 10px;
}
.ico {
    position: absolute;
    right: 12px;
}
</style>
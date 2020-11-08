<template>
    <div class="money">
        <div>
            <button 
                @click="$emit('payment-received')" 
                class="money-btn"> Press here for payment </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "Money",
    props: ["money"],
   
}
</script>

<style scoped>
    .money-btn {
        background: yellow;
        border: black 2px;
        height: 100px;
        width: 80px;
        border-radius: 5px;
        padding: 10px;
        text-align: center;
        font-size: 16px;
    }

    .money-btn:hover {
        background: rgb(17, 154, 1);
    }
</style>
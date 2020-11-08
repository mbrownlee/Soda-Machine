<template>
    <div class="eject">
        <div>
            Eject payment <button 
                @click="$emit('payment-refunded')" 
                class="eject-btn" 
                :disabled="machineStates.readyToVend === false"></button>
        </div>
    </div>
</template>

<script>
export default {
    name: "Money",
    props: ["money"],
    computed: {
        machineStates() {
            return this.$store.state.machineStates;
        }
    }
}
</script>

<style scoped>
    .eject-btn {
        background: red;
        border: black 2px;
        height: 40px;
        width: 40px;
        border-radius: 50px;
        padding: 10px;
        text-align: center;
        font-size: 16px;
    }

    .eject-btn:hover {
        background: rgb(17, 154, 1);
    }

    .eject-btn:disabled {
        background: grey;
    }
</style>
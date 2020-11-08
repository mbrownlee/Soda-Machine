<template>
  <div class="sodas column">
    <div v-bind:key="soda.id" v-for="soda in allSodas">
      <button @click="$emit('soda-vend', soda.name)" class="soda-btn"
        :disabled="machineStates.readyToVend === false"
        >
        {{ soda.name }} 
      </button>
    </div>
  </div>
</template>

<script>

export default {
  name: "Sodas",
  computed: {
    allSodas() {
      return this.$store.state.sodas;
    },
    machineStates() {
       return this.$store.state.machineStates;
    }
  }
};
</script>

<style scoped>
.soda-btn {
  background: blue;
  height: 100px;
  width: 100px;
  border-radius: 50px;
  color: white;
  padding: 10px;
  text-align: center;
  font-size: 24px;
}

.soda-btn:hover {
  background: rgb(17, 154, 1);
}

.soda-btn:disabled {
    background: grey;
}
</style>

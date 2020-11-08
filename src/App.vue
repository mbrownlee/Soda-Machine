<template>
  <div id="app">
    <img alt="Eduity logo" src="./assets/eduitylogo.png">
    <Home />
    <div class="container">
    <div class="left-side column">
    <Money v-on:payment-received="paymentReceived" />
    <Return v-on:payment-refunded="paymentRefunded" />
    </div>
    <Sodas v-on:soda-vend="sodaVend" />
  </div>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import Money from './components/Money.vue'
import Return from './components/Return.vue'
import Sodas from './components/Sodas.vue'

export default {
  name: 'App',
  components: {
    Home,
    Money,
    Return,
    Sodas
  },
  methods: {
    paymentReceived() {
      this.$store.commit('READYTOVEND')
    },
    paymentRefunded() {
      this.$store.commit('REFUNDPAYMENT')
    },
    sodaVend(name) {
      
      this.$store.commit('VENDSODA', name)

      console.log(`Enjoy your ${name}`)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  display: flex;
  flex-direction: row;
}

.left-side {
  display: flex;
  flex-direction: column;
}

.column {
  flex-basis: 40%;
}
</style>

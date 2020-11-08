import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    machineStates: {
        readyToVend: false
    },
    sodas: [
        {
          id: 1,
          name: "Coke",
          quantity: 5,
        },
        {
          id: 2,
          name: "Diet Coke",
          quantity: 5,
        },
        {
          id: 3,
          name: "Sprite",
          quantity: 5,
        },
        {
          id: 4,
          name: "Dr. Pepper",
          quantity: 5,
        }
      ]
};
const getters= {
    allSodas: state => state.sodas
};
const actions= {
};
const mutations= {
    READYTOVEND(state) {
       
        state.machineStates.readyToVend = true
    },
    REFUNDPAYMENT(state) {
        state.machineStates.readyToVend = false
    },
    VENDSODA(state, sodaName) {
        console.log(sodaName)
        state.machineStates.readyToVend = false
        const purchasedSoda = state.sodas.find(
            (soda) => {
                return soda.name === sodaName
            }
        )
        purchasedSoda.quantity -= 1


    }
};

export const store = new Vuex.Store({
    state,getters,actions,mutations
})
